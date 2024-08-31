import {inject, injectable} from 'inversify';
import {IPost} from '../../domain/entities/IPost';
import {IPostService} from '../../infrastructure/services/IPostService';
import {IGetPostsQuery} from './IGetPostsQuery';
import {Dependencies} from '../../infrastructure/dependencies';

@injectable()
export class GetPostsQuery implements IGetPostsQuery {
	constructor(
		@inject(Dependencies.IPostService) private postService: IPostService
	) {}
	getPosts(): Promise<IPost[]> {
		return this.postService.getPostList();
	}
}
