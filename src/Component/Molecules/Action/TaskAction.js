import axios from 'axios';

// export const loadData = () => {
//     return (dispatch) => {
//        axios.get("https://jsonplaceholder.typicode.com/todos")
//         .then(({ data }) => {
//         dispatch(setData(data));
//       });
//     };
//   }


  export const loadData = async dispatch => {
    // do fetch
    await axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then(({ data }) => {
        dispatch(setData(data));
      })
  };



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
