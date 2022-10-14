import { createService } from "@phero/server"

interface Post {
  id: string
  body: string
  author: User
}

interface User {
  id: string
  name: string
}

let posts: Post[] = [
  {
    id: "post-1",
    body: "Something great",
    author: { id: "author-1", name: "Jim" },
  },
  {
    id: "post-2",
    body: "Something else",
    author: { id: "author-2", name: "Kamil" },
  },
  {
    id: "post-3",
    body: "Say what?",
    author: { id: "author-3", name: "Jasper" },
  },
]

class CustomError extends Error {}

async function getPosts(): Promise<Post[]> {
  throw new CustomError()
  return posts
}

export const postService = createService({ getPosts })
