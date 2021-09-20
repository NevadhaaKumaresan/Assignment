/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */
 import {taskReducer} from './TaskReducer';
 
 
 
 describe('Task Reducer', () => {
   const initialState = {
     taskDatas: [],
     completedcount: 0,
     pendingCount: 0,
   };
 
   test('returns the initial state when an action type is not passed', () => {
     const value = taskReducer(undefined, {});
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
     const Value = taskReducer(initialState, setData);
   
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
       completedcount: 1,
       pendingCount: 1,
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
     const Value = taskReducer(initialState, setData);
   
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
       completedcount: 2,
       pendingCount: 0,
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
     const Value = taskReducer(initialState, setData);
     const orgValue= {
        taskDatas: [
            {
              "userId": 1,
              "id": 2,
              "title": "quis ut nam facilis et officia qui",
              "completed": true
            }
          ],
          completedcount: 1,
         pendingCount: 0,
     }
     expect(Value).toEqual(orgValue);
   });
 });
 
 
 
 
 
 
 