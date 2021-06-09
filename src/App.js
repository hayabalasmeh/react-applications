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
           modalHeading:'',
           modalImageDescription:'',
           modalImageLink:'',

        //  }
    }
    }
    handleContentChange = (heading,imageDescription,imageLink)=>{
      this.setState({
        modalHeading : heading,
        modalImageDescription : imageDescription,
        modalImageLink : imageLink

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
     <SelectedBeast showing={this.state.showing} sharedData={dataOfArr} handleShow={this.handleShow} handleClose={this.handleClose} handleContentChange={this.handleContentChange} modalHeading={this.state.modalHeading} modalImageDescription={this.state.modalImageDescription}
           modalImageLink={this.state.modalImageLink}/>
     <Footer />
     </div>
  
    )
  }
}

export default App;
