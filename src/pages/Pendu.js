import React, {Component} from 'react';


import LetterButton from '../components/pendu/LetterButton'
import WordShower from '../components/pendu/WordShower'
import Counter from '../components/pendu/Counter.js'
import '../App.css'; 
import './Pages.css'
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

class Pendu extends Component {
  state = {
    alphabetlist : ALPHABET.split(''),
    letterTried : [],
    guesses : 0,
    word : "bielorussie"
  }

  constructor(props) {
    super(props)
    this.handleLetterClick = this.handleLetterClick.bind(this)
  }

  //arrow fx for bindding
  handleLetterClick = (index) => {
    const { guesses} = this.state
    const newGuesses =guesses +1
    const letterTried = this.state.letterTried
    const letter = this.state.alphabetlist[index]
    console.log(index,letter)
    if (!letterTried.includes(letter)){
      this.setState({guesses : newGuesses})
      this.setState({letterTried : [...letterTried, letter]})
    }
    
  }

  render(){
    const {alphabetlist, letterTried,guesses,word} = this.state

    const wordaslist = word.split('')

    return(
      <div className="page dark pendu">
        <header className="App-header">
          Hangman 
        </header>
        <div className = "explaination">
          In this game you need to find a given word in the smallest amount of guesses possible.
        </div>
        <section className = "hangman round darksection">
          <Counter guesses = {guesses}/>
          <section className = "word">
          {wordaslist.map((letter,index)=>(
            <div className ={`wordletter ${letter}`} key = {index}>
              {letterTried.includes(letter) ? letter : "_"}
            </div>
          ))}
          </section>
          
          <WordShower 
            wordaslist= {wordaslist}
            lettertried = {letterTried}
          />

          <section className = "keyboard wide round">
            {
     
              alphabetlist.map((letter,index) => (
                <LetterButton
                letter = {letter}
                pressed = {letterTried.includes(letter)}
                index = {index}
                key = {index}
                onClick = {this.handleLetterClick}
                />
              ))
            }
          </section>
          
        </section>
      </div>
    ) 
    
  }
    
}
    


export default Pendu;
