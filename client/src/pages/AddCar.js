// import { Col , Row , Form , Input} from 'antd'
// import React from 'react'
// import { useDispatch , useSelector } from 'react-redux'
// import DefaultLayout from '../components/DefaultLayout'
// import Spinner from '../components/Spinner'
// import { addCar } from '../redux/actions/carsActions'
// function AddCar() {

//     const dispatch = useDispatch()
//     const {loading} = useSelector(state=>state.alertsReducer)

//     function onFinish(values){

//          values.bookedTimeSlots=[]

//          dispatch(addCar(values))
//          console.log(values)
//     }

//     return (
//         <DefaultLayout>
//                {loading && (<Spinner />)}
//                <Row justify='center mt-5'>
//                    <Col lg={12} sm={24} xs={24} className='p-2'>
//                        <Form className='bs1 p-2' layout='vertical' onFinish={onFinish}>
//                            <h3>Add New Car</h3>
//                            <hr />
//                            <Form.Item name='name' label='Car name' rules={[{required: true}]}>
//                                <Input/>
//                            </Form.Item>
//                            <Form.Item name='image' label='Image url' rules={[{required: true}]}>
//                                <Input/>
//                            </Form.Item>
//                            <Form.Item name='rentPerHour' label='Rent per hour' rules={[{required: true}]}>
//                                <Input/>
//                            </Form.Item>
//                            <Form.Item name='capacity' label='Capacity' rules={[{required: true}]}>
//                                <Input/>
//                            </Form.Item>
//                            <Form.Item name='fuelType' label='Fuel Type' rules={[{required: true}]}>
//                                <Input/>
//                            </Form.Item>

//                            <div className='text-right'>
//                            <button className='btn1'>ADD CAR</button>
//                            </div>

//                        </Form>
//                    </Col>
//                </Row>

//         </DefaultLayout>
//     )
// }

// export default AddCar

import { Col, Row, Form, Input, Card, Button, Space } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import Spinner from '../components/Spinner'
import { addCar } from '../redux/actions/carsActions'
import { 
  CarOutlined, 
  PictureOutlined, 
  DollarOutlined, 
  TeamOutlined, 
  ThunderboltOutlined,
  PlusOutlined,
  CheckOutlined
} from '@ant-design/icons'

