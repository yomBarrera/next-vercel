import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { CSSProperties, FC } from "react"

const style:CSSProperties = {
  color: '#0070f3',
  textDecoration:'underline'
}

interface Props {
  text: string,
  href: string
}

export const ActiveLink: FC<Props> = ({href, text}) => {

  const { asPath }=useRouter()
  return (
    <Link style={href === asPath ? style : undefined } href={ href } >
      {text}
    </Link>
  )
}
