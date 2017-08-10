import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook }  from '../actions/index';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';


class BookDetail extends Component {

  render() {
  if(!this.props.book) {
    return (
      <div>Click on a book to see more details.</div>
    )
  }
  return (
    <div className="col-md-4 panel-heading">
      <h3 className="">{this.props.book.title}</h3>
      <h4>Details</h4>
      <div>{this.props.book.pages} pages</div>
      <div>Author: {this.props.book.author}</div>
      <div>Price: ${this.props.book.price} USD</div>
      <div>Published: {this.props.book.published_date} by {this.props.book.publisher}</div>
      <div>Genre: {this.props.book.category.join(", ")} </div>
    </div>
  );
}
}


//activeBook reducer creates activeBook state.
function mapStateToProps(state) {
  return {
    book: state.activeBook,
  };
}


export default connect(mapStateToProps)(BookDetail);
