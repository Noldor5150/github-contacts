import React, { Component } from 'react';

export class Navbar extends Component {
  static defaultProps = {
    title: 'Github Contacts',
    icon: 'fab fa-github-alt',
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i class={this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
