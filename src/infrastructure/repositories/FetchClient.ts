import 'reflect-metadata';
import {injectable} from 'inversify';
import {IHttpClient} from './IHttpClient';

@injectable()
export class FetchClient implements IHttpClient {
	async get<T>(url: string): Promise<T> {
		const data = await fetch(url).then(res => res.json());

		return data as T;
	}
}
