import {IUser} from '../../domain/entities/IUser';

export interface IUserService {
	getUserList(): Promise<IUser[]>;
}
