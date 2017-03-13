// src/components/IndexPage.js
import React from 'react';
import SubjectPreview from './SubjectPreview';
import subjects from '../data/subjects';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="subjects-selector">
          {subjects.map(subjectData => <SubjectPreview key={subjectData.id} {...subjectData} />)}
        </div>
      </div>
    );
  }
}
