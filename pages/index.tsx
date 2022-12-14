import type { NextPage } from "next"
import Head from "next/head"
import React from "react"
import { PostCard, Categories, PostWidget } from "../components"
import { FeaturedPosts } from "../sections"
import { getPosts } from "../services"

const Home = ({ posts }: any) => {
  return (
    <div className="px-4 container mx-auto lg:px-10 pb-8">
      <Head>
        <title>Devtalk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post: any, index: number) => (
            <PostCard post={post.node} key={post.title} />
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

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || []
  return {
    props: { posts },
  }
}
