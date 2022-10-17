import { useCallback, useEffect, useState } from "react"
import { NoPostsYetError, PheroClient, Post } from "./phero.generated"

const phero = new PheroClient(window.fetch.bind(this))

function App() {
  const [posts, setPosts] = useState<Post[]>()
  const [errorMessage, setErrorMessage] = useState<string>()

  const loadPosts = useCallback(async () => {
    try {
      const newPosts = await phero.postService.getPosts()
      setPosts(newPosts)
    } catch (error) {
      if (error instanceof NoPostsYetError) {
        setErrorMessage("Be the first one to post!")
      } else {
        setErrorMessage("whoops")
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
