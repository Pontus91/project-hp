import styled from 'styled-components';
import { COLORS } from '../../constants';
import { XSquare } from 'react-feather';

export const GetSitterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.mainGreen};
`

export const SitterListWrapper = styled.div`
  border: 1px solid black;
  height: auto;
  width: 50%;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${COLORS.whiteMain};
  @media (max-width: 576px){
    width: 100%;
    border: none;
    height: 75vh;
  }
  @media (max-width: 992px){
    width: 100%;
    border: none;
  }
  @media (max-width: 1024px){
    width: 100%;
    border: none;
  } 
`
export const SearchSitterCity = styled.div`
  width: 70%;
  height 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 576px){
    width: 90%;
  }
`
export const SearchInputButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SearchInput = styled.input`
  width: 40%;
  color: ${COLORS.mainBlue};
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  margin-left: 15px;
  @media (max-width: 576px){
    width: 100%;
    height: 30px;
  }
`

export const SearchButton = styled.button`
  margin-left: 10px;
  width: 25%;
  height: 38px;
  border-radius: 20px;
  background-color: ${COLORS.mainBlue};
  border: none;
  text-transform: uppercase;
  color: ${COLORS.whiteMain};
  font-family: 'Montserrat',sans-serif;
  &:hover{
    background-color: ${COLORS.hoverButtonColor};
    cursor: pointer;
  }
  @media (max-width: 576px){
    width: 80%;
    height: 38px;
  }
`

export const SitterHeader = styled.h1`
  font-family: 'Pacifico',cursive;
`
export const CityText = styled.p`
  margin: 0 auto;
  font-family: 'Lato',sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
`
export const CityTextInfo = styled.p`
  margin-bottom: 30px;
  font-family: 'Lato',sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
`

export const SitterPost = styled.div`
  width: 90%;
  height: auto;
  border: 1px solid black;
  margin: 10px;
  background: ${COLORS.mainGreen};
  border-radius: 7px;
  
`
export const SitterText = styled.p`
  flex: 1;
  text-align: center;
  font-family: 'Lato',sans-serif;
  font-weight: bold;
  color: ${COLORS.whiteMain};
`
export const SitterDesc = styled.p`
  text-align: center;
  font-weight: bold;
  font-family: 'Lato',sans-serif;
  color: ${COLORS.whiteMain};
  width: 40%;
`
export const SitterAcceptButton = styled.button`
  width: 25%;
  height: 38px;
  border-radius: 20px;
  background-color: ${COLORS.mainBlue};
  border: none;
  text-transform: uppercase;
  color: ${COLORS.whiteMain};
  font-family: 'Montserrat',sans-serif;
  &:hover{
    background-color: ${COLORS.hoverButtonColor};
    cursor: pointer;
  }
  @media (max-width: 576px){
    width: 40%;
  }
`

export const SitterDescWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SitterDiv = styled.div`
  display: flex;
`
export const DogSitterHeader = styled.h1`
  text-align: center;
  font-size: 16px;
  font-family: 'Lato',sans-serif;
  text-transform: uppercase;
  margin-top: 15px;
  color: ${COLORS.whiteMain};
`

export const RemoveCity = styled(XSquare)`
  width: 16px;
  height: 16px;
  margin-left: 10px;
  color: ${COLORS.mainDarkRed};
  &:hover{
    cursor: pointer;
  }
  
`

export const CompleteButton = styled.button`
  margin: 35px 0px 35px 0px;
  width: 25%;
  height: 38px;
  border-radius: 20px;
  background-color: ${COLORS.mainBlue};
  border: none;
  text-transform: uppercase;
  color: ${COLORS.whiteMain};
  font-family: 'Montserrat',sans-serif;
  &:hover{
    background-color: ${COLORS.hoverButtonColor};
    cursor: pointer;
  }
  @media (max-width: 576px){
    width: 60%;
    height: 38px;
  }
`

export const NoMatchDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
