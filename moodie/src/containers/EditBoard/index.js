import React, { Component } from 'react';
import EditMenu from '../../components/EditMenu/index';

class EditBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

        this.editMenuHandler = this.editMenuHandler.bind(this);
    }

    editMenuHandler(id) {
        console.log(id);
    }

    render() { 
        return (
            <EditMenu clickHandler={this.editMenuHandler} />
        );
    }
}
 
export default EditBoard;