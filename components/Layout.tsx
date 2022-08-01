import { Props } from "html-react-parser/lib/attributes-to-props"
import React, { FC } from "react"
import Header from "./Header"

interface IProps {
  //   children?: JSX.Element | JSX.Element[] | string | string[]
  children: React.ReactNode
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
