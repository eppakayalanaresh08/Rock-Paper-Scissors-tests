import {Component} from 'react'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'

import {
  MainContainer,
  GameContainer,
  HederContainer,
  HeadingElement,
  ContainerNumberCount,
  Score,
  ListsChoices,
  NumberCount,
  ClickContainer,
  ImageClick,
  ImageHeading,
  ClickImageContainer,
  ContainerImage,
  ScoreElement,
  ContainerPlayAgain,
  ButtonPlayAgin,
  PopResult,
  PopUpImage,
  PopUpView,
} from './styledComponents'

import ListGame from '../ListGame'

import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GameChoices extends Component {
  state = {
    GameChoicesOne: false,
    GameArray: '',
    ScoreCount: 0,
    text: '',
  }

  onClickPlayAgain = () => {
    this.setState({GameChoicesOne: false})
  }

  renderRandom = () => {
    // const {choicesList} = this.props
    const {GameArray, text} = this.state
    const listOutUser = GameArray[0].imageUrl
    const listOutRandom = GameArray[1].imageUrl
    // console.log(randomImage)
    // console.log(userImage)

    return (
      <ClickContainer>
        <ClickImageContainer>
          <ContainerImage>
            <ImageHeading>YOU</ImageHeading>
            <ImageClick src={listOutUser} alt="your choice" />
          </ContainerImage>
          <ContainerImage>
            <ImageHeading>OPPONENT</ImageHeading>
            <ImageClick src={listOutRandom} alt="opponent choice" />
          </ContainerImage>
        </ClickImageContainer>
        <ContainerPlayAgain>
          <ScoreElement>{text}</ScoreElement>
          <ButtonPlayAgin onClick={this.onClickPlayAgain}>
            PLAY AGAIN
          </ButtonPlayAgin>
        </ContainerPlayAgain>
      </ClickContainer>
    )
  }

  getRenderList = (item1, item2) => {
    if (item1.id === 'ROCK') {
      switch (item2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (item1.id === 'PAPER') {
      switch (item2.id) {
        case 'SCISSORS':
          return 'YOU LOSE'
        case 'ROCK':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (item2.id) {
        case 'PAPER':
          return 'YOU WON'
        case 'ROCK':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  onEachButton = id => {
    const {ScoreCount} = this.state
    const randomChoice = Math.floor(Math.random() * choicesList.length)
    const randomEachObject = choicesList[randomChoice]
    const listObject = choicesList.filter(eachObject => eachObject.id === id)
    // const userImageUrl = choicesList.indexOf(listObject[0])
    const result = this.getRenderList(listObject[0], randomEachObject)
    let newScore = ScoreCount
    if (result === 'YOU WON') {
      newScore = ScoreCount + 1
    } else if (result === 'YOU LOSE') {
      newScore = ScoreCount - 1
    } else {
      newScore = ScoreCount
    }

    this.setState({
      GameChoicesOne: true,
      ScoreCount: newScore,
      GameArray: [listObject[0], randomEachObject],
      text: result,
    })
  }

  render() {
    const {GameChoicesOne, ScoreCount} = this.state
    return (
      <MainContainer>
        <GameContainer>
          <HederContainer>
            <HeadingElement>
              ROCk <br />
              PAPER <br />
              SCISSORS
            </HeadingElement>

            <ContainerNumberCount>
              <Score>Score</Score>
              <NumberCount>{ScoreCount}</NumberCount>
            </ContainerNumberCount>
          </HederContainer>
          {GameChoicesOne ? (
            this.renderRandom()
          ) : (
            <ListsChoices>
              <ListGame
                choicesLists={choicesList}
                onEachButton={this.onEachButton}
              />
            </ListsChoices>
          )}
          <PopResult>
            <Popup
              modal
              trigger={
                <button type="button" className="trigger-button">
                  RULES
                </button>
              }
            >
              {close => (
                <PopUpView>
                  <button
                    type="button"
                    onClick={() => close()}
                    className="closeTrigger"
                  >
                    <RiCloseLine />
                  </button>
                  <PopUpImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </PopUpView>
              )}
            </Popup>
          </PopResult>
        </GameContainer>
      </MainContainer>
    )
  }
}

export default GameChoices
