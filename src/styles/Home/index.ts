import styled from "styled-components"

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  max-width: 520px;
  min-height: 100vh;

  padding: 8px;
  margin: 0 auto;

  transition: all 0.2s;
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
`

export const Fieldset = styled.fieldset`
  width: 100%;
  padding-bottom: 24px;
`

export const Button = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 260px;
  height: 244px;

  border-radius: 64px;
  border: 4px solid #e5e5e5;

  background-color: white;

  transition: all 0.2s;

  &:hover {
    transform: translateY(-15px);

    box-shadow: -1px 6px 12px -6px rgba(0, 0, 0, 0.5);
  }
`
