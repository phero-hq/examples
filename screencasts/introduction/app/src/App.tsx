import { useCallback, useEffect, useState } from "react"
import { CustomError, Post, PheroClient } from "./phero.generated"

const phero = new PheroClient(window.fetch.bind(this))

function App() {
  const [posts, setPosts] = useState<Post[]>()
  const [errorMessage, setErrorMessage] = useState<string>()

  const loadPosts = useCallback(async () => {
    try {
      const newPosts = await phero.postService.getPosts()
      setPosts(newPosts)
    } catch (error) {
      if (error instanceof CustomError) {
        setErrorMessage("Be the first to post!")
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
