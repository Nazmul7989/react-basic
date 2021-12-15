import React, {Component} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'

class HttpRequest extends Component {

    constructor() {
        super();

        this.state = {
            posts: [],
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            let post = response.data.slice(0,10)
            this.setState({posts: post})
        }).catch((error)=>{
            console.log(error)
        })
    }


    render() {
        const post = this.state.posts.map((post)=>{
            return (
                <tr key={post.id}>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                    <td>
                        <button className="btn btn-success">Edit</button>
                        <button className="btn btn-danger ml-1">Delete</button>
                    </td>
                </tr>
            )
        })
        return (
            <div className="container mt-4">
                <div className="row mt-5">
                    <div className="col-12">
                        <h4>Posts Description</h4>
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th style={{width: '200px'}}>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {post}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default HttpRequest;