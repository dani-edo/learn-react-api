import React from "react";
import axios from 'axios'
import SearchBar from "./SearchBar";

class App extends React.Component {
  async onSearchSubmit(term) {
    console.log('sumbited!')
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      },
      headers: {
        Authorization: 'Client-ID 78e47bffdee0c00cca66e1e3768f02f829fbf1bb16b3a4ddd5b7502953249963'
      }
    })
    // .then((response)=>{
    //   console.log(response.data.results)
    // })
    console.log(response)
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "100px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
