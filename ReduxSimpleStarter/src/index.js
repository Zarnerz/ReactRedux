import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyC3NGcxFBdhW9lb3sVz2i8ROQsXBtx2znQ";

// Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

// Take this component's HTMl and put in on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
