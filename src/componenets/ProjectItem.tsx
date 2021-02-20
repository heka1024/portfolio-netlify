import React, { useRef, useEffect } from "react"
import { Column, Container, Row } from "./layout"
import OutlinedButton from "./SimpleButton"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styled from "styled-components"

interface Props {
  position: 'left' | 'right';
  image: string | undefined;
  link: string;
  title: string;
  text: string;
}

const Title = styled.h4`
  font-weight: bold;
  margin-block: 0.77em;
  margin-block-start: 0.33em;
`


const TextWrapper = styled.div`
  margin: 10px;
  padding: 10px;
`

export default function ProjectItem({ position, image, title, text, link }: Props) {
  return (
    <Container>
      { position === 'right' && <Column hidden={{ tablet: true, mobile: true }} /> }
      <Column size="3">
        <Row margin="0 0 2rem 0">
          <img src={image} alt="" />
        </Row>
        <Row>
          <TextWrapper>
            <Title> { title } </Title>
            <p> { text } </p>
          </TextWrapper>

          <OutlinedButton
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            DETAILS
          </OutlinedButton>
        </Row>
      </Column>
      { position === 'left' && <Column hidden={{ tablet: true, mobile: true }} /> }
    </Container>
  )
}
