import React from "react";
import { ReactDOM } from "react";
import '../index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import VideoPlayer from "./VideoPlayer";

export default function ApodDetails(props){
    return(
        <div className="d-flex flex-column align-items-center bg-dark text-light p-3 border" style={{width: '90%'}}>
            <header className="m-2">
                <h2>{props.title}</h2>
            </header>
            {props.mediaType === "image" ? 
            <a href={props.hdurl}>
                <img src={props.src} className='border img-fluid'/>
            </a> : 
            <VideoPlayer url={props.videoUrl}/>} 
            <main className="m-2">
                <article>
                    <p>{props.description}</p>
                </article>
            </main>
            <footer>
                <p>{props.copyright}</p>
                <p>{props.date}</p>
            </footer>
        </div>
    )
}