import React from 'react';

function Header({ toggle }) {
  return (
    <div className="header text-center">
      <div className="header-container">
        <h1 style={{ marginBottom: '40px' }}>TasksTracker</h1>
        <button className="btn btn-primary" type="button" onClick={toggle}>Add Task</button>
      </div>
    </div>
  );
}

export default Header;
