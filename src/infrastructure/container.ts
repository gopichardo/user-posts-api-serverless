import {Container} from 'inversify';
import {UserService} from './services/UserService';
import {IUserService} from './services/IUserService';
import {IHttpClient} from './repositories/IHttpClient';
import {FetchClient} from './repositories/FetchClient';
import {GetUserPostsUseCase} from '../application/usecases/GetUserPostsUseCase';
import {IGetUserPostsUseCase} from '../application/usecases/IGetUserPostsUseCase';
import {IConfigurationService} from './services/IConfigurationService';
import {ConfigurationService} from './services/ConfigurationService';
import {Dependencies} from './dependencies';
import {IGetPostsQuery} from '../application/queries/IGetPostsQuery';
import {GetPostsQuery} from '../application/queries/GetPostsQuery';
import {IGetUsersQuery} from '../application/queries/IGetUsersQuery';
import {GetUsersQuery} from '../application/queries/GetUsersQuery';
import {IPostService} from './services/IPostService';
import {PostService} from './services/PostService';

const container = new Container({
	defaultScope: 'Singleton',
	autoBindInjectable: true,
	skipBaseClassChecks: true,
});

container
	.bind<IGetUserPostsUseCase>(Dependencies.IGetUserPostsQuery)
	.to(GetUserPostsUseCase);
container.bind<IGetPostsQuery>(Dependencies.IGetPostsQuery).to(GetPostsQuery);
container.bind<IGetUsersQuery>(Dependencies.IGetUsersQuery).to(GetUsersQuery);
container.bind<IHttpClient>(Dependencies.IHttpClient).to(FetchClient);
container.bind<IUserService>(Dependencies.IUserService).to(UserService);
container.bind<IPostService>(Dependencies.IPostService).to(PostService);
container
	.bind<IConfigurationService>(Dependencies.IConfigurationService)
	.to(ConfigurationService);

export default container;
