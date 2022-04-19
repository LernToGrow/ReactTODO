import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListComp from './ListComp'

const ToDoList =()=>{

const  [item ,setItem] = useState("");
const [newitem ,setNewItem] = useState([]);

const itemEvent=(event)=>{
    setItem(event.target.value);
};

const listofitem=()=>{
    setNewItem((prevValue)=>{
        return [...prevValue,item];
    });
    setItem(" ");
};

return(
    <>
        <div className='main_div'>
            <div className='center_div'>
                <br/>
                <h1>ToDoList App</h1>
                <br/>
                <input value={item} onChange={itemEvent} type='text' placeholder='Enter Here List'/> 
                <Button className='new_btn' onClick={listofitem}>
                    <AddIcon/>
                </Button>
                <ol>
                   {newitem.map((val ,index)=>{
                        return  <ListComp  key={index} text={val}/>;
                    })
                   }
                </ol>
            </div>
        </div>
    </>
)
};
export default ToDoList;