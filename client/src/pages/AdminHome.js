// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import DefaultLayout from "../components/DefaultLayout";
// import { deleteCar, getAllCars } from "../redux/actions/carsActions";
// import { Col, Row, Divider, DatePicker, Checkbox, Edit } from "antd";
// import { Link } from "react-router-dom";
// import Spinner from "../components/Spinner";
// import moment from "moment";
// import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
// import { Popconfirm, message } from "antd";
// const { RangePicker } = DatePicker;

// function AdminHome() {
//   const { cars } = useSelector((state) => state.carsReducer);
//   const { loading } = useSelector((state) => state.alertsReducer);
//   const [totalCars, setTotalcars] = useState([]);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllCars());
//   }, []);

//   useEffect(() => {
//     setTotalcars(cars);
//   }, [cars]);

//   return (
//     <DefaultLayout>
//       <Row justify="center" gutter={16} className="mt-2">
//         <Col lg={20} sm={24}>
//           <div className="d-flex justify-content-between align-items-center">
//             <h3 className="mt-1 mr-2">Admin Panel</h3>
//             <button className="btn1">
//               <a href="/addcar">ADD CAR</a>
//             </button>
//           </div>
//         </Col>
//       </Row>

//       {loading == true && <Spinner />}

//       <Row justify="center" gutter={16}>
//         {totalCars.map((car) => {
//           return (
//             <Col lg={5} sm={24} xs={24}>
//               <div className="car p-2 bs1">
//                 <img src={car.image} className="carimg" />

//                 <div className="car-content d-flex align-items-center justify-content-between">
//                   <div className="text-left pl-2">
//                     <p>{car.name}</p>
//                     <p> Rent Per Hour {car.rentPerHour} /-</p>
//                   </div>

//                   <div className="mr-4">
//                     <Link to={`/editcar/${car._id}`}>
//                       <EditOutlined
//                         className="mr-3"
//                         style={{ color: "green", cursor: "pointer" }}
//                       />
//                     </Link>

//                     <Popconfirm
//                       title="Are you sure to delete this car?"
//                       onConfirm={()=>{dispatch(deleteCar({carid : car._id}))}}
                      
//                       okText="Yes"
//                       cancelText="No"
//                     >
//                       <DeleteOutlined
//                         style={{ color: "red", cursor: "pointer" }}
//                       />
//                     </Popconfirm>
//                   </div>
//                 </div>
//               </div>
//             </Col>
//           );
//         })}
//       </Row>
//     </DefaultLayout>
//   );
// }

// export default AdminHome;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { deleteCar, getAllCars } from "../redux/actions/carsActions";
import { Col, Row, Divider, DatePicker, Checkbox, Edit } from "antd";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import moment from "moment";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Popconfirm, message } from "antd";
const { RangePicker } = DatePicker;

