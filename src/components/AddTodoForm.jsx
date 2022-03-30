import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

function AddTodoForm({
  handleChange, handleSubmit, toggle, taskName, taskDescription, modal,
}) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Task</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="form-group">
              <label htmlFor="taskName">
                Task Name
                <input type="text" onChange={handleChange} name="taskName" id="taskName" value={taskName} required className="form-control" />
              </label>
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="taskDescription">
                Description
                <textarea rows="5" onChange={handleChange} name="taskDescription" id="taskDescription" value={taskDescription} required className="form-control" />
              </label>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>Create</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddTodoForm;
