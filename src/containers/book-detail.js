import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render(){
        return (
            <div>asdfasf</div>
        );
    }
}

//maps app state to props of component
function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);