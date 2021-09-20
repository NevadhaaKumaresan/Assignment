/* eslint-disable no-case-declarations */
export const initialState = {
    taskDatas: [],
    pendingCount:0,
    completedcount:0,
    }

export const taskReducer = function (state = initialState, action) {
    switch (action.type) {
      case "DATA":
        return { 
            ...state, 
            taskDatas: action.data,
            pendingCount: action.data.filter( data => data.completed === false).length,
            completedcount: action.data.filter( data => data.completed === true).length,
         }
      case "MOVETOCOMPLETE" :
        let copyOfOriginalArray=[...action.originalData];
        let objIndex = copyOfOriginalArray.findIndex((obj => obj.id === action.dataComplete.id));
        copyOfOriginalArray[objIndex].completed = true;
        return { 
          ...state, 
          taskDatas: copyOfOriginalArray,
          pendingCount: copyOfOriginalArray.filter( data => data.completed === false).length,
          completedcount: copyOfOriginalArray.filter( data => data.completed === true).length,
       }

      case "DELETETASK":
        let deleteArr=[...action.originalData];
        let deleteIndex = deleteArr.findIndex((obj => obj.id === action.deleteData.id));
        deleteArr.splice(deleteIndex, 1);
        return { 
          ...state, 
          taskDatas: deleteArr,
          pendingCount: deleteArr.filter( data => data.completed === false).length,
            completedcount: deleteArr.filter( data => data.completed === true).length,
       }
      default:
        return state;
    }
  };
  