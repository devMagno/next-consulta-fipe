import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"
import { toast } from "react-toastify"

import { api } from "@/services/api"

import { ApiError } from "@/types/ApiError"
import { Brand } from "@/types/Brand"
import { CarSpecification } from "@/types/CarSpecification"
import { Model } from "@/types/Model"
import { Year } from "@/types/Year"

export interface FipeContextData {
  brands: Brand[]
  selectedBrand: Brand | null
  setSelectedBrand: (brand: Brand | null) => void

  models: Model[]
  selectedModel: Model | null
  setSelectedModel: (model: Model | null) => void

  years: Year[]
  selectedYear: Year | null
  setSelectedYear: (year: Year | null) => void

  handleGetCarPrice: () => Promise<boolean>
  selectedCarSpecification: CarSpecification | undefined
  isCarPriceLoading: boolean
}

export const FipeContext = createContext<FipeContextData>({} as FipeContextData)

interface FipeProviderProps {
  children: ReactNode
}

export function FipeProvider({ children }: FipeProviderProps) {
  const [brands, setBrands] = useState<Brand[]>([])
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null)

  const [models, setModels] = useState<Model[]>([])
  const [selectedModel, setSelectedModel] = useState<Model | null>(null)

  const [years, setYears] = useState<Year[]>([])
  const [selectedYear, setSelectedYear] = useState<Year | null>(null)

  const [selectedCarSpecification, setSelectedCarSpecification] =
    useState<CarSpecification>()
  const [isCarPriceLoading, setIsCarPriceLoading] = useState(false)

  useEffect(() => {
    setSelectedModel(null)
    setSelectedYear(null)

    const handleGetCarBrands = async () => {
      try {
        const { data } = await api.get<Brand[]>("/")

        const options = data.map((item) => ({ ...item, label: item.nome }))

        setBrands(options)
      } catch (error) {
        const {
          response: {
            data: { message },
          },
        } = error as ApiError

        toast.error(
          message ||
            "Ocorreu um erro ao buscar as marcas, tente novamente mais tarde."
        )
      }
    }

    handleGetCarBrands()
  }, [selectedBrand])

  useEffect(() => {
    setSelectedYear(null)

    if (selectedBrand?.codigo) {
      const handleGetCarModel = async () => {
        try {
          setYears([])

          const { data } = await api.get<{ modelos: Model[] }>(
            `${selectedBrand?.codigo}/modelos`
          )

          const options = data.modelos.map((item) => ({
            ...item,
            label: item.nome,
          }))

          setModels(options)
        } catch (error) {
          const {
            response: {
              data: { message },
            },
          } = error as ApiError

          toast.error(
            message ||
              "Ocorreu um erro ao buscar os modelos, tente novamente mais tarde."
          )
        }
      }

      handleGetCarModel()
    }
  }, [selectedBrand, selectedModel])

  useEffect(() => {
    if (selectedBrand?.codigo && selectedModel?.codigo) {
      const handleGetCarModel = async () => {
        try {
          const { data } = await api.get<Year[]>(
            `${selectedBrand?.codigo}/modelos/${selectedModel?.codigo}/anos`
          )

          const options = data.map((item) => ({ ...item, label: item.nome }))

          setYears(options)
        } catch (error) {
          const {
            response: {
              data: { message },
            },
          } = error as ApiError

          toast.error(
            message ||
              "Ocorreu um erro e não foi possível buscar o ano do modelo selecionado, tente novamente mais tarde."
          )
        }
      }

      handleGetCarModel()
    }
  }, [selectedBrand, selectedModel])

  const handleGetCarPrice = useCallback(async () => {
    if (
      !selectedBrand?.codigo ||
      !selectedModel?.codigo ||
      !selectedYear?.codigo
    ) {
      toast.error("Preencha todos os campos para realizar a busca.")

      return false
    }

    try {
      setIsCarPriceLoading(true)

      const { data } = await api.get<CarSpecification>(
        `${selectedBrand?.codigo}/modelos/${selectedModel?.codigo}/anos/${selectedYear.codigo}`
      )

      setSelectedCarSpecification(data)

      return true
    } catch (error) {
      const {
        response: {
          data: { message },
        },
      } = error as ApiError

      toast.error(
        message ||
          "Ocorreu um erro e não foi possível consultar o valor do veículo, tente novamente mais tarde."
      )

      return false
    } finally {
      setIsCarPriceLoading(false)
    }
  }, [selectedBrand, selectedModel, selectedYear])

  const value = useMemo(
    () => ({
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
      selectedCarSpecification,
      isCarPriceLoading,
    }),
    [
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
      selectedCarSpecification,
      isCarPriceLoading,
    ]
  )

  return <FipeContext.Provider value={value}>{children}</FipeContext.Provider>
}
