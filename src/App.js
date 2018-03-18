import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {sampleText} from './sampleText';
import marked from 'marked';

class App extends React.Component {

  state={
    text : sampleText
  };

  editText = (event) => {
    const text = event.target.value;
    this.setState({ text }); //update the state text
  };

  renderText= (text) => {
    const renderText = marked(text, {sanitize: true});
    return { __html: renderText };
  }


  render() {
    return (
    <div className="container">
      <h1>Hello</h1>
      <div className="row">
        <div className="col-sm-6">
          <textarea value= {this.state.text} rows="35" className="form-control" onChange={(e) => this.editText(e)}> </textarea> 
        </div>
        <div className="col-sm-6">
          <div dangerouslySetInnerHTML={this.renderText(this.state.text)}/>
        </div>
      </div>
    </div>
      
    );
  }
}


export default App;
