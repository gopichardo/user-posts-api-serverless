import {IUserPosts} from '../../domain/entities/IUserPosts';

export interface IGetUserPostsUseCase {
	getUserPosts(): Promise<IUserPosts[]>;
}
