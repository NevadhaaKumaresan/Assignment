const initialState = {
taskDatas: [],
}

export const reducer = function (state = initialState, action) {
    switch (action.type) {
      case "DATA":
        return { 
            ...state, 
            taskDatas: action.data,
         }
      case "MOVETOCOMPLETE" :
        let copyOfOriginalArray=[...action.originalData];
        let objIndex = copyOfOriginalArray.findIndex((obj => obj.id === action.dataComplete.id));
        copyOfOriginalArray[objIndex].completed = true;
        return { 
          ...state, 
          taskDatas: copyOfOriginalArray,
       }

      case "DELETETASK":
        let deleteArr=[...action.originalData];
        let deleteIndex = deleteArr.findIndex((obj => obj.id === action.deleteData.id));
        deleteArr.splice(deleteIndex, 1);
        return { 
          ...state, 
          taskDatas: deleteArr,
       }
      default:
        return state;
    }
  };