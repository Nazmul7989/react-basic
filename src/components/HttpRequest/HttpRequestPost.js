import React, {Component} from 'react';
import axios from "axios";

class HttpRequestPost extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
            description: '',
        }
    }

    onChangeHandler = (event)=>{
        let inputName = event.target.name;
        let inputValue = event.target.value;
        this.setState({[inputName]: inputValue})
    }
    onClickHandler = (event)=>{
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state).then((response)=>{
            console.log(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }

    render() {
        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header">
                                <h3>Send Data</h3>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <p>Post title: {this.state.title}</p>
                                        <label htmlFor="title">Title</label>
                                        <input onChange={this.onChangeHandler} placeholder="Post Title" id="title" name="title" type="text" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <p>Post title: {this.state.description}</p>
                                        <label htmlFor="description">Description</label>
                                        <textarea onChange={this.onChangeHandler} placeholder="Post Description" id="description" name="description" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <input onClick={this.onClickHandler} className="btn btn-success" type="submit" value="Send"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HttpRequestPost;