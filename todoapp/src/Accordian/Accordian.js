import React, { useState } from 'react';
import './Accordian.css';
import {question} from './api';
import MyAccordian from './MyAccordian'
const Accordian = ()=>{
const [data , setData] =useState(question);

return(
    <>
    <section className='main-div'>
    <h1>React Interview Question</h1>
        {
            data.map((curEle)=>{
                const {id,question,answer} = curEle;
            return <MyAccordian key={id} {...curEle}/>;
        })
        }
        </section>
    </>
)
}
export default Accordian;