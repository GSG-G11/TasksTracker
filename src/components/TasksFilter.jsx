/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

function TasksFilter({ selected, handleChange }) {
  return (
    <div style={{ margin: '7px auto', width: 'fit-content' }}>
      <label style={{ margin: '0 5px' }} className={selected === 'all' ? 'btn btn-primary' : 'btn btn-secondary'} htmlFor="all" onClick={(e) => { e.target = e.target.firstElementChild; handleChange(e); }}>
        All
        <input type="radio" onChange={handleChange} checked={selected === 'all'} value="all" name="selected" id="all" style={{ display: 'none' }} />
      </label>
      <label style={{ margin: '0 5px' }} className={selected === 'done' ? 'btn btn-primary' : 'btn btn-secondary'} htmlFor="done" onClick={(e) => { e.target = e.target.firstElementChild; handleChange(e); }}>
        Done
        <input type="radio" onChange={handleChange} checked={selected === 'done'} value="done" name="selected" id="done" style={{ display: 'none' }} />
      </label>
      <label style={{ margin: '0 5px' }} className={selected === 'notdone' ? 'btn btn-primary' : 'btn btn-secondary'} htmlFor="notdone" onClick={(e) => { e.target = e.target.firstElementChild; handleChange(e); }}>
        Not Done
        <input type="radio" onChange={handleChange} checked={selected === 'notdone'} value="notdone" name="selected" id="notdone" style={{ display: 'none' }} />
      </label>
    </div>
  );
}

TasksFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default TasksFilter;
