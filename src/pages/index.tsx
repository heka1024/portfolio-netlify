import React from "react"
import styled, { ThemeProvider } from "styled-components"
import theme from "../shared/theme"
import { Header, Menu, Splash } from "../componenets"
import '../styles/global.css'


const MainWrapper = styled.div`
  position: relative;
  width: 100%;
`

export default function Home() {
  return <MainWrapper>
    <ThemeProvider theme={theme}>
      <Header />
      <Splash />
    </ThemeProvider>
  </MainWrapper>
}
