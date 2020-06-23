import React, { Component } from 'react'

export class Octocat extends React.Component {
  render() {
    return (
      <div>
        <a href={this.props.mainLink}>
          <img
            className="primary-section-image"
            src={this.props.imageLink}
            alt={this.props.altText}
          />
        </a>
      </div>
    )
  }
}
