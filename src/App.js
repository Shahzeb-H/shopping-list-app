import React from 'react';
import Lists from './Lists';
import AddItem from './AddItem';

class App extends React.Component{
  state = {
    items : [
      {id : 1, content : "Buy milk"},
      {id : 2, content : "Play games"}
    ]
  }
  addItem = (a) => {
  a.id = Math.random();
  var b = [...this.state.items, a];
  this.setState({
    items : b
  })
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
