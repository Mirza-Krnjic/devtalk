import React from "react"
import { Interface } from "readline"

import { IPost } from "../Interfaces"
// 32 min
function PostCard({ title, excert }: IPost) {
  return (
    <div className="my-10 ">
      <div className="bg-red-600">{title}</div>
      <div className="bg-blue-400">{excert}</div>
    </div>
  )
}

export default PostCard
