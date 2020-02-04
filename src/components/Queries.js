import React from 'react';
import { Grid } from '@material-ui/core';
import JsonData from '../data.json';
import '../App.css';

const Queries = () => {
  return (
    <div className='wrapper-queries-content'>
      <hr />

      <div className='main-div'>
        <div>
          <p>
            <span className='updates'>Queries</span>
            <span className='updated-content'>
              <a href=''>Employee</a>
              <a href=''>Employer</a>
            </span>
          </p>
        </div>
        <div style={{ display: 'flex' }}>
          <div className='queries-content-list'>
            <h3 className='title'>Company</h3>
            {JsonData.map(data => {
              return <p className='title'>{data.company}</p>;
            })}
          </div>
          <div className='queries-content-list'>
            <h3 className='title'>Employer Queries</h3>
            {JsonData.map(data => {
              return <p className='title'>{data.empQueries}</p>;
            })}
          </div>
          <div style={{ display: 'flex', float: 'right' }}>
            <div className='queries-content-tat'>
              <h3 className='title'>TAT 0 - 8</h3>
              {JsonData.map(data => {
                return <p className='title'>{data.tat0}</p>;
              })}
            </div>
            <div className='queries-content-tat'>
              <h3 className='title'>TAT 8 - 16 </h3>
              {JsonData.map(data => {
                return <p className='title'>{data.tat8}</p>;
              })}
            </div>
            <div className='queries-content-tat'>
              <h3 className='title'>TAT 16 - 24</h3>
              {JsonData.map(data => {
                return <p className='title'>{data.tat16}</p>;
              })}
            </div>
            <div>
              <h3 className='title'>TAT 24+</h3>
              {JsonData.map(data => {
                return <p className='title'>{data.tat24}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Queries;
