/* eslint-disable no-undef */

import { moveToComplete, deleteTask } from './TaskAction';

describe('Task action creators', () => {
  test('moveToComplete', () => {
    const data = [
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
    const moveToCompleteData = {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    }
    const expectedAction = { type: 'MOVETOCOMPLETE', originalData: data, dataComplete: moveToCompleteData };
    expect(moveToComplete(data, moveToCompleteData)).toEqual(expectedAction);
  });

  test('delete task', () => {
    const data = [
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
    const deleteTaskData = {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    }
    const expectedAction = { type: 'DELETETASK', originalData: data, deleteData: deleteTaskData };
    expect(deleteTask(data, deleteTaskData)).toEqual(expectedAction);
  })

});