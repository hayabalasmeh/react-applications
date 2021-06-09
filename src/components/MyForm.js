


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';


class MyForm extends React.Component{

    render(){
        return(
          <div>
           <Form>
  <Form.Group controlId="hornsnum">
    <Form.Label>Select the Number of Horn you want</Form.Label>
    <Form.Control defaultValue= "0" as="select" custom name='selectedHorn' onChange={this.props.setSelectedHorns} >
    <option value='0'>Show All</option>
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>3</option>
      <option value='100'>WOW</option>
      
    </Form.Control>
  </Form.Group>
</Form>
</div>
        )
    }
}

export default MyForm;