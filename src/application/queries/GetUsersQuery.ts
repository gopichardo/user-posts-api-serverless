import 'reflect-metadata';
import {inject, injectable} from 'inversify';
import {IUser} from '../../domain/entities/IUser';
import {Dependencies} from '../../infrastructure/dependencies';
import {IUserService} from '../../infrastructure/services/IUserService';
import {IGetUsersQuery} from './IGetUsersQuery';

@injectable()
export class GetUsersQuery implements IGetUsersQuery {
	constructor(
		@inject(Dependencies.IUserService) private userService: IUserService
	) {}

	getUsers(): Promise<IUser[]> {
		return this.userService.getUserList();
	}
}
