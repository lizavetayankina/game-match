import React  from 'react';
import Card from './Card';
import  '../styles/Board.css';


class Board extends React.Component {
  constructor(props) {
    super(props)
    const fronts = [
      '💩',
      '👹',
      '👿',
      '☃',
      '🚗',
      '🚲',
      '♖',
      '☺',
      '♒',
      '✿',
      '♥️',
      'ღ',
      '🎵',
    ]
    const deck = fronts
      .concat(fronts)
      .sort(() => Math.random() - 0.5)
      .map(f => {
        return {
          content: f,
          faceUp: false,
        }
      })
    this.state = {
      deck: deck,
      firstCard: null,
    }
  }

  flipCardTo(cardIdx, faceUp) {
    this.setState({
      deck: this.state.deck.map((f, i) => {
        if(i === cardIdx) {
          return {
            content: f.content,
            faceUp: !f.faceUp,
          }
        } else {
          return f;
        }
      })
    })
  }

  flip(cardIdx) {
    if(this.state.firstCard === null) {
      this.setState({firstCard: cardIdx});
    } else {
      const firstCardContent = this.state.deck[this.state.firstCard].content;
      const secondCardContent = this.state.deck[cardIdx].content;
      if(firstCardContent === secondCardContent) {
        this.setState({firstCard: null});
      } else {
        setTimeout(() => {
          this.flipCardTo(this.state.firstCard, false)
          this.flipCardTo(cardIdx, false)
          this.setState({firstCard: null});
        }, 3000)
      }
    }

    this.flipCardTo(cardIdx, !this.state.deck[cardIdx].faceUp)
  }

  render () {
    
    console.log(this.state.firstCard);
    return (
    
      this.state.deck.map((f, i) => {
        return (
        <div className="board-board" key={i}>
        <div className="Board">
          <Card
            flip={() => {this.flip(i)}}
            content={f.content}
            faceUp={f.faceUp} />
        </div>
        </div>)
      })
    )
  }
}

export default Board;