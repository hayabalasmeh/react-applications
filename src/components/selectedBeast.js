import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import HornedBeasts from './HornedBeasts';

class SelectedBeast extends React.Component{
    

   constructor(props){
       super(props);
       this.state={
           heading:'h',
           imageLink:'h',
           imageDescription:'h',
        //    open:this.props.showing,
           
       }
   }
//    changingContent = ()=>{
//        this.setState({
//         open:
//        })
      
//    }

  render(){
      return(
          <div>
            
      <Modal show={this.props.showing} onHide={this.props.handleingClose}>
        <Modal.Header >
          <Modal.Title>{this.state.heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {this.state.imageLink}
            <p>{this.state.imageDescription}</p>
        </Modal.Body>
        <Modal.Footer>
           
          <Button variant="secondary" onClick={this.props.handleingClose}>
              
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
          </div>
         
      )
  }
     
}
export default SelectedBeast;