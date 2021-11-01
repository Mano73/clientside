import React from 'react'
import { Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./index.css"

const LoginComponent = ({name,label,navigate,onBtnClick,onchange,onSubmit}) => {

    return (
        <div className='logincss'>
            <h3 className='logincss1'> {name} </h3>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className='logincss2'>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={onchange} name={'email'}/>

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className='logincss3'>Password </Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={onchange} name={'pass'}/>
  </Form.Group>
  <Link to={navigate}>
  <h6 >{label} </h6>
  </Link>
  <Button className='logincss4' variant="primary" type="submit" onClick={onBtnClick}>
    Submit
  </Button>
</Form>
        </div>
    )
}

export default LoginComponent
