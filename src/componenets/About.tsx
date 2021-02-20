import React, { useState } from "react"
import styled from "styled-components"
import { Wrapper, Container, Column, Row } from "./layout"
import Title from "./Title"
import image from "../../static/images/para.jpg"

const AboutWrapper = styled(Wrapper)`
  position: relative;

  p {
    line-height: 2;
  }

  .title {
    position: absolute;
  }

  .image {
    z-index: -1;
    margin-top: -10px;
    position: relative;
  }

  h3 span {
    padding-bottom: 10px;
    border-bottom: 2px solid;
    line-height: 44px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    p,
    .btn {
      font-size: 1.2rem;
    }
  }
`


export default function About() {
  return (
    <AboutWrapper>
      <Title text="About Me" className="title" />
      <Wrapper maxWidth="auto" marginBottom="4rem" padding="0">
        <Container column="column">
          <Column size="2">
            <img
              src={image}
              alt=""
              className="image"
            />
          </Column>
          <Column>
            <p>
              끊임없이 배우고 성장하는 polymath를 꿈꾸고 있습니다.
              <br />
              새로운 기술을 습득하는 것에 빠르며, 디자인 경험을 바탕으로
              <br />
              UI/UX 관점을 고려하며 확장 가능한 웹 애플리케이션에 대해
              고민합니다.
              <br />
              저의 다양한 경험과 배경은 창의적 사고를 가능하게 하고
              <br />
              다른 부서와의 소통 능력을 향상합니다.
            </p>
          </Column>
        </Container>
      </Wrapper>
      <Wrapper maxWidth="auto" marginBottom="0" padding="0">
        <Container column="column" alignItems="flex-start">
          <Column>
            <Row>
              <h3>
                <span>교육</span>
              </h3>
              <p>지역시스템공학과 학사 - 서울대학교</p>
              <p>컴퓨터공학 복수전공 - 서울대학교</p>
            </Row>
            <Row>
              <h3>
                <span>수상</span>
              </h3>
              <p>제 2회 농공창의경진대회, 우수상 (2등), 농공장학재단</p>
            </Row>
          </Column>
          <Column>
            <Row margin="0 0 2rem 0">
              <h3>
                <span>동아리 활동</span>
              </h3>
              <p>카페인, 서울대학교, 2017-2019</p>
              <p>SNULife, 개발팀, 서울대학교, 2020-</p>
              <p>와플스튜디오, 19기 프로그래머, 서울대학교, 2021-</p>
            </Row>
          </Column>
        </Container>
      </Wrapper>
    </AboutWrapper>
  )
}

