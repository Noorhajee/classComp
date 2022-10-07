// import './App.css';
import data from './data';
import { Component } from 'react';
import ListData from './ListData.js'


class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      data
    }
     this.deleteItem= this.deleteItem.bind(this)

  }
// deleteItem(){
//   this.state.data.pop()
// }

  // deleteItem = () =>{
  //   let items = this.state.data;
  //   this.setState({
  //     data: items.pop()
  //     })
  //   }
    deleteItem = () => {
      const items = this.state.items;
      if (items.length > 0) {
        const lastIndex = items.length - 1;
        this.setState({ items: items.filter((item, index) => index !== lastIndex) });
      }
    };



  render(){
    return (
      <div className="App">
        <ListData data={data} change={this.deleteItem}/>
       </div>

    );

    }}



export default App;
