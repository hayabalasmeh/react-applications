import React from 'react';
import HornedBeasts from './HornedBeasts';
// import dataOfArr from './data.json';
import CardGroup from 'react-bootstrap/CardGroup'


class Main extends React.Component {

    // constructor(props){
    //     super(props);
    //     this.state = dataOfArr;
        
    // }
render(){
    return(
        <div className='container'>
            <CardGroup>
        {this.props.sharedData.map(cardProfile =>{
         return (
         <HornedBeasts link={cardProfile.image_url} title={cardProfile.title} description={cardProfile.description} show/>
         )
          
        })}
       
       </CardGroup>
       </div>
    )
}
}

export default Main;