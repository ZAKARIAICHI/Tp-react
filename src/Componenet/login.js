import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
function Inscrire(logine){
    const [logineee,setlogine]=useState([])
    function log(loginee,setloginee){
        let arr=[]
        const user = document.getElementById('user').value;
        const pass = document.getElementById('pass').value;
        arr.push(user)
        arr.push(pass)
        loginee.push(arr)
        alert(loginee)
    }
    return(
        <Container>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email "id="user" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" id='pass' />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={()=>log({logineee})}>
          Submit
        </Button>
      </Form>  
      </Container>
    )
}
export default Inscrire;