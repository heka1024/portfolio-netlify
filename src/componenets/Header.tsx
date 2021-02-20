import React from "react"
import { Link } from "gatsby"
import { Wrapper, Container, Column } from './layout'
import Menu from "./Menu"
import styled from "styled-components"

const Typo = styled.div`
  font-size: 1.4rem;
  margin: 0;
  &:hover {
    color: #2aaeba;
  }
`

const Logo = () => (
  <Link to="/">
    <Typo>GYONGEHOE KOO</Typo>
  </Link>
)

function Header() {
  return (
    <Wrapper maxWidth="auto" marginBottom="2rem">
      <Container>
        <Column size="1">
          <Logo />
        </Column>
        <Column size="2" hidden={{ mobile: true, tablet: true }}>
        </Column>
        <Column size="1">
          <Menu />
        </Column>
      </Container>
    </Wrapper>
  )
}

export default Header
