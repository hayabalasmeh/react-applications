import React from 'react';

class HornedBeasts extends React.Component{
    render(){
        return(
            <div className='horned'>
                <h2>{this.props.title}</h2>
                <img src={this.props.link} alt={this.props.title} title={this.props.title} />
                
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default HornedBeasts;