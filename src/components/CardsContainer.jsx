import React from 'react';
import TodoCard from './TodoCard';

function CardsContainer({ todoListArr, handleEdit, handleDelete }) {
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
          index={index}
        />
      ))}
    </div>
  );
}

export default CardsContainer;
