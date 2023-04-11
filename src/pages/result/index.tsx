import React, { useEffect } from "react"
import { toast } from "react-toastify"
import { Typography } from "@mui/material"

import { useRouter } from "next/router"

import { SEO } from "@/components/SEO"

import { Chip, Wrapper } from "@/styles/Pages/result"

import { useFipe } from "@/hooks/useFipe"

export default function FipeResult() {
  const router = useRouter()

  const { selectedCarSpecification } = useFipe()

  useEffect(() => {
    if (!selectedCarSpecification) {
      router.push("/")

      toast.error("Selecione o modelo antes de verificar o valor.")
    }
  }, [router, selectedCarSpecification])

  if (!selectedCarSpecification)
    return (
      <Wrapper>
        <Typography variant="h4" component="h1" fontWeight="bold">
          Redirecionando...
        </Typography>
      </Wrapper>
    )

  return (
    <>
      <SEO
        title={`Consulta tabela Fipe | ${selectedCarSpecification.brand} ${selectedCarSpecification.model} ${selectedCarSpecification.year}`}
        description={`Confira o valor da Tabela Fipe para o carro ${selectedCarSpecification.brand} ${selectedCarSpecification.model} ${selectedCarSpecification.year}.`}
      />

      <Wrapper>
        <Typography variant="h4" component="h1" fontWeight="bold">
          Tabela Fipe: Preço {selectedCarSpecification.brand}{" "}
          {selectedCarSpecification.model} {selectedCarSpecification.year}
        </Typography>

        <Chip
          label={selectedCarSpecification.value}
          variant="filled"
          color="success"
        />

        <Typography variant="body2">
          Este é o preço de compra do veículo
        </Typography>
      </Wrapper>
    </>
  )
}
