import { useContext } from "react"

import { FipeContext, FipeContextData } from "@/contexts/FipeContext"

export function useFipe(): FipeContextData {
  const context = useContext(FipeContext)

  if (!context) throw new Error("useFipe must be used within FipeProvider")

  return context
}
