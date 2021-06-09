import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import SelectedBeast from './components/selectedBeast';
import dataOfArr from './components/data.json';

class App extends React.Component{

    constructor(props){
         super(props);
        //  this.dataSharedArr= {
        //    data:dataOfArr
        //   }
         this.state={
           showing:false

        //  }
    }
    }
    handleShow = ()=>{
      this.setState(
        {
        showing:true
        }
      )
    }
    handleClose = ()=>{
      this.setState(
        {
        showing:false
        }
      )
    }
  render(){
    return(
      <div>
      
     <Header />
     <Main showing={this.state.showing} sharedData={dataOfArr} handelingShow={this.handleShow} handleingClose={this.handleClose}/>
     <SelectedBeast show={this.state.showing} sharedData={dataOfArr} handelingShow={this.handleShow} handleingClose={this.handleClose} />
     <Footer />
     </div>
  
    )
  }
}

export default App;
