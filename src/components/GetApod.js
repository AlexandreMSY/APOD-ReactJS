import React from "react";
import ApodDetails from "./ApodDetails";
import { ReactDOM } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default class GetApod extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date: '',
            dataApi: {}
        }
        this.setDate = this.setDate.bind(this)
    }

    componentDidMount(){
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(response => response.json())
            .then(data => this.setState({dataApi: data}))
            .catch((error) => {
                console.error('Error ', error)
            })       
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.date !== this.state.date){
            fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${this.state.date}&`)
                .then(response => response.json())
                .then(data => this.setState({dataApi: data}))
                .catch((error) => {
                    console.error('Error: ', error)
                }) 
        }
        console.log(this.state.dataApi)  
    }

    setDate(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div style={{width: '90%'}}>
                    <input
                        id="dateInput"
                        type='date'
                        onChange={this.setDate}
                        name='date'
                    />
                </div>
                <div className="d-flex justify-content-center mt-1">
                    <ApodDetails 
                    title={this.state.dataApi.title}
                    mediaType={this.state.dataApi.media_type}
                    videoUrl={this.state.dataApi.url}
                    src={this.state.dataApi.url}
                    hdurl={this.state.dataApi.hdurl}
                    description={this.state.dataApi.explanation}
                    copyright={this.state.dataApi.copyright}
                    date={this.state.dataApi.date}
                    />
                </div>
            </div>
        )
    }
}