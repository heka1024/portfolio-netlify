import React, { useRef, useEffect } from "react"
import { Column, Container, Row } from "./layout"
import OutlinedButton from "./SimpleButton"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styled from "styled-components"

interface Props {
  position: 'left' | 'right';
  image: string | undefined;
}

export default function ProjectItem({ position, image }: Props) {
  return (
    <Container>
      { position === 'right' && <Column hidden={{ tablet: true, mobile: true }} /> }
      <Column size="3">
        <Row margin="0 0 2rem 0">
          <img src={image} alt="" />
        </Row>
        <Row>
          <p>
            MOMO <br />
            E-commerce Fashion Store <br />
            Website
          </p>
          <OutlinedButton
            href="https://momostores.herokuapp.com/"
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
