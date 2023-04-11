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
  font-size: 24px;
  font-weight: bold;

  margin: 16px 0;
  padding: 24px 8px;
  border-radius: 144px;
`
