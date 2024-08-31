import {IPost} from '../../domain/entities/IPost';

export interface IGetPostsQuery {
	getPosts(): Promise<IPost[]>;
}
