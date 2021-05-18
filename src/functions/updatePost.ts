import {
  APIGatewayEvent,
  Handler,
  Context,
  APIGatewayProxyResult,
} from "aws-lambda";
import middify from "../core/middify";
import formatJSONResponse from "../core/formatJsonResponse";
import postService from "../database/services";
import UpdatePost from "../dtos/updatePostDto";

export const handler: Handler = middify(
  async (
    event: APIGatewayEvent & UpdatePost,
    context: Context
  ): Promise<APIGatewayProxyResult> => {
    const postId: string = event.pathParameters.postId;
    const { body } = event;
    try {
      const posts = await postService.updatePost(postId, body);

      return formatJSONResponse(200, posts);
    } catch (err) {
      return formatJSONResponse(400, err);
    }
  }
);
