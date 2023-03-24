import styled from 'styled-components'

export const ListOrder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  flex-wrap: wrap;
  @media screen and (max-width: 576px) {
    width: 90%;
  }
`
export const ButtonImage = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`

export const Image = styled.img`
  width: 200px;
  @media screen and (max-width: 576px) {
    width: 100px;;
`
