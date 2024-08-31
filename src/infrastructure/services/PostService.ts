import 'reflect-metadata';
import {inject, injectable} from 'inversify';
import {IPost} from '../../domain/entities/IPost';
import {IHttpClient} from '../repositories/IHttpClient';
import {IPostService} from './IPostService';
import {IConfigurationService} from './IConfigurationService';
import {Post} from '../../domain/entities/Post';
import {Dependencies} from '../dependencies';

@injectable()
export class PostService implements IPostService {
	constructor(
		@inject(Dependencies.IHttpClient) private httpClient: IHttpClient,
		@inject(Dependencies.IConfigurationService)
		private configurationService: IConfigurationService
	) {}
	async getPostList(): Promise<IPost[]> {
		const {posts_api_url} = await this.configurationService.getConfig();
		const postList: IPost[] = [];

		await this.httpClient.get<IPost[]>(posts_api_url).then(posts => {
			posts.forEach(post => {
				postList.push(new Post({...post}));
			});
		});

		return postList;
	}
}
