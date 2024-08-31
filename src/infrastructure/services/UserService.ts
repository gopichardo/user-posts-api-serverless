import 'reflect-metadata';
import {inject, injectable} from 'inversify';
import {IUser} from '../../domain/entities/IUser';
import {IHttpClient} from '../repositories/IHttpClient';
import {IUserService} from './IUserService';
import {IConfigurationService} from './IConfigurationService';
import {UserDto} from '../../domain/dtos/UserDto';
import {User} from '../../domain/entities/User';
import {Dependencies} from '../dependencies';

@injectable()
export class UserService implements IUserService {
	constructor(
		@inject(Dependencies.IHttpClient) private httpClient: IHttpClient,
		@inject(Dependencies.IConfigurationService)
		private configurationService: IConfigurationService
	) {}
	async getUserList(): Promise<IUser[]> {
		const {users_api_url} = await this.configurationService.getConfig();
		const userList: IUser[] = [];

		await this.httpClient.get<UserDto[]>(users_api_url).then(users => {
			users.forEach(user => {
				userList.push(new User({...user}));
			});
		});
		return userList;
	}
}
