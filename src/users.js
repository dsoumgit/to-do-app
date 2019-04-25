import React from 'react';

class Users extends React.Component {

    render() {
        console.log(this.props); 
        const params = this.props.match.params.id; 
        return (
            <div>
                <h1>Users: {params}</h1>    
            </div>
        )
    }
}

export default Users; 