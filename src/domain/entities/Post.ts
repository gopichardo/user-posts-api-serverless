import {PostDto} from '../dtos/PostDto';
import {IPost} from './IPost';

export class Post implements IPost {
	userId: number;
	id: number;
	title: string;
	body: string;

	constructor({userId, id, title, body}: PostDto) {
		this.userId = userId;
		this.id = id;
		this.title = title;
		this.body = body;
	}
}
