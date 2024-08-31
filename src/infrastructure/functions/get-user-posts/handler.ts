import {APIGatewayProxyHandler, APIGatewayProxyResult} from 'aws-lambda';
import container from '../../container';
import {IGetUserPostsUseCase} from '../../../application/usecases/IGetUserPostsUseCase';
import {Dependencies} from '../../dependencies';

const handler: APIGatewayProxyHandler = async () => {
	try {
		const userPostsQuery = container.get<IGetUserPostsUseCase>(
			Dependencies.IGetUserPostsQuery
		);
		const data = await userPostsQuery.getUserPosts();

		const response: APIGatewayProxyResult = {
			statusCode: 200,
			body: JSON.stringify(data),
		};

		return response;
	} catch (error) {
		console.log(error);

		return {
			statusCode: 500,
			body: JSON.stringify(error),
		};
	}
};

export default handler;
