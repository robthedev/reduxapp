import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionsCreators} from 'redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <div>
                    <li className="list-group-item">{book.title}</li>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <ul className="list-group col-sm-4">
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

//anything returned from this will be props on booklist container
function mapDispatchToProps() {
    //when select book is called, result should be passed to all reducers
    return bindActionsCreators({selectBook: selectBook}, dispatch);
}

//promote booklist o container, need access to dispatch selectbook, available as props
export default connect(mapStateToProps, mapStateToProps)(BookList);