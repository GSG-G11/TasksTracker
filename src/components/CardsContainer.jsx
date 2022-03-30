import React from 'react';
import PropTypes from 'prop-types';
import TodoCard from './TodoCard';

function CardsContainer({
  todoListArr, handleEdit, handleDelete, handleDone,
}) {
  return (
    <div className="task-container">
      { todoListArr.map(({
        id, taskName, taskDescription, isDone,
      }, index) => (
        <TodoCard
          id={id}
          taskName={taskName}
          taskDescription={taskDescription}
          isDone={isDone}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleDone={handleDone}
          index={index}
          key={id}
        />
      ))}
    </div>
  );
}

CardsContainer.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleDone: PropTypes.func.isRequired,
  todoListArr: PropTypes.arrayOf({
    id: PropTypes.string,
    isDone: PropTypes.bool,
    taskName: PropTypes.string,
    taskDescription: PropTypes.string,
  }).isRequired,
};

export default CardsContainer;
