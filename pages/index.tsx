import type { NextPage } from "next"
import Head from "next/head"
import { PostCard, Categories, PostWidget } from "../components"

const posts = [
  {
    title: "React Testing",
    excerpt: "learn react testing",
  },
  {
    title: "React with Tailwind",
    excerpt: "Learn react with Tailwind",
  },
]

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 pb-8">
      <Head>
        <title>Devtalk blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index: number) => (
            <PostCard title={post.title} excert={post.excerpt} key={index} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
