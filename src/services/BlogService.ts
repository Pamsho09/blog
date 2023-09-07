import { PrismaClient } from "@prisma/client";
import PrismaService from "./PrismaService";

export class Blog {
  private db: PrismaClient;
  private erroMessage = {
    error: "Post not found",
  };
  constructor() {
    this.db = PrismaService;
  }

  async createBlog({ title, content }: { title: string; content: string }) {
    const blog = await this.db.post.create({
      data: {
        title: title,
        content: content,
      },
    });
    return blog;
  }
  private async isPostExist(id: string) {
    return await this.db.post.findUnique({
      where: {
        id: id,
      },
    });
  }
  async publishBlog(id: string) {
    const isPostExist = await this.isPostExist(id);
    if (!isPostExist) {
      return this.erroMessage;
    }
    const blog = await this.db.post.update({
      where: {
        id: id,
      },
      data: {
        published: !isPostExist,
      },
    });
    return blog;
  }
  async updateBlog(post: { id: string; title: string; content: string }) {
    const isPostExist = await this.isPostExist(post.id);
    if (!isPostExist) {
      return this.erroMessage;
    }
    const blog = await this.db.post.update({
      where: {
        id: post.id,
      },
      data: {
        title: post.title,
        content: post.content,
      },
    });
  }
  async getPostById(id: string) {
    const post = await this.isPostExist(id);
    if (!post) {
      return this.erroMessage;
    }
    return post;
  }
  //creatae getALL with pagination
  async getAllPosts({ page, limit,search }: { page: number; limit: number,search:string }) {
    const posts = await this.db.post.findMany({
      take: limit,
      skip: page * limit,
      orderBy: {
        createdAt: "desc",
      },
    });
    return posts;
  }
}
