import {IConfig} from '../../domain/config/IConfig';

export interface IConfigurationService {
	getConfig(): Promise<IConfig>;
}
