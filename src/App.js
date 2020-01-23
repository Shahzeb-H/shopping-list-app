import React from 'react';
import Lists from './Lists';
import AddItem from './AddItem';

class App extends React.Component{
  userData;
  state = {
    items : [
      {id : 1, content : "Buy milk"},
      {id : 2, content : "Buy eggs"}
    ]
  }
  addItem = (a) => {
  a.id = Math.random();
  var b = [...this.state.items, a];
  this.setState({
    items : b
  })
}

//React Life Cycle
componentDidMount(){
  this.userData = JSON.parse(localStorage.getItem("user"));
  if (localStorage.getItem("user")){
    this.setState({
      content: this.userData.content
    })
  }
  else{
    this.setState({
      content: null
    })
  }
}

componentWillUpdate(nextProps, nextState){
  localStorage.setItem("user", JSON.stringify(nextState));
}

render(){
    return (
      <div>
        <h1> Shopping List </h1>
        <div className="shopping-list">
          <Lists list = {this.state.items} />
          <AddItem additem = {this.addItem} />
        </div>
      </div>
    );
  }
}

export default App;
