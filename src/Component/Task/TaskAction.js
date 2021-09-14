import axios from 'axios';

export function loadData() {
    return function(dispatch) {
      return axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(({ data }) => {
        dispatch(setData(data));
      });
    };
  }

export const setData = (data) => {
  return{
    type:"DATA",
    data
   }
}

export const moveToComplete = (originalData, dataComplete) => {
return{
  type:"MOVETOCOMPLETE",
  originalData,
  dataComplete
 }
}

export const deleteTask = (originalData, deleteData) => {
return{
  type:"DELETETASK",
  originalData,
  deleteData
 }
}
