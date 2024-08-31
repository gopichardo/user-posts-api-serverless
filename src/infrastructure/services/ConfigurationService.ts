import 'reflect-metadata';
import {injectable} from 'inversify';
import {IConfig} from '../../domain/config/IConfig';
import {IConfigurationService} from './IConfigurationService';

@injectable()
export class ConfigurationService implements IConfigurationService {
	getConfig(): Promise<IConfig> {
		const config: IConfig = {
			posts_api_url: process.env.POSTS_API_URL!,
			users_api_url: process.env.USERS_API_URL!,
		};
		return Promise.resolve(config);
	}
}
