import createDynamoDBClient from "../db";
import PostService from "./postService";

const { POSTS_TABLE } = process.env;

const postService = new PostService(createDynamoDBClient(), POSTS_TABLE);

export default postService;
