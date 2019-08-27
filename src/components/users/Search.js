import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: '',
  };
  onSubmit = event => {
    event.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter name, surname or nickname', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type="submit" value="Search" className="btn btn-dark btn-block" />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Reset
          </button>
        )}
      </div>
    );
  }
}

export default Search;
