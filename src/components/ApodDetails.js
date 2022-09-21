import React from "react";
import { ReactDOM } from "react";
import '../index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import VideoPlayer from "./VideoPlayer";
import DateButton from "./DateInput";
import './github.png'

export default function ApodDetails(props){
    return(
        <div className="d-flex flex-column align-items-center bg-dark text-light p-3 border" style={{width: '90%'}}>
            <DateButton 
            currentDate={props.currentDate}
            onchange={props.onchange}/>
            <header className="m-2">
                <h2>{props.title}</h2>
            </header>
            {props.mediaType === "image" ? 
            <a href={props.hdurl}>
                <img src={props.src} className='border img-fluid'/>
            </a> : <div style={{width: '100%', height:'auto'}}><VideoPlayer url={props.videoUrl}/></div>}
            <div className="m-2">
                <button className="btn btn-warning" onClick={props.generatorAction}>Generate Random Image</button>
            </div>
            <main >
                <article>
                    <p>{props.description}</p>
                </article>
            </main>
            <footer className="text-center">
                <p>{props.copyright}</p>
                <p>{props.date}</p>
                <a href='https://github.com/AlexandreMSY/APOD-ReactJS'>
                    <img src={require('./github.png')} style={{width: '10%'}}/>
                </a>
            </footer>
        </div>
    )
}