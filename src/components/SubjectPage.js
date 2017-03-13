// src/components/SubjectPage.js

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import SubjectsMenu from './SubjectsMenu';
import Medal from './Medal';
import Flag from './Flag';
import subjects from '../data/subjects';

export default class SubjectPage extends React.Component{
  render(){
    const id = this.props.params.id;
    const subject = subjects.filter((subject) => subject.id === id)[0];
    if(!subject){
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/${subject.cover})`};
    return (
      <div className="subject-full">
        <subjectsMenu subjects={subjects}/>
        <div className="subject">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${subject.image}`}/>
            <h2 className="name">{subject.name}</h2>
          </div>
          <section className="description">
          Olympic medalist from <strong><Flag code={subject.country} showName="true"/></strong>,
         born in {subject.birth} (Find out more on <a href={subject.link} target="_blank">Wikipedia</a>).
         </section>
         <section className="medals">
           <p>Winner of <strong>{subject.medals.length}</strong> medals:</p>
           <ul>{
             subject.medals.map((medal, i) => <Medal key={i} {...medal}/>)
           }</ul>
         </section>
       </div>
       <div className="navigateBack">
         <Link to="/">« Back to the index</Link>
       </div>
     </div>
   );
  }
}
