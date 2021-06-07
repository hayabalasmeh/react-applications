import React from 'react';

class HornedBeasts extends React.Component{
    constructor(props){
        super(props);
        this.fav = {
         numOfFav:0
        }

    }
    incrementNumOfFav = () =>{
        this.setState({
            numOfFav:this.fav.numOfFav+1
        })
    }
    render(){
        return(
            <div className='horned'>
                <h2>{this.props.title}</h2>
                <img onClick={this.fav.numOfFav} src={this.props.link} alt={this.props.title} title={this.props.title} />
                
                <p>{this.props.description}</p>
                <p>Choose it as My Favorite</p>
                <button>See More of this</button>
            </div>
        )
    }
}

export default HornedBeasts;