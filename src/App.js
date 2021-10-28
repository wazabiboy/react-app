/* eslint-disable no-lone-blocks */
import React, {Component} from 'react';
import Counter from './components/Counter';
//import Header from './components/Header';
import './App.css';
import Header from './components/Header';
 
class App extends Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state = {counters : [0,0,0, 0], total: 0}
      }

 handerPlusAppInner = (count, i) => {
console.log("Maj compteur n "  +i ,"valeur" + count );
//modifer lle tableau des compteur 
let counters = this.state.counters;
counters[i] =  count ;
console.log(counters)

this.setState({counters});


let total  = counters.reduce((accumulateur, valeur) => accumulateur + valeur , 0);{

  this.setState({total});

};
 
 
}

  render(){
    
    return(
<>
 <Header total={this.state.total}/>
 {
   this.state.counters.map(( counter, i) => {

return <Counter key = {i} handerPlusApp={(value) => this.handerPlusAppInner(value, i)}/>
   })
 }
</>  );
  }
}

export default App;
