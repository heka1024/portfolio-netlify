import React from "react"
import styled, { ThemeProvider } from "styled-components"
import theme from "../shared/theme"
import { Header, Menu, Splash } from "../componenets"
import '../styles/global.css'
import About from "../componenets/About"
import Project from "../componenets/Project"
import Contact from "../componenets/Contact"
import Footer from "../componenets/Footer"


const MainWrapper = styled.div`
  position: relative;
  width: 100%;
`

export default function Home() {
  return <MainWrapper>
    <ThemeProvider theme={theme}>
      <Header />
      <Splash />
      <About/>
      <Project />
      <Contact/>
      <Footer />
    </ThemeProvider>
  </MainWrapper>
}
