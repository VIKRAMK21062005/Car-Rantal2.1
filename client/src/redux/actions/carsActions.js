import { message } from 'antd';
import axios from 'axios';

export const getAllCars=()=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
        const response = await axios.get('/api/cars/getallcars')
        dispatch({type: 'GET_ALL_CARS', payload:response.data})
        dispatch({type: 'LOADING' , payload:false})
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }

}

// export const addCar=(reqObj)=>async dispatch=>{

//     dispatch({type: 'LOADING' , payload:true})

//     try {
//          await axios.post('https://car-rental-xi-eight.vercel.app/api/cars/addcar' , reqObj)
       
//          dispatch({type: 'LOADING' , payload:false})
//          message.success('New car added successfully')
//          setTimeout(() => {
//             window.location.href='/admin'
//          }, 500);
//     } catch (error) {
//         console.log(error)
//         dispatch({type: 'LOADING' , payload:false})
//     }
      

// }
export const addCar = (reqObj) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true });

    try {
        await axios.post('/api/cars/addcar', reqObj);
        dispatch({ type: 'LOADING', payload: false });
        message.success('New car added successfully');

        // optional: redirect to admin or home
        setTimeout(() => {
            window.location.href = '/admin';
        }, 500);
    } catch (error) {
        dispatch({ type: 'LOADING', payload: false });
        message.error('Something went wrong');
        console.log('Add Car Error:', error);
    }
};

// export const editCar=(reqObj)=>async dispatch=>{

//     dispatch({type: 'LOADING' , payload:true})

//     try {
//          await axios.post('https://car-rental-xi-eight.vercel.app/api/cars/editcar' , reqObj)
       
//          dispatch({type: 'LOADING' , payload:false})
//          message.success('Car details updated successfully')
//          setTimeout(() => {
//             window.location.href='/admin'
//          }, 500);
//     } catch (error) {
//         console.log(error)
//         dispatch({type: 'LOADING' , payload:false})
//     }
      

// }

// export const deleteCar=(reqObj)=>async dispatch=>{

//     dispatch({type: 'LOADING' , payload:true})

//     try {
//          await axios.post('https://car-rental-xi-eight.vercel.app/api/cars/deletecar' , reqObj)
       
//          dispatch({type: 'LOADING' , payload:false})
//          message.success('Car deleted successfully')
//          setTimeout(() => {
//             window.location.reload()
//          }, 500);
//     } catch (error) {
//         console.log(error)
//         dispatch({type: 'LOADING' , payload:false})
//     }
      

// }

export const editCar = (car) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true });
    try {
      await axios.post('/api/cars/editcar', car); // make sure car contains _id
      dispatch({ type: 'LOADING', payload: false });
      message.success('Car updated successfully');
      window.location.href = '/admin';
    } catch (error) {
      console.log(error);
      message.error('Something went wrong');
      dispatch({ type: 'LOADING', payload: false });
    }
  };
  
  export const deleteCar = ({ carid }) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true });
    try {
      await axios.post('/api/cars/deletecar', { carid });
      dispatch({ type: 'LOADING', payload: false });
      message.success('Car deleted successfully');
      window.location.reload();
    } catch (error) {
      console.log(error);
      message.error('Something went wrong');
      dispatch({ type: 'LOADING', payload: false });
    }
  };
  