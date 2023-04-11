import { ReactNode } from "react"

import { Wrapper } from "./styles"

interface CardProps {
  children: ReactNode
}

export function Card({ children }: CardProps) {
  return <Wrapper>{children}</Wrapper>
}
