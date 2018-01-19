import React from "react";

import books from "../mocks/books";
import filters from "../mocks/filters";

import "./index.css";

class App extends React.Component {
  state = {
    books,
    filters,
    selected: "All"
  };

  onSelectTab = e => {
    this.setState({ selected: e.target.dataset.tabid });
  };

  render() {
    const { books, filters, selected } = this.state;

    const filteredBooks =
      selected === "All"
        ? books
        : books.filter(book => book.category === selected);

    return (
      <section>
        <h2>Books</h2>

        <ul>
          {filters.map(tab => (
            <li
              className={tab === selected ? "active" : ""}
              key={tab}
              data-tabid={tab}
              onClick={this.onSelectTab}
            >
              {tab}
            </li>
          ))}
        </ul>

        <div className="book-list">
          {filteredBooks.map(book => (
            <div className="book" key={book.id}>
              <img src={book.cover} alt={book.title} />
              <h4>{book.title}</h4>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default App;
