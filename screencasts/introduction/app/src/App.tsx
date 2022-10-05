import { useCallback, useEffect, useState } from "react"

function App() {
  const [posts, setPosts] = useState<any[]>()
  const [errorMessage, setErrorMessage] = useState<string>()

  const loadPosts = useCallback(async () => {
    // ..
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
          <p>{post.author.userName}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default App
