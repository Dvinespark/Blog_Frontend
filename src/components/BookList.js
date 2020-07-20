import React, { Component } from 'react';

class BookList extends Component {
    
    render() { 
        return (  
            <div className="book-list">
                <ul>
                    <li>Poor man with rich heart</li>
                    <li> Heart still exists</li>
                    <li> What do you do with your life?</li>
                </ul>
            </div>
        );
    }
}
 
export default BookList;