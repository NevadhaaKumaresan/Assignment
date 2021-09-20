/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import {TaskComponent} from './TaskComponent';
import renderer from 'react-test-renderer';
import { taskReducer } from '../../Molecules/Reducer/TaskReducer';
import { StoreProvider } from '../../../store';


window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};

const initialState = {
  taskDatas: [],
  pendindCount: 0,
  completedCount: 0,
};

test('matches snapshot', () => {
  const taskDatas = [{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": true
  }];
  const taskData = () => {
    return taskDatas;
  }
  const tree = renderer.create(
    <StoreProvider initialState={initialState} reducer={taskReducer}>
  <TaskComponent taskDatas={taskDatas} taskData={taskData} />
  </StoreProvider>).toJSON();
  expect(tree).toMatchSnapshot();
})

test('renders the Todo component with props', () => {
  const taskDatas = [{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": true
  }]

  const taskData = () => {
    return taskDatas;
  }
  render(
  <StoreProvider initialState={initialState} reducer={taskReducer}><TaskComponent taskDatas={taskDatas} taskData={taskData}/></StoreProvider>);
});









