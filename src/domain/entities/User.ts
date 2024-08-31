import {UserDto} from '../dtos/UserDto';
import {IUser} from './IUser';
import {IUserPosts} from './IUserPosts';

export class User implements IUser, IUserPosts {
	id: number;
	name: string;
	username: string;
	email: string;
	postcount: number;

	constructor({id, name, username, email}: UserDto) {
		this.id = id;
		this.name = name;
		this.username = username;
		this.email = email;
		this.postcount = 0;
	}
}
