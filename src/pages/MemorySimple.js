import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'



import Card from '../components/memory/Card'
import GuessCount from '../components/memory/GuessCount'
import HallOfFame,{FAKE_HOF} from '../components/memory/HallOfFame'
import HighScoreInput from '../components/memory/HighScoreInput'

const SIDE = 4
export const SYMBOLS = '😀🎉💖🎩🌍🌛🌞🍟'


const VISUAL_PAUSE_MSECS=750

class MemorySimple extends Component {
  state = {
    cards: this.generateCards(),
    currentPair: [],
    guesses: 0,
    matchedCardIndices: [],
    hallOfFame: null, 
  }
  
  //arrow fx for binding
  displayHallOfFame = (hallOfFame) => {
    this.setState({hallOfFame})
  }
  
  constructor(props){
    super(props)
    this.handleCardClick = this.handleCardClick.bind(this)
  }
  
  handleNewPairClosedBy(index) {
    const { cards, currentPair, guesses, matchedCardIndices } = this.state

    const newPair = [currentPair[0], index]
    const newGuesses = guesses + 1
    const matched = cards[newPair[0]] === cards[newPair[1]]
    this.setState({ currentPair: newPair, guesses: newGuesses })
    if (matched) {
      this.setState({ matchedCardIndices: [...matchedCardIndices, ...newPair] })
    }
    setTimeout(() => this.setState({ currentPair: [] }), VISUAL_PAUSE_MSECS)
  }

  generateCards() {
    const result = []
    const size = SIDE * SIDE
    const candidates = shuffle(SYMBOLS)
    while (result.length < size) {
      const card = candidates.pop()
      result.push(card, card)
    }
    return shuffle(result)
  }

  //Arrow fx for binding
  handleCardClick = index => {
    const {currentPair} = this.state
    if (currentPair.length === 2){
      return
    }
    if (currentPair.length === 0){
      this.setState({currentPair: [index]})
      return
    }
    this.handleNewPairClosedBy(index)
  }

  getFeedbackForCard(index){
    const {currentPair,matchedCardIndices}=this.state
    const indexMatched = matchedCardIndices.includes(index)

    if(currentPair.length < 2){
      return indexMatched || index === currentPair[0] ? 'visible' : 'hidden'
    }

    if (currentPair.includes(index)){
      return indexMatched ? 'justMatched' : 'justMismatched'
    }
    return indexMatched ? 'visible' : 'hidden'
  }

  render() {
    const {cards, guesses,hallOfFame, matchedCardIndices}= this.state
    const won = matchedCardIndices.length === cards.length
    return (

      <div className="page dark">



        Memory

        <div className = "explaination">
          In this game you must find pairs of cards.
        </div>
        <section className = "memory darksection round">
          <div className = "dark round">
            Guesses : 
            <GuessCount guesses={guesses} />
          </div>
          
          <div className="cardgridsimple">
            {cards.map((card,index) => (
            <Card
              card = {card}
              feedback={this.getFeedbackForCard(index)}
              index = {index}
              key = {index}
              onClick = {this.handleCardClick}
            /> 
            ))}

          </div>
          {
            won && (
              hallOfFame ? (
                <HallOfFame entries = {this.state.hallOfFame} />
              ):(
                <HighScoreInput guesses={guesses} onStored={this.displayHallOfFame} />
                
              )
            )
          }
        </section>  
        
      </div>
    )
  }
}

export default MemorySimple