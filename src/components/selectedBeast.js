import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import HornedBeasts from './HornedBeasts';

class SelectedBeast extends React.Component{
    

  //  constructor(props){
  //      super(props);
  //      this.state={
  //          heading:'h',
  //          imageLink:'h',
  //          imageDescription:'h',
  //       //    open:this.props.showing,
           
  //      }
  //  }
   handleContentChange

  render(){
      return(
          <div>
            {/* show={this.props.showing}  */}
      <Modal onHide={this.props.handleingClose}>
        <Modal.Header >
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.link} alt={this.props.title} title={this.props.title}/>
            
            <p>{this.props.description}</p>
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