// import React, { useState, useEffect } from "react";
// import DefaultLayout from "../components/DefaultLayout";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllBookings } from "../redux/actions/bookingActions";
// import { Col, Row } from "antd";
// import Spinner from '../components/Spinner';
// import moment from "moment";
// function UserBookings() {
//   const dispatch = useDispatch();
//   const { bookings } = useSelector((state) => state.bookingsReducer);
//   const {loading} = useSelector((state) => state.alertsReducer);
//   const user = JSON.parse(localStorage.getItem("user"));
//   useEffect(() => {
//     dispatch(getAllBookings());
//   }, []);

//   return (
//     <DefaultLayout>
//         {loading && (<Spinner />)}
//       <h3 className="text-center mt-2">My Bookings</h3>
    
//       <Row justify="center" gutter={16}>
//         <Col lg={16} sm={24}>
         
//             {bookings.filter(o=>o.user==user._id).map((booking) => {
//              return <Row gutter={16} className="bs1 mt-3 text-left">
//                 <Col lg={6} sm={24}>
//                     <p><b>{booking.car.name}</b></p>
//                     <p>Total hours : <b>{booking.totalHours}</b></p>
//                     <p>Rent per hour : <b>{booking.car.rentPerHour}</b></p>
//                     <p>Total amount : <b>{booking.totalAmount}</b></p>
//                 </Col>

//                 <Col lg={12} sm={24}>
//                 <p>Transaction Id : <b>{booking.transactionId}</b></p>
//                 <p>From: <b>{booking.bookedTimeSlots.from}</b></p>
//                 <p>To: <b>{booking.bookedTimeSlots.to}</b></p>
//                 <p>Date of booking: <b>{moment(booking.createdAt).format('MMM DD yyyy')}</b></p>
//                 </Col>

//                 <Col lg={6} sm={24} className='text-right'>
//                     <img style={{borderRadius:5}} src={booking.car.image}  height="140" className="p-2"/>
//                 </Col>
//               </Row>;
//             })}
          
//         </Col>
//       </Row>
//     </DefaultLayout>
//   );
// }

// export default UserBookings;

import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings } from "../redux/actions/bookingActions";
import { Col, Row, Card, Badge, Divider } from "antd";
import { CalendarOutlined, DollarOutlined, ClockCircleOutlined, CreditCardOutlined, CarOutlined } from "@ant-design/icons";
import Spinner from '../components/Spinner';
import moment from "moment";

