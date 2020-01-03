import styled from 'styled-components';

export const AboutContainer = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(/images/aboutpage-main-one.jpg);
  background-size: 100%;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
`

export const InfoTextWrapper = styled.div`
  width: 50%;
  height: 26vh;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 7px;
  background: white;
  margin-bottom: 300px;

  @media (max-width: 992px){
    height: 30vh;
  }
  
  @media (max-width: 576px){
    width: 100%;
    margin-bottom: 0px;
    height: 50vh;
  }
`

export const InfoHeaderText = styled.h1`
  font-family: 'Pacifico',cursive;
`

export const InfoPlainText = styled.p`
  margin: 10px;
  font-family: 'Lato',sans-serif;
`