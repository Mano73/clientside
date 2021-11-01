import React,{useState} from 'react'
import LoginComponent from '../Component/LoginComponent'
import {useHistory} from 'react-router-dom'
const Login = () => {
    const history = useHistory()

    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')

    const submitData = ()=>{
        console.log("else")
        if(email && pass){
       
        fetch("http://192.168.0.100:5000/api/users/login",{
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
        }
        
        else
        alert('Please enter your crdentials')
    }  
    
    const getData=(e)=>{
        if(e.target.name=="email")
        setEmail(e.target.value)
        else
        setPass(e.target.value)
    }

  
    return (
        <div>
           <LoginComponent name={"Login Form"} label={"REGISTER HERE"}  navigate={'/register'} onchange={getData} onBtnClick={submitData}/>
        </div>
    )
}

export default Login
