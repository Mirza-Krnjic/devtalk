import React, { useState, useEffect } from "react"

import Link from "next/link"
import { getCategories } from "../services"

const Header = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories)
    })
  }, [])

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full border-blue-400 py-8 flex justify-between">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              Dev<span className="text-[#DD4778]">Talk</span>
            </span>
          </Link>
        </div>
        <div className="">
          {/* {categories.map((category: any, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))} */}
          <Link href="/">
            <button className="px-4 py-2 border rounded-full border-white bg-transparent float-right text-white">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
