/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import {TaskContainer} from '../Component/Task/TaskContainer';
import {TaskComponent} from '../Component/Task/TaskComponent';
import {reducer} from '../Component/Task/TaskReducer';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';


window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};

test('matches snapshot', () => {
  // const middlewares = [thunk];
  // const initialState = {
  //           taskDatas: []
  //       };
  // const mockStore = configureMockStore(middlewares)(initialState);
  
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
  const tree = renderer.create(<TaskComponent taskDatas={taskDatas} taskData={taskData}/>).toJSON();
  expect(tree).toMatchSnapshot();
})

test('renders the Todo component with props', () => {
  const middlewares = [thunk];
  const initialState = {
            taskDatas: []
        };
  const mockStore = configureMockStore(middlewares)(initialState);

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
  render(<Provider store={mockStore}><TaskContainer taskDatas={taskDatas} taskData={taskData}/></Provider>);
});


// For reducer//

describe('reducer', () => {
  const initialState = {
    taskDatas: [],
  };

  test('returns the initial state when an action type is not passed', () => {
    const value = reducer(undefined, {});
    expect(value).toEqual(initialState);
  });
});

describe('Task Reducer', () => {
  const initialState = {
    taskDatas: [],
  };

  test('returns the initial state when an action type is not passed', () => {
    const value = reducer(undefined, {});
    expect(value).toEqual(initialState);
  });

  test("Load DATA", () => {
    const setData = {
      type: "DATA",
      data: [
        {
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
        }
      ]
    };
    const Value = reducer(initialState, setData);
  
    expect(Value).toEqual({
      taskDatas: [
        {
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
        }
      ],
    });
  });

  test("Move task to Completed task", () => {
    const setData = {
      type: "MOVETOCOMPLETE",
      originalData:[
        {
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
        }
      ],
      dataComplete: 
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        }
      
    };
    const Value = reducer(initialState, setData);
  
    expect(Value).toEqual({
      taskDatas: [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": true
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": true
        }
      ],
    });
  });

  test("Delete the task", () => {
    const setData = {
      type: "DELETETASK",
      originalData:[
        {
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
        }
      ],
      deleteData: 
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        }
      
    };
    const Value = reducer(initialState, setData);
  
    expect(Value).toEqual({
      taskDatas: [
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": true
        }
      ],
    });
  });
});






