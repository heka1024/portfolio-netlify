import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { Wrapper, Container, Column } from "./layout"
import Title from "./Title"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const Info = styled.article`
  margin-bottom: 2rem;

  h4 {
    margin: 0;
  }
  
  @media ${({ theme }) => theme.device.mobile} {
    text-align: center;
  }
`

const AnimationWrapper = styled.div`
  transform: translateY(-50%);
`

const CenteredMobile = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    text-align: center;
  }
`

function Contact() {
  return (
    <Wrapper>
      <Container>
        <Column size="2">
          <CenteredMobile>
            <Title
              text="Contact"
            />
          </CenteredMobile>
        </Column>

        <Column>
          <Info>
            <h4>EMAIL</h4>
            <a href="mailto:heka1024@gmail.com">heka1024@gmail.com</a>
          </Info>

          <Info>
            <h4>BLOG</h4>
            <a
              href="https://velog.io/@heka1024"
              target="_blank"
              rel="noopener noreferrer"
            >
              velog.io/@heka1024
            </a>
          </Info>

          <Info >
            <h4>GITHUB</h4>
            <a
              href="https://github.com/heka1024"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/heka1024
            </a>
          </Info>
        </Column>
      </Container>
    </Wrapper>
  )
}

export default Contact
