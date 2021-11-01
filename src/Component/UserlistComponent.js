import React from 'react'
import { Form,Button, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./index.css"

const Userlist = ({name}) => {
    return (
        <div className="user1">
            <ListGroup as="ul">
  <ListGroup.Item as="li" active>
    User List
  </ListGroup.Item>
  {["mano", "runban", "bala"].map(i=><ListGroup.Item as="li">{i}</ListGroup.Item>)}
     </ListGroup>
        </div>
    )
}

export default Userlist
