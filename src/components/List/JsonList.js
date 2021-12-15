import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class JsonList extends Component {

    render() {

        let students = [
            {
                name: 'Md Nazmul Hasan',
                address: 'Jhenaidah'
            },
            {
                name: 'Md Mizanur Rahman',
                address: 'Natore'
            },
            {
                name: 'Faisal',
                address: 'Rajshahi'
            },
        ];

        let student = students.map((student)=>{
            return (
                <tr>
                    <td>{student.name}</td>
                    <td>{student.address}</td>
                    <td>
                        <button className="btn btn-success">Edit</button>
                        <button className="btn btn-danger ml-1">Delete</button>
                    </td>
                </tr>

            )
        })

        return (
            <div className="container mt-4">
                <h4>Students Information</h4>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {student}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default JsonList;