import React,{Component} from 'react'

class StateClass extends Component{

    constructor() {
        super();

        // var obj = {
        //     name: 'Md Nazmul Hasan',
        //     address: 'Jhenaidah',
        //     age: 25,
        // }
        // this.state = obj

        this.state = {
            name: 'Md Nazmul Hasan',
            address: 'Jhenaidah',
            age: 25,
            mobile: ['Symphony','Samsung','Nokia','Xiaomi'],
            education: {
                BBA: 'University of Rajshahi',
                HSC: 'Govt Lalon Shah College',
                SSC: 'Narauankandi High School'
            }


        }

    }


    render() {
        return(
            <div>
                <h3>Name: { this.state.name }</h3>
                <h3>Age: { this.state.age }</h3>
                <h3>Address: { this.state.address }</h3>
                <h3>Mobile: { this.state.mobile[3] }</h3>
                <h3>Education(BBA) from:  { this.state.education.BBA }</h3>
            </div>
        )
    }

}

export default StateClass