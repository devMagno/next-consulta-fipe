import { Autocomplete, Button, TextField, Typography } from "@mui/material"

import { useRouter } from "next/router"

import { Card } from "@/components/Card"
import { SEO } from "@/components/SEO"

import { Fieldset, Form, Wrapper } from "@/styles/Home"

import { useFipe } from "@/hooks/useFipe"

export default function Home() {
  const router = useRouter()

  const {
    brands,
    selectedBrand,
    setSelectedBrand,
    models,
    selectedModel,
    setSelectedModel,
    years,
    selectedYear,
    setSelectedYear,
    handleGetCarPrice,
    isCarPriceLoading,
  } = useFipe()

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const success = await handleGetCarPrice()

    if (success) router.push("/result")
  }

  return (
    <>
      <SEO title="Consulta tabela Fipe" />

      <Wrapper>
        <Typography variant="h4" component="h1" fontWeight="bold">
          Tabela Fipe
        </Typography>

        <Typography variant="h5" component="p" marginTop={1} marginBottom={4}>
          Consulte o valor de um veículo de forma gratuita
        </Typography>

        <Card>
          <Form onSubmit={handleFormSubmit}>
            <Fieldset>
              <Autocomplete
                options={brands}
                renderInput={(params) => (
                  <TextField {...params} label="Marca" />
                )}
                size="small"
                loading={brands.length === 0}
                isOptionEqualToValue={(option, value) =>
                  option.codigo === value.codigo
                }
                value={selectedBrand}
                onChange={(_, value) => setSelectedBrand(value)}
              />
            </Fieldset>

            <Fieldset>
              <Autocomplete
                options={models}
                renderInput={(params) => (
                  <TextField {...params} label="Modelo" />
                )}
                size="small"
                loading={models.length === 0}
                value={selectedModel}
                isOptionEqualToValue={(option, value) =>
                  option.codigo === value.codigo
                }
                onChange={(_, value) => setSelectedModel(value)}
                disabled={!selectedBrand}
              />
            </Fieldset>

            <Fieldset>
              <Autocomplete
                options={years}
                renderInput={(params) => <TextField {...params} label="Ano" />}
                size="small"
                loading={years.length === 0}
                value={selectedYear}
                isOptionEqualToValue={(option, value) =>
                  option.codigo === value.codigo
                }
                onChange={(_, value) => setSelectedYear(value)}
                disabled={!selectedBrand || !selectedModel}
              />
            </Fieldset>

            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={!selectedYear?.codigo || isCarPriceLoading}
            >
              <Typography
                variant="body2"
                fontWeight="bold"
                textTransform="none"
                paddingX={2}
              >
                {isCarPriceLoading ? "Consultando..." : "Consultar preço"}
              </Typography>
            </Button>
          </Form>
        </Card>
      </Wrapper>
    </>
  )
}
