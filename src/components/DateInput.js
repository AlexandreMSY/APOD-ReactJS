import React from 'react'
import { ReactDOM } from "react";
import '../index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function DateButton(props){
    return(
        <div>
            <input type='date' id='dateInput' 
            onChange={props.onchange} 
            min='1995-06-16' max={props.currentDate}
            name='date'/>
        </div>
    )
}