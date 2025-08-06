// import React from "react";
// import { Row, Col, Form, Input } from "antd";
// import { Link } from "react-router-dom";
// import {useDispatch , useSelector} from 'react-redux'
// import { userRegister } from "../redux/actions/userActions";
// import AOS from 'aos';
// import Spinner from '../components/Spinner';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init()
// function Register() {
//   const dispatch = useDispatch()
//   const {loading} = useSelector(state=>state.alertsReducer)
//     function onFinish(values) {
//            dispatch(userRegister(values))
//            console.log(values)
//     }

//   return (
//     <div className="login">
//       {loading && (<Spinner />)}
//       <Row gutter={16} className="d-flex align-items-center">
//         <Col lg={16} style={{ position: "relative" }}>
//           <img 
//            className='w-100'
//            data-aos='slide-left'
//            data-aos-duration='1500'
//           src="https://images.unsplash.com/photo-1584936684506-c3a7086e8212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1694&q=80" />
//           <h1 className="login-logo">Car Rental</h1>
//         </Col>
//         <Col lg={8} className="text-left p-5">
//           <Form layout="vertical" className="login-form p-5" onFinish={onFinish}>
//             <h1>Register</h1>
//             <hr />
//             <Form.Item
//               name="username"
//               label="Username"
//               rules={[{ required: true }]}
//             >
//               <Input />
//             </Form.Item>
//             <Form.Item
//               name="password"
//               label="Password"
//               rules={[{ required: true }]}
//             >
//               <Input />
//             </Form.Item>
//             <Form.Item
//               name="cpassword"
//               label="Confirm Password"
//               rules={[{ required: true }]}
//             >
//               <Input />
//             </Form.Item>

//             <button className="btn1 mt-2 mb-3">Register</button>
//             <br />

//             <Link to="/login">Click Here to Login</Link>
//           </Form>
//         </Col>
//       </Row>
//     </div>
//   );
// }

// export default Register;

import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../redux/actions/userActions";
import AOS from "aos";
import Spinner from "../components/Spinner";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "aos/dist/aos.css";

AOS.init();

function Register() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);

  function onFinish(values) {
    dispatch(userRegister(values));
    console.log(values);
  }

  return (
    <div className="lux-register-container">
      {loading && <Spinner />}
      <Row className="lux-register-card" gutter={0}>
        {/* Left Image Section */}
        <Col lg={14} className="lux-register-image-section">
          <img
            src="https://images.unsplash.com/photo-1584936684506-c3a7086e8212?auto=format&fit=crop&w=1694&q=80"
            alt="Car Rental"
            data-aos="slide-left"
            data-aos-duration="1500"
          />
          <h1 className="lux-register-logo">Car Rental</h1>
        </Col>

        {/* Right Form Section */}
        <Col lg={10} xs={24} className="lux-register-form-wrapper">
          <div className="lux-register-form">
            <h2 className="lux-form-title">Create Your Account</h2>
            <p className="lux-form-subtitle">Start your premium journey with us</p>

            <Form layout="vertical" onFinish={onFinish} size="large">
              <Form.Item
                name="username"
                label={<span className="lux-label">Username</span>}
                rules={[{ required: true, message: "Please enter your username" }]}
              >
                <Input
                  className="lux-input"
                  prefix={<UserOutlined className="lux-input-icon" />}
                  placeholder="Enter your username"
                />
              </Form.Item>

              <Form.Item
                name="password"
                label={<span className="lux-label">Password</span>}
                rules={[{ required: true, message: "Please enter your password" }]}
              >
                <Input.Password
                  className="lux-input"
                  prefix={<LockOutlined className="lux-input-icon" />}
                  placeholder="Enter your password"
                />
              </Form.Item>

              <Form.Item
                name="cpassword"
                label={<span className="lux-label">Confirm Password</span>}
                rules={[{ required: true, message: "Please confirm your password" }]}
              >
                <Input.Password
                  className="lux-input"
                  prefix={<LockOutlined className="lux-input-icon" />}
                  placeholder="Re-enter your password"
                />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                className="lux-register-btn"
                loading={loading}
              >
                Register
              </Button>

              <div className="lux-login-link">
                Already have an account?{" "}
                <Link to="/login" className="lux-link">
                  Login Here
                </Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>

      <style jsx>{`
        .lux-register-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(to left,rgb(92, 84, 164), #ececec);
        }

        .lux-register-card {
          background: white;
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.1);
          border-radius: 20px;
          overflow: hidden;
          width: 90%;
          max-width: 1100px;
        }

        .lux-register-image-section {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lux-register-image-section img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .lux-register-logo {
          position: absolute;
          top: 20px;
          left: 30px;
          font-size: 2rem;
          font-weight: bold;
          color: #ffffff;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
        }

        .lux-register-form-wrapper {
          padding: 3rem 2rem;
        }

        .lux-register-form {
          max-width: 400px;
          margin: 0 auto;
        }

        .lux-form-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 0.5rem;
        }

        .lux-form-subtitle {
          color: #888;
          font-size: 1rem;
          margin-bottom: 2rem;
        }

        .lux-label {
          font-weight: 600;
          color: #1a1a2e;
        }

        .lux-input {
          border: 2px solid #e8e8e8;
          border-radius: 12px;
          padding: 0.75rem;
          background: #ffffff;
          transition: all 0.3s ease;
        }

        .lux-input:focus,
        .lux-input:hover {
          border-color: #d4af37;
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
        }

        .lux-input-icon {
          color: #d4af37;
        }

        .lux-register-btn {
          width: 100%;
          background: linear-gradient(135deg, #d4af37 0%, #f4d03f 100%);
          border: none;
          padding: 0.75rem;
          font-weight: 600;
          border-radius: 12px;
          margin-top: 1rem;
          transition: all 0.3s ease;
        }

        .lux-register-btn:hover {
          background: linear-gradient(135deg, #e6c248 0%, #f7d94c 100%);
        }

        .lux-login-link {
          margin-top: 1rem;
          text-align: center;
          font-size: 0.95rem;
          color: #666;
        }

        .lux-link {
          color: #003366;
          font-weight: 500;
        }

        .lux-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .lux-register-image-section {
            display: none;
          }

          .lux-register-form-wrapper {
            padding: 2rem 1.5rem;
          }

          .lux-form-title {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}

export default Register;