function AddCar() {
    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.alertsReducer)
    const [form] = Form.useForm()

    function onFinish(values) {
        values.bookedTimeSlots = []
        dispatch(addCar(values))
        console.log(values)
    }

    const formItems = [
        {
            name: 'name',
            label: 'Vehicle Name',
            icon: <CarOutlined />,
            placeholder: 'Enter premium vehicle name',
            rules: [{ required: true, message: 'Please enter the vehicle name' }]
        },
        {
            name: 'image',
            label: 'Image URL',
            icon: <PictureOutlined />,
            placeholder: 'Enter high-quality image URL ---> https://unsplash.com',
            rules: [{ required: true, message: 'Please enter the image URL' }]
        },
        {
            name: 'rentPerHour',
            label: 'Hourly Rate',
            icon: <DollarOutlined />,
            placeholder: 'Enter rate per hour ($)',
            rules: [{ required: true, message: 'Please enter the hourly rate' }]
        },
        {
            name: 'capacity',
            label: 'Passenger Capacity',
            icon: <TeamOutlined />,
            placeholder: 'Enter seating capacity',
            rules: [{ required: true, message: 'Please enter the capacity' }]
        },
        {
            name: 'fuelType',
            label: 'Fuel Type',
            icon: <ThunderboltOutlined />,
            placeholder: 'Enter fuel type (Petrol/Diesel/Electric)',
            rules: [{ required: true, message: 'Please enter the fuel type' }]
        }
    ]

    return (
        <DefaultLayout>
            {loading && (<Spinner />)}
            
            {/* Header Section */}
            <div className="luxury-header">
                <h1 className="luxury-title">
                    <PlusOutlined className="luxury-title-icon" />
                    Add Premium Vehicle
                </h1>
                <div className="luxury-subtitle">
                    Expand your luxury fleet with exceptional vehicles
                </div>
            </div>

            <Row justify='center'>
                <Col lg={14} md={18} sm={22} xs={24}>
                    <Card className="luxury-form-card">
                        <div className="luxury-form-header">
                            <div className="luxury-form-icon">
                                <CarOutlined />
                            </div>
                            <h2>Vehicle Information</h2>
                            <p>Complete the details below to add a new premium vehicle to your fleet</p>
                        </div>

                        <Form 
                            form={form}
                            layout='vertical' 
                            onFinish={onFinish}
                            className="luxury-form"
                            size="large"
                        >
                            <div className="luxury-form-content">
                                {formItems.map((item, index) => (
                                    <Form.Item
                                        key={index}
                                        name={item.name}
                                        label={
                                            <div className="luxury-form-label">
                                                {item.icon}
                                                <span>{item.label}</span>
                                            </div>
                                        }
                                        rules={item.rules}
                                        className="luxury-form-item"
                                    >
                                        <Input 
                                            placeholder={item.placeholder}
                                            className="luxury-input"
                                            prefix={<span className="luxury-input-prefix">{item.icon}</span>}
                                        />
                                    </Form.Item>
                                ))}
                            </div>

                            <div className="luxury-form-footer">
                                <Space size="middle">
                                    <Button 
                                        type="default" 
                                        size="large"
                                        className="luxury-cancel-btn"
                                        onClick={() => form.resetFields()}
                                    >
                                        Clear Form
                                    </Button>
                                    <Button 
                                        type="primary" 
                                        htmlType="submit"
                                        size="large"
                                        className="luxury-submit-btn"
                                        icon={<CheckOutlined />}
                                        loading={loading}
                                    >
                                        Add Premium Vehicle
                                    </Button>
                                </Space>
                            </div>
                        </Form>
                    </Card>
                </Col>
            </Row>

            <style jsx>{`
                .luxury-header {
                    text-align: center;
                    margin-bottom: 3rem;
                    padding: 2.5rem 0;
                    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
                    border-radius: 20px;
                    margin: 2rem 0;
                }

                .luxury-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin-bottom: 0.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                }

                .luxury-title-icon {
                    font-size: 2.5rem;
                    color: #d4af37;
                }

                .luxury-subtitle {
                    font-size: 1.1rem;
                    color: #a0a0a0;
                    font-weight: 400;
                }

                .luxury-form-card {
                    border: none;
                    border-radius: 20px;
                    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.1);
                    background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
                    overflow: hidden;
                }

                .luxury-form-header {
                    text-align: center;
                    padding: 2rem 0 1.5rem;
                    background: linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%);
                    border-bottom: 2px solid #f0f0f0;
                    margin-bottom: 2rem;
                }

                .luxury-form-icon {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #d4af37 0%, #f4d03f 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1rem;
                    box-shadow: 0 8px 24px rgba(212, 175, 55, 0.3);
                }

                .luxury-form-icon svg {
                    font-size: 2rem;
                    color: #ffffff;
                }

                .luxury-form-header h2 {
                    color: #1a1a2e;
                    font-size: 1.8rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                }

                .luxury-form-header p {
                    color: #666;
                    font-size: 1rem;
                    margin-bottom: 0;
                }

                .luxury-form {
                    padding: 0 2rem;
                }

                .luxury-form-content {
                    display: grid;
                    gap: 1.5rem;
                }

                .luxury-form-item {
                    margin-bottom: 0 !important;
                }

                .luxury-form-label {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #1a1a2e;
                    font-weight: 600;
                    font-size: 1rem;
                    margin-bottom: 0.5rem;
                }

                .luxury-form-label svg {
                    color: #d4af37;
                    font-size: 1.1rem;
                }

                .luxury-input {
                    border: 2px solid #e8e8e8;
                    border-radius: 12px;
                    padding: 0.75rem 1rem;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                    background: #ffffff;
                }

                .luxury-input:focus,
                .luxury-input:hover {
                    border-color: #d4af37;
                    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
                }

                .luxury-input-prefix {
                    color: #d4af37;
                    margin-right: 0.5rem;
                }

                .luxury-form-footer {
                    text-align: center;
                    padding: 2rem 0;
                    border-top: 2px solid #f0f0f0;
                    margin-top: 2rem;
                }

                .luxury-submit-btn {
                    background: linear-gradient(135deg, #d4af37 0%, #f4d03f 100%);
                    border: none;
                    border-radius: 12px;
                    padding: 0.75rem 2rem;
                    font-weight: 600;
                    font-size: 1rem;
                    height: auto;
                    box-shadow: 0 4px 16px rgba(212, 175, 55, 0.3);
                    transition: all 0.3s ease;
                }

                .luxury-submit-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(212, 175, 55, 0.4);
                    background: linear-gradient(135deg, #e6c248 0%, #f7d94c 100%);
                }

                .luxury-cancel-btn {
                    border: 2px solid #e8e8e8;
                    border-radius: 12px;
                    padding: 0.75rem 2rem;
                    font-weight: 600;
                    font-size: 1rem;
                    height: auto;
                    color: #666;
                    transition: all 0.3s ease;
                }

                .luxury-cancel-btn:hover {
                    border-color: #d4af37;
                    color: #d4af37;
                    transform: translateY(-2px);
                }

                /* Ant Design Form Label Override */
                :global(.luxury-form .ant-form-item-label > label) {
                    color: #1a1a2e !important;
                    font-weight: 600 !important;
                }

                /* Ant Design Input Override */
                :global(.luxury-form .ant-input) {
                    border: 2px solid #e8e8e8 !important;
                    border-radius: 12px !important;
                }

                :global(.luxury-form .ant-input:focus) {
                    border-color: #d4af37 !important;
                    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1) !important;
                }

                @media (max-width: 768px) {
                    .luxury-title {
                        font-size: 2rem;
                        flex-direction: column;
                        gap: 0.5rem;
                    }
                    
                    .luxury-form {
                        padding: 0 1rem;
                    }
                    
                    .luxury-form-footer {
                        padding: 1.5rem 0;
                    }
                    
                    .luxury-form-footer .ant-space {
                        flex-direction: column;
                        width: 100%;
                    }
                    
                    .luxury-form-footer .ant-btn {
                        width: 100%;
                    }
                }
            `}</style>
        </DefaultLayout>
    )
}

export default AddCar