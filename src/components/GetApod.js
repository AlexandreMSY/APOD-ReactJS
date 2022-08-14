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
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.date !== this.state.date){
            fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${this.state.date}&`)
                .then(response => response.json())
                .then(data => this.setState({dataApi: data}))
        }
    }

    setDate(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div>
                <input 
                    type='date'
                    onChange={this.setDate}
                    name='date'
                />
                <ApodDetails 
                title={this.state.dataApi.title}
                src={this.state.dataApi.url}
                hdurl={this.state.dataApi.hdurl}
                description={this.state.dataApi.explanation}
                copyright={this.state.dataApi.copyright}
                date={this.state.dataApi.date}
                />
            </div>
        )
    }
}