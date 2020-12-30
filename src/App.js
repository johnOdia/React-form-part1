import React from 'react'
import { Div } from './components/div';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {style:{width:'100px',height:'100px',background:'red'}}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()

    const el = e.target.parentNode
    const width = el[0].value, height = el[1].value, background = el[2].value   

    this.setState({style:{width:width,height:height,background:background}})
  }

  render(){
    return (
      <div className="App" style={{textAlign:'center'}}>
        <h1>Change the div!</h1>
        <form>
          <input placeholder='width'/>
          <input placeholder='height'/>
          <input placeholder='background color'/>
          <button onClick={this.handleSubmit}>submit</button>
        </form>
        <Div style={this.state.style} />
      </div>
    );
  }
}

export default App;
