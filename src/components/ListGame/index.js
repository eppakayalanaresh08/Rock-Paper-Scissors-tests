import {Image, ListOrder, ButtonImage} from './styledComponents'

const ListGame = props => {
  const {choicesLists, onEachButton} = props

  return (
    <ListOrder>
      <ButtonImage
        onClick={() => onEachButton(choicesLists[0].id)}
        data-testid="rockButton"
      >
        <Image
          src={choicesLists[0].imageUrl}
          alt={choicesLists[0].id}
          key={choicesLists[0].id}
        />
      </ButtonImage>
      <ButtonImage
        onClick={() => onEachButton(choicesLists[1].id)}
        data-testid="scissorsButton"
      >
        <Image
          src={choicesLists[1].imageUrl}
          alt={choicesLists[1].id}
          key={choicesLists[1].id}
        />
      </ButtonImage>
      <ButtonImage
        onClick={() => onEachButton(choicesLists[2].id)}
        data-testid="paperButton"
      >
        <Image
          src={choicesLists[2].imageUrl}
          alt={choicesLists[2].id}
          key={choicesLists[2].id}
        />
      </ButtonImage>
    </ListOrder>
  )
}

export default ListGame
