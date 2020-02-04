import React, { Component } from 'react';
import JsonData from '../data.json';
import '../App.css';

const OverdueTasks = () => {
  return (
    <div className='wrapper-content'>
      <hr />
      <div className='main-div'>
        <h3 className='content-heading'>Overdue Tasks 08</h3>
        <div style={{ display: 'flex' }}>
          <div className='main-div-content'>
            <h3 className='title'>Company</h3>
            {JsonData.map(data => {
              return <p className='title'>{data.company}</p>;
            })}
          </div>
          <div className='main-div-content'>
            <h3 className='title'>Tasks</h3>
            {JsonData.map(data => {
              return <p className='title'>{data.task}</p>;
            })}
          </div>
          <div className='main-div-content'>
            <h3 className='title'>Status</h3>
            {JsonData.map(data => {
              return (
                <p
                  className='title'
                  style={
                    data.status === 'Overdue'
                      ? {
                          color: '#ff1a1a',
                          backgroundColor: '#ffcccc',
                          borderRadius: '3px',
                          textAlign: 'center'
                        }
                      : {
                          color: 'red',
                          backgroundColor: '#ffbf00',
                          borderRadius: '3px',
                          textAlign: 'center'
                        }
                  }
                >
                  {data.status}
                </p>
              );
            })}
          </div>
          <div>
            <h3 className='title'>Days</h3>
            {JsonData.map(data => {
              return (
                <p className='days-title'>
                  <span>-{data.days}</span>
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverdueTasks;
