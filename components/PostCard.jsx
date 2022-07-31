import React from "react"
import { Interface } from "readline"

// 32 min
function PostCard({ post: Post }) {
  return (
    <div>
      {post.title}
      {post.excert}
    </div>
  )
}

export default PostCard
