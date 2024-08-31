import 'reflect-metadata';
import {inject, injectable} from 'inversify';
import {IGetUserPostsUseCase} from './IGetUserPostsUseCase';
import {Dependencies} from '../../infrastructure/dependencies';
import {IUserPosts} from '../../domain/entities/IUserPosts';
import {IGetPostsQuery} from '../queries/IGetPostsQuery';
import {IGetUsersQuery} from '../queries/IGetUsersQuery';
import {IUser} from '../../domain/entities/IUser';
import {IPost} from '../../domain/entities/IPost';

@injectable()
export class GetUserPostsUseCase implements IGetUserPostsUseCase {
	constructor(
		@inject(Dependencies.IGetPostsQuery)
		private readonly getPostsQuery: IGetPostsQuery,
		@inject(Dependencies.IGetUsersQuery)
		private readonly getUsersQuery: IGetUsersQuery
	) {}
	async getUserPosts(): Promise<IUserPosts[]> {
		const [posts, users] = await Promise.all([
			this.getPostsQuery.getPosts(),
			this.getUsersQuery.getUsers(),
		]);

		const userPosts = this.generateList(users, posts);

		return userPosts;
	}

	generateList(users: IUser[], posts: IPost[]): IUserPosts[] {
		const userPosts: IUserPosts[] = [];

		users.map(user => {
			userPosts.push({
				...user,
				postcount: posts.filter(post => post.userId === user.id).length,
			});
		});

		return userPosts;
	}
}
