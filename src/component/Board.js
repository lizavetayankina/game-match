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
          showEndGame: false,
        }
      })
    this.state = {
      deck: deck,
      firstCard: null,
      level: null,
      score: 0,
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
        this.setState({ score: this.state.score + 1,
          firstCard: null,
       }, 

          );
      } else {
        setTimeout(() => {
          this.flipCardTo(this.state.firstCard, false)
          this.flipCardTo(cardIdx, false)
          this.setState({firstCard: null});
        }, 1000)
      }
    }
console.log('score',this.state.score);
    this.flipCardTo(cardIdx, !this.state.deck[cardIdx].faceUp)
  }

  render () {

    console.log("one card",this.state.firstCard);
    if(this.state.score == 13) {
      alert("game over");
    };
    
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
        </div>
        )
      }
      )
    )
  }
}

export default Board;