import { Chip as MUIChip } from "@mui/material"
import styled from "styled-components"

import { theme } from "@/styles/theme"

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  padding: 16px;
  min-height: 100vh;
  text-align: center;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  background-color: ${theme.palette.success.light};
`

export const Chip = styled(MUIChip)`
  margin: 16px 0;
  border-radius: 144px;
`
