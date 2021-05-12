import {
  APIGatewayEvent,
  Handler,
  Context,
  APIGatewayProxyResult,
} from "aws-lambda";
import * as uuid from "uuid";
import middify from "../core/middify";
import formatJSONResponse from "../core/formatJsonResponse";
import postService from "../services";
import CreatePost from "../dtos/createPost";

export const handler: Handler = middify(
  async (
    event: APIGatewayEvent & CreatePost,
    ccontext: Context
  ): Promise<APIGatewayProxyResult> => {
    const { title, description } = event.body;

    try {
      const postId: string = uuid.v4();
      const post = await postService.createPost({
        postId,
        title,
        description,
        active: true,
        createdAt: new Date().toISOString(),
      });

      return formatJSONResponse(201, post);
    } catch (err) {
      return formatJSONResponse(400, err);
    }
  }
);
