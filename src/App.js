
import  { Component } from "react";

class App extends Component {
  //constructor with prop
  constructor(props){
    super(props);
    this.state = {
        isExpand:false
    }
  }
  // handleClick

  handleClick = () =>{
    if (this.state.isExpand) {
      this.setState({isExpand : false})
    }else{
      this.setState({isExpand : true})
    }
    // /console.log(this.state.isExpand);
  }

  render (){
    return (
      <div>
        <h1>Conditional Rendering </h1>
        <button onClick={this.handleClick}>{this.state.isExpand ? 'Collapse' : 'Expand'}</button>
        <p>
        {this.state.isExpand 
        ?'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in, nesciunt nemo animi iure, fuga, porro placeat incidunt natus aut minima molestiae? Esse, est quisquam adipisci fuga obcaecati error tenetur.'
        :
        ''}
        </p>
          
        
      </div>
    )
  }






  
}

export default App;
