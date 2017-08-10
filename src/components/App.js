import React, {Component} from 'react';
import '../styles/App.css';

import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

class App extends Component {
    render() {
      return (
        <div className="container">
          <div className="jumbotron">
            <h1 className="header">Redux Booklist App</h1>            
          </div>
          <BookList />
          <BookDetail />
        </div>
      );
    }
}
export default App;
