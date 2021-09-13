import { connect } from 'react-redux';
import { TaskComponent } from './TaskComponent';
import {loadData, moveToComplete, deleteTask} from './TaskAction';

const mapStateToProps = state => {
  return {
    taskDatas: state.taskDatas,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    taskData: () => dispatch(loadData()),
    moveToComplete: (orgArray, data) => dispatch(moveToComplete(orgArray, data)),
    deleteTask: (orgArray, data) => dispatch(deleteTask(orgArray, data)),
  }
};
export const TaskContainer = connect(mapStateToProps, mapDispatchToProps)(TaskComponent);