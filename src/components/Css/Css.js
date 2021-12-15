import React, {Component} from 'react';
import styles from '../../Custom.module.css'
// import '../../Custom.scss'

class Css extends Component {
    render() {

        const styleObject = {
            color: 'white',
            backgroundColor: '#333324',
            margin: '50px',
            padding: '30px',
        }
        return (
            <div>
                <h1 style={{color: 'white',backgroundColor: 'green',margin: '50px',padding: '30px'}}>Hello Inline Css Style</h1>
                <h1 style={styleObject}>Hello Style Object</h1>
                <h1 className={styles.myStyle}>Hello Style from Module css</h1>
                <h1 className="myStyle">Hello Style from App.css </h1>
                {/*<h1 className="textStyle">Hello Style from Sass file </h1>*/}
            </div>
        );
    }
}

export default Css;