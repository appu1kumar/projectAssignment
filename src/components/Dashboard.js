import React from 'react';
import JsonData from '../data.json';
import OverdueTasks from './OverdueTasks';
import UpcomingTask from './UpcomingTask';
import Projects from './Projects';
import Queries from './Queries';
import Updates from './Updates';

const Dashboard = () => {
  return (
    <div className='container'>
      <div className='content'>
        <div className='wrap-content1'>
          <OverdueTasks />
        </div>
        <div className='wrap-content2'>
          <UpcomingTask />
        </div>
        <div className='wrap-content3'>
          <Projects />
        </div>
      </div>
      <div className='queries-content'>
        <div className='queries-wrap-content1'>
          <Queries />
        </div>
        <div className='queries-wrap-content2'>
          <Updates />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
