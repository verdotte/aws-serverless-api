import { DocumentClient } from "aws-sdk/clients/dynamodb";
import Post from "../../models/Post";

class PostService {
  constructor(
    private readonly docClient: DocumentClient,
    private readonly tableName: string
  ) {}

  async getAllPosts(): Promise<Post[]> {
    const result = await this.docClient
      .scan({
        TableName: this.tableName,
      })
      .promise();

    return result.Items as Post[];
  }

  async getPost(postId: string): Promise<Post> {
    const result = await this.docClient
      .get({
        TableName: this.tableName,
        Key: { postId },
      })
      .promise();

    return result.Item as Post;
  }

  async createPost(post: Post): Promise<Post> {
    await this.docClient
      .put({
        TableName: this.tableName,
        Item: post,
      })
      .promise();

    return post;
  }

  async updatePost(postId: string, partialPost: Partial<Post>): Promise<Post> {
    const updated = await this.docClient
      .update({
        TableName: this.tableName,
        Key: { postId },
        UpdateExpression:
          "set #title = :title, description = :description, active = :active",
        ExpressionAttributeNames: {
          "#title": "title",
        },
        ExpressionAttributeValues: {
          ":title": partialPost.title,
          ":description": partialPost.description,
          ":active": partialPost.active,
        },
        ReturnValues: "ALL_NEW",
      })
      .promise();

    return updated.Attributes as Post;
  }

  async deletePost(postId: string) {
    return this.docClient
      .delete({
        TableName: this.tableName,
        Key: { postId },
      })
      .promise();
  }
}

export default PostService;
