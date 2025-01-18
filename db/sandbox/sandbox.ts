import { Article } from "@prisma/client";
import { prisma } from "../connection";
import { ArticleExtended } from "@/models/data.models";

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

  getArticleById(id: string): Promise<ArticleExtended | null> {
    return this.client.article.findFirst({
      include: {
        articleType: true,
      },
      where: {
        id,
      },
    });
  }
  
  getArticleByTitle(title: string): Promise<ArticleExtended | null> {
    return this.client.article.findFirst({
      include: {
        articleType: true,
      },
      where: {
        title,
      },
    });
  }
}

export const API = new DataSandbox();
