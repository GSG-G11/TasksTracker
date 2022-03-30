import React from 'react';
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

export default CardsContainer;
