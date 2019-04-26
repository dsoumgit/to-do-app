import React, { Component } from 'react';
import styles from './content.css';
import { ListGroup } from 'react-bootstrap';

class Content extends Component {

    state = {
        isLoading: false,
        value: '',
        placeholder: 'Enter a task...',
        items: []
    }

    onChangeHandler = (event) => {
        // set the state 
        this.setState({
            value: event.target.value
        });
    } 

    onNewPost = () => {

        const newArray = this.state.items.slice(); 
        // check if value is empty 
        if (this.state.value !== "") {

            // do not add to the array 
            newArray.push(this.state.value);

            this.setState({
                value: '',  // clear input field 
                items: newArray
            })
        } else {

        }
    }

    render() {

        var results = this.state.items;

        return (
            <div className={styles.container}>
                {results.map((item, i) => {
                    return (
                        <ListGroup key={i}>
                            <ListGroup.Item>{i + 1}. {item}</ListGroup.Item>
                        </ListGroup>
                    )
                })}

                <input type="text" maxLength="100" value={this.state.value} placeholder={this.state.placeholder} onChange={ this.onChangeHandler } />
                
                <button type="submit" onClick={this.onNewPost}>Add</button>
            </div>
        )
    }
}

export default Content; 