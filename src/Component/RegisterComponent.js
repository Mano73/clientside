import React from 'react'
import { Form,Button } from 'react-bootstrap'
import "./index.css"

const RegisterComponent = ({name,label,navigate,onBtnClick,onchange,onSubmit}) => {
    return (
        <div className='reg1'>           
            <h3>{name} </h3>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Username</Form.Label>
<Form.Control type="text" placeholder="Enter username" onChange={onchange} name={'username'} />

</Form.Group>    
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control type="email" placeholder="Enter email"onChange={onchange} name={'email'} />

</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Password" onChange={onchange} name={'pass'}/>
</Form.Group>

<Button variant="primary" type="submit" onClick={onBtnClick}>
Submit
</Button>
</Form>
            
        </div>
    )
}

export default RegisterComponent
