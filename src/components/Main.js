import React from 'react';
import HornedBeasts from './HornedBeasts';
import 'bootstrap/dist/css/bootstrap.min.css';
// import dataOfArr from './data.json';
import CardGroup from 'react-bootstrap/CardGroup'
// import Modal from 'react-bootstrap/Modal';
import MyForm from './MyForm';

class Main extends React.Component {

    constructor(props){
        super(props);
        this.state ={
           selectedHorns:0
            
        }
    }
   setSelectedHorns=(event)=>{
       this.setState({
           selectedHorns:event.target.value
       })
   }
 
render(){
    
    return(
       
        <div className='container'>

          <MyForm setSelectedHorns={this.setSelectedHorns}/>
            <CardGroup>

        {this.props.sharedData.map(cardProfile =>{

            if(cardProfile.horns==this.state.selectedHorns){
                return  <HornedBeasts link={cardProfile.image_url} key={cardProfile.title} title={cardProfile.title} description={cardProfile.description} handleShow={this.props.handleShow} handleClose={this.props.handleClose} handleContentChange={this.props.handleContentChange} showing={this.props.showing}
                />
            }
           else if (this.state.selectedHorns==0){
            return  <HornedBeasts link={cardProfile.image_url} key={cardProfile.title} title={cardProfile.title} description={cardProfile.description} handleShow={this.props.handleShow} handleClose={this.props.handleClose} handleContentChange={this.props.handleContentChange} showing={this.props.showing}
            />
           }
        
        
        })}
       
       </CardGroup>
       </div>
    )
}
}

export default Main;