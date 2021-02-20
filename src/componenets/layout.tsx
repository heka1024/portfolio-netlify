import styled, { css } from "styled-components"
import theme from "../shared/theme"

interface ContainerProps {
  alignItems?: string;
  direction?: string;
  mobileDirection?: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction ?? "row"};
  align-items: ${({ alignItems }) => alignItems ?? "center"};

  ${({ direction }) =>
  direction ??
  css`
      // Gutters
      div {
        margin: 0 1rem;
      }
      div:not(:last-child) {
        margin-right: 1rem;
        margin-left: 0;
      }
      div:not(:first-child) {
        margin-right: 0;
        margin-left: 1rem;
      }

      @media ${({ theme }) => theme.device.tablet} {
        // Remove gutters on mobile
        div {
          margin: 1rem 0 !important;
        }
        div:not(:last-child) {
          margin-top: 1rem;
          margin-bottom: 0;
        }
        div:not(:first-child) {
          margin-top: 0;
          margin-bottom: 1rem;
        }
      }
    `}
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.device.mobile} {
    align-items: flex-start;
    flex-direction: ${({ mobileDirection }) => mobileDirection ?? "column"};
  }
`

const Wrapper = styled.div`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth ?? "1400px"};
  padding: ${({ padding }) => padding?.desktop ?? padding ?? "4rem"};
  margin: 0 auto;
  margin-bottom: ${({ marginBottom }) =>
  marginBottom?.desktop ?? marginBottom ?? "30rem"};

  @media ${({ theme }) => theme.device.tablet} {
    padding: ${({ padding }) => padding?.tablet ?? padding ?? "4rem"};
    margin-bottom: ${({ marginBottom }) =>
  marginBottom?.tablet ?? marginBottom ?? "20rem"};
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: ${({ padding }) => padding?.mobile ?? padding ?? "4rem"};
    margin-bottom: ${({ marginBottom }) =>
  marginBottom?.mobile ?? marginBottom ?? "12rem"};
  }
`

const Row = styled.article<{margin?: number}>`
  display: flex;
  flex-direction: column;
  margin: ${({ margin }) => margin ?? 0};

  p {
    margin: 0;
    margin-bottom: 1rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`

const Column = styled.div`
  flex-basis: 0;
  flex-grow: ${({ size }) => size ?? 1};
  display: ${({ hidden }) => (hidden?.desktop ? "none" : "initial")};

  @media ${({ theme }) => theme.device.tablet} {
    display: ${({ hidden }) => (hidden?.tablet ? "none" : "initial")};
  }

  @media ${({ theme }) => theme.device.mobile} {
    flex-grow: 1;
    width: 100%;
    display: ${({ hidden }) => (hidden?.mobile ? "none" : "initial")};
  }
`

export {
  Container,
  Wrapper,
  Column,
  Row
}
