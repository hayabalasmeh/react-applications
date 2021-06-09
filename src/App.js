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
           showing:false,
           heading:'',
           imageDescription:'',
           imageLink:'',

        //  }
    }
    }
    handleContentChange = (heading,imageDescription,imageLink)=>{
      this.setState({
        heading:heading,
        imageDescription:imageDescription,
        imageLink:imageLink,

      })
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
     <Main showing={this.state.showing} sharedData={dataOfArr} handleShow={this.handleShow} handleClose={this.handleClose} handleContentChange={this.handleContentChange}/>
     <SelectedBeast show={this.state.showing} sharedData={dataOfArr} handleShow={this.handleShow} handleClose={this.handleClose} handleContentChange={this.handleContentChange}/>
     <Footer />
     </div>
  
    )
  }
}

export default App;
