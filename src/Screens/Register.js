import React,{useState} from 'react'
import RegisterComponent from '../Component/RegisterComponent'
import {useHistory} from 'react-router-dom'
import { findAllInRenderedTree } from 'react-dom/test-utils'
const Register = () => {
        const history = useHistory()
        
        const [Username,setUsername] =useState(" ")
        const [email,setEmail] = useState('')
        const [pass,setPass] = useState('')
    
        const submitData = ()=>{
            if(Username && email && pass)
            {
                fetch("http://192.168.0.100:5000/api/users/register",{
                    method : "post",
                    headers : {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      username : email,
                      password : pass
                    })
                })
                .then(res => res.text())
                .then(res=>{
                  let object =JSON.parse(res).message
                  if(object === "Succesfully"){
                    console.log("inside res"+res);
                     history.push('/users')
                    }
                    else{
                        console.log("else part")
                        console.log(JSON.parse(res).message)
                    }  
                });
              
            }else{
                   alert('Please enter all fields')
            }
        }  

        const getData=(e)=>{
            if(e.target.name=="email")
            setEmail(e.target.value)
            else if(e.target.name=="pass")
            setPass(e.target.value)
            else
            setUsername(e.target.value)
        }
    
    return (
        <div className='reg2'>
            <RegisterComponent name={"SignUp Form"} onchange={getData} onBtnClick={submitData}/>
        </div>
    )
}

export default Register
