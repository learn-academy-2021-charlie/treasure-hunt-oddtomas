import React, { Component } from 'react'
import Square from './components/Square'
import YoutubeEmbed from './components/YoutubeEmbedded'
import './App.css'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: null,
      bombLocation: null,
      count: 5

    }
  }


  componentDidMount(){
    let treasure = Math.floor(Math.random() * this.state.board.length)
    this.setState({treasureLocation: treasure})

    let bomb = Math.floor(Math.random() * this.state.board.length)
    this.setState({bombLocation: bomb})

  }

  handleGamePlay = (index) =>{
    const {board} = this.state
    this.setState({board: board}) 

    if( index !== this.state.treasureLocation && index !== this.state.bombLocation){
      board[index] = "🌲"
      this.setState({count: this.state.count -1})
      }
      const {count} = this.state;
      if(count === 1){
        alert('You suck, out of tries!')
        return this.refreshPage()
      }
  else if(index === this.state.treasureLocation){
      board[index] = "💎"
      alert('Congrats ye found the treasure!')
      return this.refreshPage()
    }else if (index === this.state.bombLocation){
      board[index] = "💣"
      alert('Sorry sucka, you lost, kick rocks.🥸')
      return this.refreshPage()

  }
    
  }

 


 refreshPage = () =>{
  window.location.reload(false);
}

  render(){
    return(
      <>
      <div class="main">
  <div class="container">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
        <div id="gameboard">
        {this.state.board.map((value, index) => {
          return <Square value={value}
           key={index} 
           index={index}
           handleGamePlay={this.handleGamePlay}
           />
        } )}
    
        </div>
        <p id="counter">Count: {this.state.count}</p>
   <button id="restart" onClick={this.refreshPage}>PLAY AGAIN </button>

   <div className="App">
      <h1>Youtube Embed</h1>
      <YoutubeEmbed embedId="rokGy0huYEA" />
    </div>



      </>
    )
  }
}
export default App
