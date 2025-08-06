// import { Col, Row, Form, Input } from "antd";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import DefaultLayout from "../components/DefaultLayout";
// import Spinner from "../components/Spinner";
// import { addCar, editCar, getAllCars } from "../redux/actions/carsActions";
// import {
//   useLoaderData,
// } from "react-router-dom";

// function EditCar() {
//   const match = useLoaderData();
//   const { cars } = useSelector((state) => state.carsReducer);
//   const dispatch = useDispatch();
//   const { loading } = useSelector((state) => state.alertsReducer);
//   const [car, setcar] = useState();
//   const [totalcars, settotalcars] = useState([]);
//   useEffect(() => {
//     if (cars.length == 0) {
//       dispatch(getAllCars());
//     } else {
//       settotalcars(cars);
//       setcar(cars.find((o) => o._id == match));
//       console.log(car);
//     }
//   }, [cars]);

//   function onFinish(values) {
//     values._id = car._id;

//     dispatch(editCar(values));
//     console.log(values);
//   }

//   return (
//     <DefaultLayout>
//       {loading && <Spinner />}
//       <Row justify="center mt-5">
//         <Col lg={12} sm={24} xs={24} className='p-2'>
//           {totalcars.length > 0 && (
//             <Form
//               initialValues={car}
//               className="bs1 p-2"
//               layout="vertical"
//               onFinish={onFinish}
//             >
//               <h3>Edit Car</h3>

//               <hr />
//               <Form.Item
//                 name="name"
//                 label="Car name"
//                 rules={[{ required: true }]}
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item
//                 name="image"
//                 label="Image url"
//                 rules={[{ required: true }]}
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item
//                 name="rentPerHour"
//                 label="Rent per hour"
//                 rules={[{ required: true }]}
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item
//                 name="capacity"
//                 label="Capacity"
//                 rules={[{ required: true }]}
//               >
//                 <Input />
//               </Form.Item>
//               <Form.Item
//                 name="fuelType"
//                 label="Fuel Type"
//                 rules={[{ required: true }]}
//               >
//                 <Input />
//               </Form.Item>

//               <div className="text-right">
//                 <button className="btn1">Edit CAR</button>
//               </div>
//             </Form>
//           )}
//         </Col>
//       </Row>
//     </DefaultLayout>
//   );
// }

// export default EditCar;

import { Col, Row, Form, Input, Card, Button, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import Spinner from "../components/Spinner";
import { editCar, getAllCars } from "../redux/actions/carsActions";
import { useLoaderData } from "react-router-dom";
import {
  CarOutlined,
  PictureOutlined,
  DollarOutlined,
  TeamOutlined,
  ThunderboltOutlined,
  CheckOutlined
} from "@ant-design/icons";

function EditCar() {
  const match = useLoaderData();
  const { cars } = useSelector((state) => state.carsReducer);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);
  const [car, setcar] = useState();
  const [form] = Form.useForm();

  useEffect(() => {
    if (cars.length === 0) {
      dispatch(getAllCars());
    } else {
      const foundCar = cars.find((o) => o._id === match);
      setcar(foundCar);
      form.setFieldsValue(foundCar);
    }
  }, [cars]);

  function onFinish(values) {
    values._id = car._id;
    dispatch(editCar(values));
  }

  const formItems = [
    {
      name: "name",
      label: "Vehicle Name",
      icon: <CarOutlined />,
      placeholder: "Enter vehicle name",
    },
    {
      name: "image",
      label: "Image URL",
      icon: <PictureOutlined />,
      placeholder: "Enter image URL",
    },
    {
      name: "rentPerHour",
      label: "Hourly Rate",
      icon: <DollarOutlined />,
      placeholder: "Enter rate per hour ($)",
    },
    {
      name: "capacity",
      label: "Passenger Capacity",
      icon: <TeamOutlined />,
      placeholder: "Enter seating capacity",
    },
    {
      name: "fuelType",
      label: "Fuel Type",
      icon: <ThunderboltOutlined />,
      placeholder: "Enter fuel type",
    },
  ];

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <Row justify="center">
        <Col lg={14} md={18} sm={22} xs={24}>
          {car && (
            <Card className="luxury-form-card">
              <div className="luxury-form-header">
                <div className="luxury-form-icon">
                  <CarOutlined />
                </div>
                <h2>Edit Premium Vehicle</h2>
                <p>Update the details of your luxury vehicle</p>
              </div>

              <Form
                layout="vertical"
                onFinish={onFinish}
                className="luxury-form"
                size="large"
                form={form}
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
                      rules={[{ required: true, message: `Please enter ${item.label}` }]}
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
                      type="primary"
                      htmlType="submit"
                      size="large"
                      className="luxury-submit-btn"
                      icon={<CheckOutlined />}
                      loading={loading}
                    >
                      Save Changes
                    </Button>
                  </Space>
                </div>
              </Form>
            </Card>
          )}
        </Col>
      </Row>

      <style jsx>{`
        .luxury-form-card {
          border: none;
          border-radius: 20px;
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.1);
          background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
          margin-top: 2rem;
        }

        .luxury-form-header {
          text-align: center;
          padding: 2rem 0;
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

        @media (max-width: 768px) {
          .luxury-form {
            padding: 0 1rem;
          }
        }
      `}</style>
    </DefaultLayout>
  );
}

export default EditCar;