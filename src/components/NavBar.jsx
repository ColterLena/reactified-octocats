import React, { Component } from 'react'

export class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="logo-list-item">
            <a href={this.props.logoLink}>
              <img src={this.props.logoPhotoLink} alt={this.props.altText} />
            </a>
          </li>
          <li>
            <a href={this.props.octodexLink}>Octodex</a>
          </li>
          <li>
            <a href={this.props.homeLink}>Home</a>
          </li>
          <li className="faq-list-item">
            <a href={this.props.FAQLink}>FAQ</a>
          </li>
          <li className="follow-us-on-twitter">
            <a href={this.props.githubTwitterLink}>Follow us on Twitter</a>
          </li>
          <li>
            <a href={this.props.mainGithubLink}>Back to Github.com</a>
          </li>
        </ul>
      </nav>
    )
  }
}
