import React from "react"
import styled from "styled-components"

const LinkButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  outline: none;
  cursor: pointer;

  &:hover {
    color: #2aaeba;
  }
`

const MenuContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`

const MenuItem = styled.li`
  padding: 0.8rem 1.2rem;
  margin: 0 0.4rem;

  @media ${({ theme }) => theme.device.mobile} {
    padding: 0.4rem 0.6rem;
    margin: 0.4rem 0;

    button {
      font-size: 1.2rem;
    }
  }
`

function Menu() {
  return (
    <MenuContainer>
      <MenuItem>
        <LinkButton onClick={() => {}}>HOME</LinkButton>
      </MenuItem>
      <MenuItem>
        <LinkButton onClick={() => {}}>ABOUT</LinkButton>
      </MenuItem>
      <MenuItem>
        <LinkButton onClick={() => {}}>PROJECTS</LinkButton>
      </MenuItem>
      <MenuItem>
        <LinkButton onClick={() => {}}>CONTACT</LinkButton>
      </MenuItem>
    </MenuContainer>
  )
}

export default Menu
