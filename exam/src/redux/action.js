export const actionTypes = {
  // key value pair
  ADD_USER_REQUEST:"ADD_USER_REQUEST",
  ADD_USER_SUCCESS:"ADD_USER_SUCCESS",
  ADD_USER_FAILURE:"ADD_USER_FAILURE"
};
// do not change names
export const addUserRequest = () => {
  dispatch({
        type:ADD_USER_REQUEST
    });
   
  } 
  
// do not change names, and arguments
export const addUserSuccess = (data) => {
  let d={
    name:"",
    id:"",
    title:""
  }
   dispatch({
    type:ADD_USER_SUCCESS,
    payload:d,
});
};
// do not change names
export const addUserFailure = () => {
  dispatch({
    type:ADD_USER_FAILURE
});
};
