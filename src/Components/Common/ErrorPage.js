import React from 'react'
import styled from 'styled-components'
// import conlogo from '../../assets/images/contruction.svg';

const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      {/* <img src="" alt="404 error" /> */}
      <h1>404 Page not found.</h1>
    </ErrorPageContainer>
  )
}

export default ErrorPage

const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 60vh;
  img{
    width: 300px;
  }
`
