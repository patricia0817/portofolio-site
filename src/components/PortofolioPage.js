import React from 'react';
import { Link } from 'react-router-dom';

const PortofolioPage = () => (
  <div>
    <h1>My Work</h1>
    <div>Checkout the following things I've done: </div>
    <Link to='/portofolio/1'>Item one</Link>
    <Link to='/portofolio/2'>Item Two</Link>
  </div>
);

export default PortofolioPage;
