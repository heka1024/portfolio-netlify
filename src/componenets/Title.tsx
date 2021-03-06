import React from "react"
import styled, { css } from "styled-components"

const TitleWrapper = styled.div`
  position: relative;
  z-index: 1;

  display: ${({ hidden }) => (hidden?.desktop ? "none" : "initial")};

  @media ${({ theme }) => theme.device.tablet} {
    display: ${({ hidden }) => (hidden?.tablet ? "none" : "initial")};
  }

  @media ${({ theme }) => theme.device.mobile} {
    display: ${({ hidden }) => (hidden?.mobile ? "none" : "initial")};
  }

  ${({ vertical }) =>
  vertical &&
  css`
      writing-mode: vertical-lr;
    `}

  ${({ float }) =>
  float &&
  (float === "right"
    ? css`
          position: absolute;
          top: 0;
          right: 0;
        `
    : css`
          transform: rotate(180deg) translateX(-0.5rem);
          position: absolute;
          bottom: 0;
          left: 0;
        `)}
`

const FilledTitle = styled.h2`
  color: grey;
  margin: 0;
  font-size: 6vw;
  font-family: "Monument", sans-serif;
  text-transform: uppercase;
  line-height: 0.8;
  margin-bottom: -25px;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 8vw;
    margin-bottom: -5px;
  }
`

const OutlinedTitle = styled(FilledTitle)`
  -webkit-text-stroke: 0.02em #fff;
  color: transparent;
`

interface Props {
  text: string;
  vertical?: any;
  float?: any;
  hidden?: any;
}

export default function Title({ text, vertical, float, hidden }: Props) {
  return (
    <TitleWrapper vertical={vertical} float={float} hidden={hidden}>
      <OutlinedTitle>{text}</OutlinedTitle>
      <OutlinedTitle>{text}</OutlinedTitle>
      <OutlinedTitle>{text}</OutlinedTitle>
    </TitleWrapper>
  )
}
