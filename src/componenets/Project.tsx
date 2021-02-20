import React, { forwardRef } from "react"
import styled from "styled-components"
import { Wrapper } from "./layout"
import Title from "./Title"
import ProjectItem from "./ProjectItem"
import image1 from '../../static/images/doldol.jpg'
import image2 from '../../static/images/functional-programming.jpg'

const ProjectSection = styled(Wrapper)`
  position: relative;
  padding: 0;
`

export default function Project() {
  return (
    <Wrapper >
      <ProjectSection>
        <Title text="Projects" vertical={true} float="right" />
        <ProjectItem
          image={image1}
          position={'left'}
          title="태양광 측정기"
          text="직사광을 제외한, 산란광만을 측정하는 기계. 아두이노로 만듦"
          link="http://calslab.snu.ac.kr/asse/"
        />
      </ProjectSection>

      <ProjectSection>
        <Title
          text="SNULife"
          vertical={true}
          float="left"
          hidden={{ mobile: true }}
        />
        <ProjectItem
          image={image2}
          position={'right'}
          title="SNULife 서버"
          text="새로운 스누라이프의 서버, Django와 DRF를 이용함"
          link="https://github.com/snulife/new-origin"
        />
      </ProjectSection>
    </Wrapper>
  )
}
