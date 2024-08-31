import {IUserPosts} from './IUserPosts';

export abstract class UserPost {
	abstract getListPosts(): IUserPosts[];
}
