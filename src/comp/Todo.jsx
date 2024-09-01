import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import food from "./images/food1.jpg"


const Todo = () => {
    const [tasks,setTasks]=useState([]);
    const [newTask,setNewtask]=useState("");

    const handleInput=(e)=>{
        setNewtask(e.target.value);
    }

    const addTask=()=>{
       if(newTask.trim()!=""){
        setTasks((pr)=>[...pr ,newTask]);
        setNewtask("");
       }
    }

    const deleteTask =(index)=>{
      const upadate=  tasks.filter((_,i)=>i!==index)
      setTasks(upadate)
         
    }



  return (
    <>
    <Container className='p-5'>

    <div >
      
      <h1>To-Do-List</h1>

     <div>
     {/* <input type="text" value={newTask} placeholder='Enter New Task' onChange={handleInput} />
     <Button variant='primary' onClick={addTask}>ADD</Button>  {"  "} */}

<Navbar className="bg-body-tertiary justify-content-between">

<Form inline>
<Row>
  <Col xs="auto">
    <Form.Control
      type="text"
      placeholder="Enter New Task"
      className=" mr-sm-2"
      onChange={handleInput}
      value={newTask}

    />
  </Col>
  <Col xs="auto">
  <Button variant='primary' onClick={addTask}>ADD</Button>  {"  "}
  </Col>
</Row>
</Form>
</Navbar>


     </div>

<ol>
  {
tasks.map((task,index)=>{
return(
  <li key={index}>
  <span>{task}</span>
 {"  "} <Button variant='danger' className='btn-md p-0 m-3' onClick={()=> deleteTask(index)}>Delete</Button>
</li>
)
})
  }
</ol>
     


      </div>
      
        
        </Container>
        </>
    
   
  )
}

export default Todo

