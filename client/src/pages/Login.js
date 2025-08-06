// import React from 'react'
// import {Row , Col , Form , Input} from 'antd'
// import { Link } from 'react-router-dom'
// import {useDispatch , useSelector} from 'react-redux'
// import { userLogin } from '../redux/actions/userActions'
// import AOS from 'aos';
// import Spinner from '../components/Spinner';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();
// function Login() {
//     const dispatch = useDispatch()
//     const {loading} = useSelector(state=>state.alertsReducer)
//     function onFinish(values) {
//         dispatch(userLogin(values))
//         console.log(values)

//  }
//     return (
//         <div className='login'>
//             {loading && (<Spinner />)}
//             <Row gutter={16} className='d-flex align-items-center' >

//                 <Col lg={16} style={{position: 'relative'}}>
//                     <img 
//                     className='w-100'
//                     data-aos='slide-right'
//                     data-aos-duration='1500'
//                     src="https://images.unsplash.com/photo-1584936684506-c3a7086e8212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1694&q=80"/>
//                      <h1 className='login-logo'>Car Rental</h1>
//                 </Col>
//                 <Col lg={8} className='text-left p-5'>
//                     <Form layout='vertical' className='login-form p-5' onFinish={onFinish}>
//                          <h1>Login</h1>
//                          <hr />
//                          <Form.Item name='username' label='Username' rules={[{required: true}]}>
//                              <Input/>
//                          </Form.Item>
//                          <Form.Item name='password' label='Password' rules={[{required: true}]}>
//                              <Input type='password'/>
//                          </Form.Item>

//                          <button className='btn1 mt-2'>Login</button>

//                          <hr />

//                          <Link to='/register'>Click Here to Register</Link>
                       

//                     </Form>
//                 </Col>

//             </Row>

//         </div>
//     )
// }

// export default Login

import React from 'react'
import { Row, Col, Form, Input, Button, Card, Typography, Space } from 'antd'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../redux/actions/userActions'
import AOS from 'aos';
import Spinner from '../components/Spinner';
import 'aos/dist/aos.css';
import { 
    UserOutlined, 
    LockOutlined, 
    CarOutlined, 
    LoginOutlined,
    SafetyOutlined,
    StarOutlined
} from '@ant-design/icons'

const { Title, Text } = Typography;

AOS.init();

