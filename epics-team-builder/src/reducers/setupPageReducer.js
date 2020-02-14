import { combineReducers } from 'redux';

const students = (state = [], { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const projects = (state = [], { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const projectByStudentId = (state = {}, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default combineReducers({
  students,
  projects,
  projectByStudentId
});
