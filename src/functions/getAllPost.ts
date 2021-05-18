import {
  APIGatewayEvent,
  Handler,
  Context,
  APIGatewayProxyResult,
} from "aws-lambda";
import middify from "../core/middify";
import formatJSONResponse from "../core/formatJsonResponse";
import postService from "../database/services";

export const handler: Handler = middify(
  async (
    event: APIGatewayEvent,
    context: Context
  ): Promise<APIGatewayProxyResult> => {
    try {
      const posts = await postService.getAllPosts();

      return formatJSONResponse(200, posts);
    } catch (err) {
      return formatJSONResponse(400, err);
    }
  }
);
