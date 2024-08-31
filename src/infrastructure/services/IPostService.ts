import {IPost} from '../../domain/entities/IPost';

export interface IPostService {
	getPostList(): Promise<IPost[]>;
}
