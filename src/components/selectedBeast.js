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
  //  handleContentChange
 closing =()=>{
  this.props.handleClose();

 } 
  render(){
      return(
          <div>
            {/* show={this.props.showing}  */}
            {/* onHide={this.props.handleingClose} */}
      <Modal  {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
       show={this.props.showing} onHide ={this.closing}>
        <Modal.Header  closeButton>
          <Modal.Title>{this.props.modalHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.modalImageLink} alt={this.props.modalHeading} title={this.props.modalHeading} style={{boxSizing:'border-box'}}/>
            
            <p>{this.props.modalImageDescription}</p>
        </Modal.Body>
        <Modal.Footer>
        {/* onClick={this.props.handleingClose} */}
          <Button variant="secondary" onClick ={this.closing}>
              
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
          </div>
         
      )
  }
     
}
export default SelectedBeast;