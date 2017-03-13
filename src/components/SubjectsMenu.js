// src/components/SubjectsMenu.js
import React from 'react';
import { Link } from 'react-router';

export default class SubjectsMenu extends React.Component {
  render() {
    return (
      <nav className="subjects-menu">
        {this.props.subjects.map(menuSubject => {
          return <Link key={menuSubject.id} to={`/subject/${menuSubject.id}`} activeClassName="active">
            {menuSubject.name}
          </Link>;
        })}
      </nav>
    );
  }
}