function UserBookings() {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookingsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    dispatch(getAllBookings());
  }, []);

  const userBookings = bookings.filter(o => o.user == user._id);

  return (
    <DefaultLayout>
      {loading && (<Spinner />)}
      
      {/* Header Section */}
      <div className="luxury-header">
        <h1 className="luxury-title">
          <CarOutlined className="luxury-title-icon" />
          My Premium Bookings
        </h1>
        <div className="luxury-subtitle">
          Manage your exclusive vehicle reservations
        </div>
      </div>

      <Row justify="center" gutter={[24, 24]}>
        <Col lg={20} sm={24}>
          {userBookings.length === 0 ? (
            <Card className="luxury-empty-state">
              <div className="luxury-empty-content">
                <CarOutlined className="luxury-empty-icon" />
                <h3>No bookings yet</h3>
                <p>Start your premium journey by booking your first vehicle</p>
              </div>
            </Card>
          ) : (
            <div className="luxury-bookings-grid">
              {userBookings.map((booking, index) => (
                <Card 
                  key={index}
                  className="luxury-booking-card"
                  hoverable
                  cover={
                    <div className="luxury-card-cover">
                      <img 
                        src={booking.car.image} 
                        alt={booking.car.name}
                        className="luxury-car-image"
                      />
                      <div className="luxury-card-overlay">
                        <Badge.Ribbon text="Premium" color="gold" />
                      </div>
                    </div>
                  }
                >
                  <div className="luxury-card-content">
                    {/* Car Details Section */}
                    <div className="luxury-section">
                      <h3 className="luxury-car-name">{booking.car.name}</h3>
                      <div className="luxury-details-grid">
                        <div className="luxury-detail-item">
                          <ClockCircleOutlined className="luxury-icon" />
                          <span className="luxury-label">Duration</span>
                          <span className="luxury-value">{booking.totalHours} hours</span>
                        </div>
                        <div className="luxury-detail-item">
                          <DollarOutlined className="luxury-icon" />
                          <span className="luxury-label">Rate</span>
                          <span className="luxury-value">${booking.car.rentPerHour}/hr</span>
                        </div>
                      </div>
                    </div>

                    <Divider className="luxury-divider" />

                    {/* Booking Information */}
                    <div className="luxury-section">
                      <div className="luxury-details-grid">
                        <div className="luxury-detail-item">
                          <CalendarOutlined className="luxury-icon" />
                          <span className="luxury-label">From</span>
                          <span className="luxury-value">{booking.bookedTimeSlots.from}</span>
                        </div>
                        <div className="luxury-detail-item">
                          <CalendarOutlined className="luxury-icon" />
                          <span className="luxury-label">To</span>
                          <span className="luxury-value">{booking.bookedTimeSlots.to}</span>
                        </div>
                        <div className="luxury-detail-item">
                          <CreditCardOutlined className="luxury-icon" />
                          <span className="luxury-label">Transaction</span>
                          <span className="luxury-value">{booking.transactionId}</span>
                        </div>
                        <div className="luxury-detail-item">
                          <CalendarOutlined className="luxury-icon" />
                          <span className="luxury-label">Booked</span>
                          <span className="luxury-value">
                            {moment(booking.createdAt).format('MMM DD, YYYY')}
                          </span>
                        </div>
                      </div>
                    </div>

                    <Divider className="luxury-divider" />

                    {/* Total Amount */}
                    <div className="luxury-total-section">
                      <div className="luxury-total-amount">
                        <span className="luxury-total-label">Total Amount</span>
                        <span className="luxury-total-value">${booking.totalAmount}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </Col>
      </Row>

      <style jsx>{`
        .luxury-header {
          text-align: center;
          margin-bottom: 3rem;
          padding: 2rem 0;
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

        .luxury-bookings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 2rem;
          
        }

        .luxury-booking-card {
          border: none;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
          margin-bottom:10px;
        }

        .luxury-booking-card:hover {
          transform: translateY(-18px);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
        }

        .luxury-card-cover {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .luxury-car-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .luxury-booking-card:hover .luxury-car-image {
          transform: scale(1.05);
        }

        .luxury-card-overlay {
          position: absolute;
          top: 0;
          right: 0;
          z-index: 1;
        }

        .luxury-card-content {
          padding: 1.5rem;
        }

        .luxury-section {
          margin-bottom: 1rem;
        }

        .luxury-car-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 1rem;
          text-align: center;
        }

        .luxury-details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1rem;
        }

        .luxury-detail-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          padding: 0.75rem;
          background: rgba(212, 175, 55, 0.05);
          border-radius: 12px;
          border-left: 4px solid #d4af37;
        }

        .luxury-icon {
          font-size: 1.1rem;
          color: #d4af37;
          margin-bottom: 0.25rem;
        }

        .luxury-label {
          font-size: 0.85rem;
          color: #666;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .luxury-value {
          font-size: 1rem;
          color: #1a1a2e;
          font-weight: 600;
        }

        .luxury-divider {
          margin: 1.5rem 0;
          border-color: #e8e8e8;
        }

        .luxury-total-section {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          padding: 1.5rem;
          border-radius: 15px;
          margin-top: 1rem;
        }

        .luxury-total-amount {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .luxury-total-label {
          font-size: 1.1rem;
          color: #ffffff;
          font-weight: 500;
        }

        .luxury-total-value {
          font-size: 1.8rem;
          color: #d4af37;
          font-weight: 700;
        }

        .luxury-empty-state {
          text-align: center;
          padding: 3rem;
          border-radius: 20px;
          background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
          border: none;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .luxury-empty-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .luxury-empty-icon {
          font-size: 4rem;
          color: #d4af37;
        }

        .luxury-empty-content h3 {
          color: #1a1a2e;
          font-size: 1.5rem;
          margin: 0;
        }

        .luxury-empty-content p {
          color: #666;
          margin: 0;
        }

        @media (max-width: 768px) {
          .luxury-bookings-grid {
            grid-template-columns: 1fr;
          }
          
          .luxury-title {
            font-size: 2rem;
          }
          
          .luxury-details-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </DefaultLayout>
  );
}

export default UserBookings;