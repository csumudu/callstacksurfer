import { Article } from "@prisma/client";
import { prisma } from "../connection";

class DataSandbox {
  client;
  constructor() {
    this.client = prisma;
  }

  getArticles(): Promise<Array<Article>> {
    return this.client.article.findMany({
      orderBy: {
        date: "desc",
      },
    });
  }

  getArticleById(id: string): Promise<Article | null> {
    return this.client.article.findFirst({
      where: {
        id,
      },
    });
  }
}

export const API = new DataSandbox();
