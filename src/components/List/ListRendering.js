import React, {Component} from 'react';

class ListRendering extends Component {

    render() {
        const countries = ['Bangladesh','India','Pakisthan','Chaina','America','Canada']
        const countryName = countries.map((country)=>{
            return <li>{country}</li>
        })
        return (
            <div>
                <ol>
                    {countryName}
                </ol>
            </div>
        );
    }
}

export default ListRendering;