function AdminHome() {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [totalCars, setTotalcars] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  useEffect(() => {
    setTotalcars(cars);
  }, [cars]);

  return (
    <DefaultLayout>
      <div className="luxury-admin-container">
        {/* Admin Header */}
        <div className="admin-header">
          <div className="admin-header-content">
            <Row justify="center" gutter={16} className="header-row">
              <Col lg={20} sm={24}>
                <div className="admin-title-section">
                  <div className="admin-title-wrapper">
                    <h1 className="admin-title">
                      <span className="admin-icon">⚡</span>
                      Admin Dashboard
                    </h1>
                    <p className="admin-subtitle">Manage your luxury fleet</p>
                  </div>
                  <div className="admin-actions">
                    <button className="luxury-add-btn">
                      <a href="/addcar" className="add-car-link">
                        <span className="add-icon">+</span>
                        Add Premium Vehicle
                      </a>
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="stats-section">
          <Row justify="center" gutter={[24, 24]}>
            <Col lg={20} sm={24}>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">🚗</div>
                  <div className="stat-content">
                    <h3 className="stat-number">{totalCars.length}</h3>
                    <p className="stat-label">Total Vehicles</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">⭐</div>
                  <div className="stat-content">
                    <h3 className="stat-number">{totalCars.filter(car => car.bookedTimeSlots.length === 0).length}</h3>
                    <p className="stat-label">Available Now</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">📈</div>
                  <div className="stat-content">
                    <h3 className="stat-number">{totalCars.filter(car => car.bookedTimeSlots.length > 0).length}</h3>
                    <p className="stat-label">Currently Booked</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {loading == true && <Spinner />}

        {/* Cars Management Section */}
        <div className="cars-management-section">
          <div className="section-header">
            <h2 className="section-title">Fleet Management</h2>
            <p className="section-subtitle">Manage your luxury vehicle collection</p>
          </div>

          <Row justify="center" gutter={[24, 24]} className="admin-cars-grid">
            {totalCars.map((car) => {
              const isBooked = car.bookedTimeSlots.length > 0;
              
              return (
                <Col lg={6} md={8} sm={12} xs={24} key={car._id}>
                  <div className="luxury-admin-car-card">
                    <div className="admin-car-image-container">
                      <img src={car.image} className="admin-car-image" alt={car.name} />
                      <div className="admin-car-overlay">
                        <div className={`admin-status-badge ${isBooked ? 'booked' : 'available'}`}>
                          {isBooked ? 'Booked' : 'Available'}
                        </div>
                      </div>
                    </div>

                    <div className="admin-car-details">
                      <div className="admin-car-info">
                        <h3 className="admin-car-name">{car.name}</h3>
                        <div className="admin-car-price">
                          <span className="currency">₹</span>
                          <span className="amount">{car.rentPerHour}</span>
                          <span className="period">/hour</span>
                        </div>
                      </div>

                      <div className="admin-car-stats">
                        <div className="stat-item">
                          <span className="stat-icon-small">📅</span>
                          <span className="stat-text">
                            {car.bookedTimeSlots.length} Bookings
                          </span>
                        </div>
                      </div>

                      <div className="admin-car-actions">
                        <Link to={`/editcar/${car._id}`} className="admin-action-btn edit-btn">
                          <EditOutlined className="action-icon" />
                          <span>Edit</span>
                        </Link>

                        <Popconfirm
                          title="Delete this vehicle?"
                          description="This action cannot be undone."
                          onConfirm={() => {dispatch(deleteCar({carid : car._id}))}}
                          okText="Yes, Delete"
                          cancelText="Cancel"
                          okButtonProps={{ 
                            style: { 
                              background: '#ff4d4f', 
                              borderColor: '#ff4d4f' 
                            } 
                          }}
                        >
                          <button className="admin-action-btn delete-btn">
                            <DeleteOutlined className="action-icon" />
                            <span>Delete</span>
                          </button>
                        </Popconfirm>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>

      <style jsx>{`
        .luxury-admin-container {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%);
          min-height: 100vh;
          color: #ffffff;
          padding-bottom: 2rem;
        }

        .admin-header {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
          padding: 2rem 0;
          border-bottom: 1px solid rgba(212, 175, 55, 0.3);
          position: relative;
          overflow: hidden;
        }

        .admin-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .admin-header-content {
          position: relative;
          z-index: 2;
        }

        .header-row {
          margin-top: 0;
        }

        .admin-title-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .admin-title-wrapper {
          flex: 1;
        }

        .admin-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(45deg, #d4af37, #ffd700, #b8860b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .admin-icon {
          font-size: 2rem;
          color: #d4af37;
        }

        .admin-subtitle {
          font-size: 1.2rem;
          color: #cccccc;
          font-weight: 300;
          margin: 0;
        }

        .admin-actions {
          flex-shrink: 0;
        }

        .luxury-add-btn {
          background: linear-gradient(45deg, #d4af37, #ffd700);
          border: none;
          border-radius: 25px;
          padding: 1rem 2rem;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .luxury-add-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(212, 175, 55, 0.5);
          background: linear-gradient(45deg, #ffd700, #d4af37);
        }

        .add-car-link {
          color: #000;
          text-decoration: none;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .add-car-link:hover {
          color: #000;
        }

        .add-icon {
          font-size: 1.2rem;
          font-weight: bold;
        }

        .stats-section {
          padding: 2rem 0;
          background: rgba(15, 15, 35, 0.5);
          backdrop-filter: blur(20px);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .stat-card {
          background: linear-gradient(145deg, #1a1a2e 0%, #16213e 100%);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 15px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
          border-color: rgba(212, 175, 55, 0.4);
        }

        .stat-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          display: block;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: bold;
          color: #d4af37;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #cccccc;
          font-size: 0.9rem;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .cars-management-section {
          padding: 3rem 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 2.2rem;
          color: #d4af37;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #cccccc;
          font-weight: 300;
          margin: 0;
        }

        .admin-cars-grid {
          margin-top: 2rem;
        }

        .luxury-admin-car-card {
          background: linear-gradient(145deg, #1a1a2e 0%, #16213e 100%);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s ease;
          border: 1px solid rgba(212, 175, 55, 0.2);
          position: relative;
          height: 100%;
        }

        .luxury-admin-car-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(212, 175, 55, 0.3);
          border-color: rgba(212, 175, 55, 0.5);
        }

        .admin-car-image-container {
          position: relative;
          height: 180px;
          overflow: hidden;
        }

        .admin-car-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .luxury-admin-car-card:hover .admin-car-image {
          transform: scale(1.05);
        }

        .admin-car-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%);
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
          padding: 1rem;
        }

        .admin-status-badge {
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .admin-status-badge.available {
          background: linear-gradient(45deg, #00ff88, #00cc6a);
          color: #000;
        }

        .admin-status-badge.booked {
          background: linear-gradient(45deg, #ff6b6b, #ff5252);
          color: #fff;
        }

        .admin-car-details {
          padding: 1.5rem;
        }

        .admin-car-info {
          margin-bottom: 1rem;
        }

        .admin-car-name {
          font-size: 1.2rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .admin-car-price {
          display: flex;
          align-items: baseline;
          gap: 0.2rem;
          color: #d4af37;
          font-weight: 600;
        }

        .currency {
          font-size: 0.9rem;
        }

        .amount {
          font-size: 1.3rem;
          font-weight: 700;
        }

        .period {
          font-size: 0.8rem;
          color: #cccccc;
        }

        .admin-car-stats {
          margin-bottom: 1.5rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: #cccccc;
        }

        .stat-icon-small {
          font-size: 1rem;
        }

        .admin-car-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.8rem;
        }

        .admin-action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.8rem 1rem;
          border: none;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .edit-btn {
          background: linear-gradient(45deg, #4CAF50, #45a049);
          color: white;
        }

        .edit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(76, 175, 80, 0.4);
          color: white;
        }

        .delete-btn {
          background: linear-gradient(45deg, #ff4757, #ff3742);
          color: white;
        }

        .delete-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 71, 87, 0.4);
        }

        .action-icon {
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .admin-title {
            font-size: 2rem;
          }
          
          .admin-title-section {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .section-title {
            font-size: 1.8rem;
          }
          
          .cars-management-section {
            padding: 2rem 1rem;
          }
        }

        @media (max-width: 480px) {
          .admin-car-actions {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </DefaultLayout>
  );
}

export default AdminHome;