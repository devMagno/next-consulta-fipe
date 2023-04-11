import { Paper } from "@mui/material"
import styled from "styled-components"

export const Wrapper = styled(Paper)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 480px;

  padding: 16px 28px;
  margin-top: 16px auto 0;

  @media screen and (min-width: 700px) {
    padding: 24px 56px;
  }
`
