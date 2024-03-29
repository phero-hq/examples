import {
  createService,
  PheroContext,
  PheroNextFunction,
  PheroParams,
} from "@phero/server"

interface Article {
  id: string
  text: string
}

interface User {
  uid: string
  name: string
}

async function getArticle(
  context: PheroContext<{ user: User }>,
  id: string,
): Promise<Article> {
  return {
    id,
    text: `Example article by user ${context.user.name} with id: ${context.user.uid}`,
  }
}

async function createArticle(id: string, text: string): Promise<Article> {
  return { id, text }
}

async function saveArticle(id: string, text: string): Promise<Article> {
  return { id, text }
}

function validateIdToken(idToken: string): User {
  // In a real world example, you'd actually validate the
  // token en get the id of the user, instead of doing this:
  const [uid, name] = idToken.replace("Bearer ", "").split("-")
  return { uid, name }
}

async function requireUser(
  params: PheroParams,
  context: PheroContext<{ idToken: string }>,
  next: PheroNextFunction<{ user: User }>,
) {
  const user = validateIdToken(context.idToken)
  await next({ user })
}

export const articleService = createService(
  {
    getArticle,
    createArticle,
    saveArticle,
  },
  {
    middleware: [requireUser],
  },
)
