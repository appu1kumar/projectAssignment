import React from 'react';
import '../App.css';
import JsonData from '../data.json';

const Project = () => {
  return (
    <div className='wrapper-content'>
      <hr />
      <div className='main-div'>
        <h3 className='content-heading'>Projects 09</h3>
        <div style={{ display: 'flex' }}>
          <div className='project-content'>
            <h3 className='title'>Projects</h3>
            {JsonData.map(data => {
              return <p className='title'>{data.projects}</p>;
            })}
          </div>
          <div className='project-content'>
            <h3 className='title'>State Date & Date</h3>
            {JsonData.map(data => {
              return <p className='title'>{data.startEndDate}</p>;
            })}
          </div>
          <div>
            <h3 className='title'>Due</h3>
            {JsonData.map(data => {
              return (
                <p className='days-title'>
                  <span>+{data.due}</span>
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
