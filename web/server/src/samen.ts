import { createFunction, createService } from "@samen/server"

interface Article {
  id: string
  text: string
}

async function getArticle(id: string): Promise<Article> {
  return { id, text: "" }
}

async function createArticle(id: string): Promise<Article> {
  return { id, text: "" }
}

async function saveArticle(id: string, text: string): Promise<Article> {
  return { id, text }
}

export const articleService = createService({
  get: createFunction(getArticle),
  create: createFunction(createArticle),
  save: createFunction(saveArticle),
})
