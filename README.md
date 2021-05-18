## AWS Serverless API

### Project Structure

```
aws-serverless-api
├─ .git
├─ .gitignore
├─ package.json
├─ serverless.yml
├─ source-map-install.js
├─ src
│ ├─ core
│ │ ├─ formatJsonResponse.ts
│ │ └─ middify.ts
│ ├─ database
│ │ ├─ db.ts
│ │ └─ services
│ │ ├─ index.ts
│ │ └─ postService.ts
│ ├─ dtos
│ │ ├─ createPostDto.ts
│ │ └─ updatePostDto.ts
│ ├─ functions
│ │ ├─ createPost.ts
│ │ ├─ deletePost.ts
│ │ ├─ getAllPost.ts
│ │ ├─ getPost.ts
│ │ └─ updatePost.ts
│ └─ models
│ └─ Post.ts
├─ tsconfig.json
└─ webpack.config.js

```