function Login() {
    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.alertsReducer)
    
    function onFinish(values) {
        dispatch(userLogin(values))
        console.log(values)
    }

    return (
        <div className='luxury-login-container'>
            {loading && (<Spinner />)}
            
            <Row className='luxury-login-row' gutter={0}>
                {/* Left Side - Hero Section */}
                <Col lg={14} md={12} className='luxury-hero-section'>
                    <div className='luxury-hero-overlay'>
                        <div className='luxury-hero-content' data-aos='fade-up' data-aos-duration='1200'>
                            <div className='luxury-brand-section'>
                                <div className='luxury-brand-icon'>
                                    <CarOutlined />
                                </div>
                                <Title level={1} className='luxury-brand-title'>
                                    Premium Car Rental
                                </Title>
                                <Text className='luxury-brand-subtitle'>
                                    Experience luxury mobility with our premium fleet
                                </Text>
                            </div>
                            
                            <div className='luxury-features'>
                                <div className='luxury-feature-item' data-aos='fade-up' data-aos-delay='300'>
                                    <SafetyOutlined className='luxury-feature-icon' />
                                    <div>
                                        <h3>Secure & Trusted</h3>
                                        <p>Premium security with 24/7 support</p>
                                    </div>
                                </div>
                                <div className='luxury-feature-item' data-aos='fade-up' data-aos-delay='600'>
                                    <StarOutlined className='luxury-feature-icon' />
                                    <div>
                                        <h3>5-Star Service</h3>
                                        <p>Exceptional service for discerning clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img 
                        className='luxury-hero-image'
                        data-aos='zoom-in'
                        data-aos-duration='1500'
                        src="https://images.unsplash.com/photo-1584936684506-c3a7086e8212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1694&q=80"
                        alt="Premium Car"
                    />
                </Col>

                {/* Right Side - Login Form */}
                <Col lg={10} md={12} className='luxury-form-section'>
                    <div className='luxury-form-container'>
                        <Card className='luxury-login-card' data-aos='fade-left' data-aos-duration='1000'>
                            <div className='luxury-form-header'>
                                <div className='luxury-form-icon'>
                                    <LoginOutlined />
                                </div>
                                <Title level={2} className='luxury-form-title'>
                                    Welcome Back
                                </Title>
                                <Text className='luxury-form-subtitle'>
                                    Sign in to access your premium account
                                </Text>
                            </div>

                            <Form 
                                layout='vertical' 
                                className='luxury-login-form' 
                                onFinish={onFinish}
                                size="large"
                            >
                                <Form.Item 
                                    name='username' 
                                    label={
                                        <span className='luxury-form-label'>
                                            <UserOutlined /> Username
                                        </span>
                                    }
                                    rules={[{ required: true, message: 'Please enter your username' }]}
                                >
                                    <Input 
                                        prefix={<UserOutlined className='luxury-input-icon' />}
                                        placeholder='Enter your username'
                                        className='luxury-input'
                                    />
                                </Form.Item>

                                <Form.Item 
                                    name='password' 
                                    label={
                                        <span className='luxury-form-label'>
                                            <LockOutlined /> Password
                                        </span>
                                    }
                                    rules={[{ required: true, message: 'Please enter your password' }]}
                                >
                                    <Input.Password 
                                        prefix={<LockOutlined className='luxury-input-icon' />}
                                        placeholder='Enter your password'
                                        className='luxury-input'
                                    />
                                </Form.Item>

                                <Form.Item className='luxury-form-actions'>
                                    <Button 
                                        type="primary" 
                                        htmlType="submit" 
                                        className='luxury-login-btn'
                                        icon={<LoginOutlined />}
                                        loading={loading}
                                        block
                                    >
                                        Sign In to Premium
                                    </Button>
                                </Form.Item>

                                <div className='luxury-form-footer'>
                                    <div className='luxury-divider'>
                                        <span>New to our platform?</span>
                                    </div>
                                    <Link to='/register' className='luxury-register-link'>
                                        <Button type="link" className='luxury-register-btn'>
                                            Create Premium Account
                                        </Button>
                                    </Link>
                                </div>
                            </Form>
                        </Card>
                    </div>
                </Col>
            </Row>

            <style jsx>{`
                .luxury-login-container {
                    min-height: 100vh;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    display: flex;
                    align-items: center;
                }

                .luxury-login-row {
                    width: 100%;
                    min-height: 100vh;
                    margin: 0;
                }

                .luxury-hero-section {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0;
                    overflow: hidden;
                }

                .luxury-hero-image {
                    width: 100%;
                    height: 100vh;
                    object-fit: cover;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 1;
                }

                .luxury-hero-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(135deg, rgba(26, 26, 46, 0.9) 0%, rgba(22, 33, 62, 0.8) 100%);
                    z-index: 2;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                }

                .luxury-hero-content {
                    text-align: center;
                    color: white;
                    max-width: 500px;
                }

                .luxury-brand-section {
                    margin-bottom: 3rem;
                }

                .luxury-brand-icon {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #d4af37 0%, #f4d03f 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1.5rem;
                    box-shadow: 0 12px 32px rgba(212, 175, 55, 0.3);
                }

                .luxury-brand-icon svg {
                    font-size: 3rem;
                    color: #ffffff;
                }

                .luxury-brand-title {
                    color: #ffffff !important;
                    font-size: 3rem !important;
                    font-weight: 700 !important;
                    margin-bottom: 1rem !important;
                    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
                }

                .luxury-brand-subtitle {
                    color: #e0e0e0 !important;
                    font-size: 1.2rem !important;
                    font-weight: 300 !important;
                }

                .luxury-features {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .luxury-feature-item {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1rem;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .luxury-feature-icon {
                    font-size: 2rem;
                    color: #d4af37;
                }

                .luxury-feature-item h3 {
                    color: #ffffff;
                    margin: 0 0 0.25rem 0;
                    font-size: 1.1rem;
                    font-weight: 600;
                }

                .luxury-feature-item p {
                    color: #e0e0e0;
                    margin: 0;
                    font-size: 0.9rem;
                }

                .luxury-form-section {
                    background: #ffffff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                    min-height: 100vh;
                }

                .luxury-form-container {
                    width: 100%;
                    max-width: 450px;
                }

                .luxury-login-card {
                    border: none;
                    border-radius: 24px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
                    padding: 2rem;
                    background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
                }

                .luxury-form-header {
                    text-align: center;
                    margin-bottom: 2rem;
                }

                .luxury-form-icon {
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1rem;
                    box-shadow: 0 8px 24px rgba(26, 26, 46, 0.2);
                }

                .luxury-form-icon svg {
                    font-size: 1.8rem;
                    color: #d4af37;
                }

                .luxury-form-title {
                    color: #1a1a2e !important;
                    font-size: 2rem !important;
                    font-weight: 700 !important;
                    margin-bottom: 0.5rem !important;
                }

                .luxury-form-subtitle {
                    color: #666 !important;
                    font-size: 1rem !important;
                }

                .luxury-form-label {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #1a1a2e;
                    font-weight: 600;
                    font-size: 1rem;
                }

                .luxury-form-label svg {
                    color: #d4af37;
                }

                .luxury-input {
                    border: 2px solid #e8e8e8 !important;
                    border-radius: 12px !important;
                    padding: 0.75rem 1rem !important;
                    font-size: 1rem !important;
                    transition: all 0.3s ease !important;
                    background: #ffffff !important;
                }

                .luxury-input:focus,
                .luxury-input:hover {
                    border-color: #d4af37 !important;
                    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1) !important;
                }

                .luxury-input-icon {
                    color: #d4af37 !important;
                }

                .luxury-form-actions {
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                }

                .luxury-login-btn {
                    background: linear-gradient(135deg, #d4af37 0%, #f4d03f 100%) !important;
                    border: none !important;
                    border-radius: 12px !important;
                    padding: 0.75rem 2rem !important;
                    font-weight: 600 !important;
                    font-size: 1rem !important;
                    height: auto !important;
                    box-shadow: 0 4px 16px rgba(212, 175, 55, 0.3) !important;
                    transition: all 0.3s ease !important;
                }

                .luxury-login-btn:hover {
                    transform: translateY(-2px) !important;
                    box-shadow: 0 8px 24px rgba(212, 175, 55, 0.4) !important;
                }

                .luxury-form-footer {
                    text-align: center;
                    margin-top: 2rem;
                }

                .luxury-divider {
                    position: relative;
                    margin: 1.5rem 0;
                    color: #999;
                    font-size: 0.9rem;
                }

                .luxury-divider::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background: #e8e8e8;
                    z-index: 1;
                }

                .luxury-divider span {
                    background: #ffffff;
                    padding: 0 1rem;
                    position: relative;
                    z-index: 2;
                }

                .luxury-register-link {
                    text-decoration: none;
                    display: block;
                }

                .luxury-register-btn {
                    color: #d4af37 !important;
                    font-weight: 600 !important;
                    font-size: 1rem !important;
                    padding: 0.5rem 1rem !important;
                    border-radius: 8px !important;
                    transition: all 0.3s ease !important;
                }

                .luxury-register-btn:hover {
                    background: rgba(212, 175, 55, 0.1) !important;
                    color: #1a1a2e !important;
                }

                @media (max-width: 992px) {
                    .luxury-hero-section {
                        display: none;
                    }
                    
                    .luxury-form-section {
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    }
                    
                    .luxury-brand-title {
                        font-size: 2.5rem !important;
                    }
                }

                @media (max-width: 768px) {
                    .luxury-form-container {
                        padding: 1rem;
                    }
                    
                    .luxury-login-card {
                        padding: 1.5rem;
                    }
                    
                    .luxury-brand-title {
                        font-size: 2rem !important;
                    }
                }

                /* Ant Design Overrides */
                :global(.luxury-login-form .ant-form-item-label > label) {
                    color: #1a1a2e !important;
                    font-weight: 600 !important;
                }

                :global(.luxury-login-form .ant-input-affix-wrapper) {
                    border: 2px solid #e8e8e8 !important;
                    border-radius: 12px !important;
                }

                :global(.luxury-login-form .ant-input-affix-wrapper:focus) {
                    border-color: #d4af37 !important;
                    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1) !important;
                }

                :global(.luxury-login-form .ant-input-affix-wrapper-focused) {
                    border-color: #d4af37 !important;
                    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1) !important;
                }
            `}</style>
        </div>
    )
}

export default Login