// src/components/SubjectPreview.js
import React from 'react';
import { Link } from 'react-router';

export default class SubjectPreview extends React.Component {
  render() {
    return (
      <Link to={`/subject/${this.props.id}`}>
        <div className="subject-preview">
          <img src={`img/${this.props.image}`}/>
          <h2 className="name">{this.props.name}</h2>
          <span className="medals-count"><img src="/img/medal.png"/> {this.props.medals.length}</span>
        </div>
      </Link>
    );
  }
}
