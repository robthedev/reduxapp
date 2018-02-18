import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <div>
                    <li 
                        key={book.title}
                        onClick={() => this.props.selectBook(book) }
                        className="list-group-item">
                        {book.title}
                    </li>
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
function mapDispatchToProps(dispatch) {
    //when select book is called, result should be passed to all reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

//promote booklist o container, need access to dispatch selectbook, available as props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);