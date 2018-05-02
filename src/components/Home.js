import React, {Component} from 'react';

export class Home extends Component {
  render() {
    const {name} = this.props;
    return (
      <div className="home-content">
        <h3>home</h3>
      </div>
    );
  }
}
