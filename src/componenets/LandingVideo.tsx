import React from "react"
import styled from "styled-components"
import water from '../../static/videos/small.mp4'

const VideoContainer = styled.div`
  max-width: 50%;
  margin: auto;
  position: relative;
  text-align: center;

  video {
    width: 200%;
    height: auto;
    transform: translateX(-50%);
    object-fit: cover;
  }

  @media ${({ theme }) => theme.device.mobile} {
    max-width: 70vh;
  }
`
const VideoBox = styled.div`
  overflow: hidden;
`

const LandingVideo = () => {
  return (
    <VideoContainer>
      <VideoBox>
        <video src={water} autoPlay muted loop/>
      </VideoBox>
    </VideoContainer>
  )
}

export default LandingVideo
