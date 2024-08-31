import {IUser} from '../../domain/entities/IUser';

export interface IGetUsersQuery {
	getUsers(): Promise<IUser[]>;
}
