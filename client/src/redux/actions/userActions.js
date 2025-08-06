import axios from "axios";
import {message} from 'antd'

export const userLogin = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    // Localhost with proxy (correct version for local dev)
    const response = await axios.post("/api/users/login", reqObj);

    localStorage.setItem("user", JSON.stringify(response.data));
    message.success("Login success");
    dispatch({ type: "LOADING", payload: false });

    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  } catch (error) {
    console.log("Login error:", error.response?.data || error.message);
    message.error("Something went wrong");
    dispatch({ type: "LOADING", payload: false });
  }
};


export const userRegister = (reqObj) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true });
  
    try {
      //const response = await axios.post('https://car-rental-xi-eight.vercel.app/api/users/register' , reqObj)
      const response = await axios.post('/api/users/register', reqObj); // ✅ ADD "await"
      
      message.success('Registration successful');
      setTimeout(() => {
        window.location.href = '/login';
      }, 500);
  
      dispatch({ type: 'LOADING', payload: false });
    } catch (error) {
      console.log('Registration Error:', error.response?.data || error.message);
      message.error('Something went wrong');
      dispatch({ type: 'LOADING', payload: false });
    }
  };
  