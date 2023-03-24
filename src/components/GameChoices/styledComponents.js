import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  background-color: #223a5f;
  height: 100vh;
  justify-content: center;
`

export const GameContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
`

export const HederContainer = styled.div`
  display: flex;
  border: 2px solid #ffffff;
  border-radius: 5px;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

export const HeadingElement = styled.h1`
  font-family: 'Bree Serif';
  color: #ffffff;
  font-size: 20px;
  padding: 20px;
  margin: 10px;
`

export const ContainerNumberCount = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 10px;
  margin: 10px;
  border-radius: 10px;
  margin-right: 10px;
`
export const Score = styled.p`
  color: #223a5f;
  font-size: 20px;
  font-family: 'Roboto';
`

export const NumberCount = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 30px;
  margin: 0px;
`

export const ClickImageContainer = styled.div`
  display: flex;
`

export const ListsChoices = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  margin-top: 30px;
  width: 90%;
`

export const ClickContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ImageClick = styled.img`
  width: 200px;
`

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ImageHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 20px;
`

export const ContainerPlayAgain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ScoreElement = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
`

export const ButtonPlayAgin = styled.button`
  background-color: #ffffff;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
  font-family: 'Bree serif;';
`

export const PopResult = styled.div`
  align-self: flex-end;
  margin-top: auto;
  @media screen and (max-width: 576px) {
    margin-bottom: 40px;
  }
`

export const PopUpView = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vw;
  justify-content: space-between;
  padding: 10px;
  @media screen and (max-width: 576px) {
    height: 260px;
    width: 100%;
  }
`

export const PopUpImage = styled.img`
  width: 100%;
  height: 90%;
  margin-top: auto;
`
