import React from "react";
import { ReactDOM } from "react";
import '../index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function VideoPlayer(props){
    return(
        <div className="ratio ratio-16x9">
            <iframe
            allow="autoplay; encrypted-media"
            allowFullScreen 
            src={props.url}/>
        </div>
    )
}