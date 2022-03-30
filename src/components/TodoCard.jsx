/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

function TodoCard({
  id, taskName, taskDescription, isDone, handleEdit, handleDelete, index, handleDone,
}) {
  const colors = [
    {
      primaryColor: '#5D93E1',
      secondaryColor: '#ECF3FC',
    },
    {
      primaryColor: '#F9D288',
      secondaryColor: '#FEFAF1',
    },
    {
      primaryColor: '#5DC250',
      secondaryColor: '#F2FAF1',
    },
    {
      primaryColor: '#F48687',
      secondaryColor: '#FDF1F1',
    },
    {
      primaryColor: '#B964F7',
      secondaryColor: '#F3F0FD',
    },
  ];
  return (
    <div className="card-wrapper mr-5">
      <div className="card-top" style={{ backgroundColor: colors[index % 5].primaryColor }} />
      <div className="task-holder">
        <span className={isDone ? 'card-header done' : 'card-header'} style={{ backgroundColor: colors[index % 5].secondaryColor, borderRadius: '10px' }}>{taskName}</span>
        <p className={isDone ? 'mt-3 done' : 'mt-3'}>{taskDescription}</p>

        <div style={{
          position: 'absolute', right: '20px', bottom: '20px',
        }}
        >
          <i className={isDone ? 'fa-solid fa-square-check' : 'fa-regular fa-square-check'} style={{ color: colors[index % 5].primaryColor, cursor: 'pointer', padding: '5px' }} onClick={() => handleDone(id)} />
          <i className="far fa-edit mr-3" style={{ color: colors[index % 5].primaryColor, cursor: 'pointer', padding: '5px' }} onClick={() => handleEdit(id)} />
          <i className="fas fa-trash-alt" style={{ color: colors[index % 5].primaryColor, cursor: 'pointer', padding: '5px' }} onClick={() => handleDelete(id)} />
        </div>
      </div>
    </div>
  );
}

TodoCard.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleDone: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  taskName: PropTypes.string.isRequired,
  taskDescription: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default TodoCard;
