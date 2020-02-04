import React from "react";

class SearchBar extends React.Component {
  state = {
    term: ""
  };
  anu = () => {
      console.log(this.state.term)
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={(e)=> {e.preventDefault(); console.log(this.state.term)}}>
          <div className="ui form">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value   })}
            />
          </div>
        </form>
        <div>{this.state.term}</div>
      </div>
    );
  }
}

export default SearchBar;
