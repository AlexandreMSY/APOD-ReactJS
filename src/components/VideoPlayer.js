import React from "react";
import { ReactDOM } from "react";
import '../index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function VideoPlayer(props){
    return(
        <div className="ratio ratio-16x9" style={{width: '70%'}}>
            <iframe
            allow="autoplay; encrypted-media"
            allowfullscreen 
            src={props.url}/>
        </div>
    )
}