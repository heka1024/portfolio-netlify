import React, { forwardRef } from "react"
import styled from "styled-components"
import { Wrapper } from "./layout"
import Title from "./Title"
import ProjectItem from "./ProjectItem"
import image1 from '../../static/images/asanaLanding.jpg'
import image2 from '../../static/images/momoLanding.jpg'

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
        />
      </ProjectSection>
    </Wrapper>
  )
}
