import { useCallback, useEffect, useState } from "react"
import { NoPostsFoundError, Post, SamenClient } from "./samen.generated"

const samen = new SamenClient(window.fetch.bind(this))

function App() {
  const [posts, setPosts] = useState<Post[]>()
  const [errorMessage, setErrorMessage] = useState<string>()

  const loadPosts = useCallback(async () => {
    try {
      const newPosts = await samen.postService.getPosts()
      setPosts(newPosts)
    } catch (error) {
      if (error instanceof NoPostsFoundError) {
        setErrorMessage("Be the first to post something here!")
      } else {
        setErrorMessage("Something went wrong")
      }
    }
  }, [])

  useEffect(() => {
    loadPosts()
  }, [loadPosts])

  if (errorMessage) return <p>{errorMessage}</p>
  if (!posts) return <p>One moment please...</p>

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.author.name}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default App
