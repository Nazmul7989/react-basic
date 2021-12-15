import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import axios from "axios";

class ReactTableExample extends Component {
    constructor() {
        super();

        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            console.log(response.data)
            let post = response.data
            this.setState({posts: post})
        }).catch((error)=>{
            console.log(error)
        })
    }

    render() {
        const postData = this.state.posts
        const cols=[{Header: "Title", accessor: "title"},{Header: "Description", accessor: "body"}]

        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <ReactTable
                            data={postData}
                            columns={cols}
                            defaultPageSize={5}
                            pageSizeOptions={[5,10,20,40]}

                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ReactTableExample;