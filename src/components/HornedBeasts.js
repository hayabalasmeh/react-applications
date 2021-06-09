import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
         numOfFav:0
        }

    }
    incrementNumOfFav = () =>{
        this.setState({
            numOfFav:this.state.numOfFav +1
            
        })
       
    }
    render(){
        return(
            <div className='horned'>
                {/* <h2>{this.props.title}</h2>
                <img onClick={this.incrementNumOfFav} src={this.props.link} alt={this.props.title} title={this.props.title} />
                
                <p>{this.props.description}</p>
                <p>Choose it as My Favorite: {this.state.numOfFav}</p>
                // <button>See More of this</button> */}

                 <Card style={{ width: '18rem' }} >
                    <Card.Img onClick={this.incrementNumOfFav} src={this.props.link} alt={this.props.title} title={this.props.title} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                        {this.props.description}
                        </Card.Text>
                        <Card.Text>
                        Choose it as My Favorite : ❤️  {this.state.numOfFav}
                        </Card.Text>
                      
                        <Button variant="secondary">See More of this</Button>
                    </Card.Body>
                    </Card>
            </div>
        )
    }
}

export default HornedBeasts;