// import { Col, Row, Divider, DatePicker, Checkbox, Modal } from "antd";
// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import DefaultLayout from "../components/DefaultLayout";
// import Spinner from "../components/Spinner";
// import { getAllCars } from "../redux/actions/carsActions";
// import moment from "moment";
// import { bookCar } from "../redux/actions/bookingActions";
// import StripeCheckout from "react-stripe-checkout";
// import AOS from 'aos';
// import {
//   useLoaderData,
// } from "react-router-dom";

// import 'aos/dist/aos.css'; // You can also use <link> for styles
// const { RangePicker } = DatePicker;
// function BookingCar() {
//   const match = useLoaderData();
//   const { cars } = useSelector((state) => state.carsReducer);
//   const { loading } = useSelector((state) => state.alertsReducer);
//   const [car, setcar] = useState({});
//   const dispatch = useDispatch();
//   const [from, setFrom] = useState();
//   const [to, setTo] = useState();
//   const [totalHours, setTotalHours] = useState(0);
//   const [driver, setdriver] = useState(false);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     if (cars.length == 0) {
//       dispatch(getAllCars());
//     } else {
//       setcar(cars.find((o) => o._id == match));
//     }
//   }, [cars]);

//   useEffect(() => {
//     setTotalAmount(totalHours * car.rentPerHour);
//     if (driver) {
//       setTotalAmount(totalAmount + 30 * totalHours);
//     }
//   }, [driver, totalHours]);

//   function selectTimeSlots(values) {
//     setFrom(moment(values[0]).format("MMM DD yyyy HH:mm"));
//     setTo(moment(values[1]).format("MMM DD yyyy HH:mm"));

//     setTotalHours(values[1].diff(values[0], "hours"));
//   }

  

//   function onToken(token){
//     const reqObj = {
//         token,
//         user: JSON.parse(localStorage.getItem("user"))._id,
//         car: car._id,
//         totalHours,
//         totalAmount,
//         driverRequired: driver,
//         bookedTimeSlots: {
//           from,
//           to,
//         },
//       };
  
//       dispatch(bookCar(reqObj));
//   }

//   return (
//     <DefaultLayout>
//       {loading && <Spinner />}
//       <Row
//         justify="center"
//         className="d-flex align-items-center"
//         style={{ minHeight: "90vh" }}
//       >
//         <Col lg={10} sm={24} xs={24} className='p-3'>
//           <img src={car.image} className="carimg2 bs1 w-100" data-aos='flip-left' data-aos-duration='1500'/>
//         </Col>

//         <Col lg={10} sm={24} xs={24} className="text-right">
//           <Divider type="horizontal" dashed>
//             Car Info
//           </Divider>
//           <div style={{ textAlign: "right" }}>
//             <p>{car.name}</p>
//             <p>{car.rentPerHour} Rent Per hour /-</p>
//             <p>Fuel Type : {car.fuelType}</p>
//             <p>Max Persons : {car.capacity}</p>
//           </div>

//           <Divider type="horizontal" dashed>
//             Select Time Slots
//           </Divider>
//           <RangePicker
//             showTime={{ format: "HH:mm" }}
//             format="MMM DD yyyy HH:mm"
//             onChange={selectTimeSlots}
//           />
//           <br />
//           <button
//             className="btn1 mt-2"
//             onClick={() => {
//               setShowModal(true);
//             }}
//           >
//             See Booked Slots
//           </button>
//           {from && to && (
//             <div>
//               <p>
//                 Total Hours : <b>{totalHours}</b>
//               </p>
//               <p>
//                 Rent Per Hour : <b>{car.rentPerHour}</b>
//               </p>
//               <Checkbox
//                 onChange={(e) => {
//                   if (e.target.checked) {
//                     setdriver(true);
//                   } else {
//                     setdriver(false);
//                   }
//                 }}
//               >
//                 Driver Required
//               </Checkbox>

//               <h3>Total Amount : {totalAmount}</h3>

//               <StripeCheckout
//                 shippingAddress
//                 token={onToken}
//                 currency='inr'
//                 amount={totalAmount * 100}
//                 stripeKey="pk_test_51NFtVGSAZAXtdYSkpJntFLfuU3dQNlk1BVqldJWCWQUyDqAtoE1wHVhRCB2GEnGurggdZOd1L08afXnaMN0H7qcO00yUPQevQp"
//               >
//                   <button className="btn1">
//                 Book Now
//               </button>
//               </StripeCheckout>

              
//             </div>
//           )}
//         </Col>

//         {car.name && (
//           <Modal
//             visible={showModal}
//             closable={false}
//             footer={false}
//             title="Booked time slots"
//           >
//             <div className="p-2">
//               {car.bookedTimeSlots.map((slot) => {
//                 return (
//                   <button className="btn1 mt-2">
//                     {slot.from} - {slot.to}
//                   </button>
//                 );
//               })}

//               <div className="text-right mt-5">
//                 <button
//                   className="btn1"
//                   onClick={() => {
//                     setShowModal(false);
//                   }}
//                 >
//                   CLOSE
//                 </button>
//               </div>
//             </div>
//           </Modal>
//         )}
//       </Row>
//     </DefaultLayout>
//   );
// }

// export default BookingCar;

import { Col, Row, Divider, DatePicker, Checkbox, Modal } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import Spinner from "../components/Spinner";
import { getAllCars } from "../redux/actions/carsActions";
import moment from "moment";
import { bookCar } from "../redux/actions/bookingActions";
import StripeCheckout from "react-stripe-checkout";
import { useLoaderData } from "react-router-dom";
import 'aos/dist/aos.css';

const { RangePicker } = DatePicker;

function BookingCar() {
  const match = useLoaderData();
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [car, setcar] = useState({});
  const dispatch = useDispatch();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [totalHours, setTotalHours] = useState(0);
  const [driver, setdriver] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (cars.length === 0) {
      dispatch(getAllCars());
    } else {
      setcar(cars.find((o) => o._id === match));
    }
  }, [cars, dispatch, match]);

  useEffect(() => {
    let baseAmount = totalHours * car.rentPerHour;
    if (driver) baseAmount += 30 * totalHours;
    setTotalAmount(baseAmount);
  }, [car.rentPerHour, driver, totalHours]);

  function selectTimeSlots(values) {
    setFrom(moment(values[0]).format("MMM DD yyyy HH:mm"));
    setTo(moment(values[1]).format("MMM DD yyyy HH:mm"));
    setTotalHours(values[1].diff(values[0], "hours"));
  }

  function onToken(token) {
    const reqObj = {
      token,
      user: JSON.parse(localStorage.getItem("user"))._id,
      car: car._id,
      totalHours,
      totalAmount,
      driverRequired: driver,
      bookedTimeSlots: {
        from,
        to,
      },
    };
    dispatch(bookCar(reqObj));
  }

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <Row justify="center" className="lux-booking-row">
        <Col lg={10} sm={24} xs={24} className='p-3'>
          <img src={car.image} className="lux-car-image" data-aos='flip-left' data-aos-duration='1500' alt='Car'/>
        </Col>

        <Col lg={10} sm={24} xs={24} className="lux-info-col">
          <Divider orientation="center" className="lux-divider">Car Info</Divider>
          <div className="lux-car-info">
            <p className="lux-text"><strong>{car.name}</strong></p>
            <p className="lux-text">Rent Per Hour: <b>${car.rentPerHour}</b></p>
            <p className="lux-text">Fuel Type: {car.fuelType}</p>
            <p className="lux-text">Capacity: {car.capacity} persons</p>
          </div>

          <Divider orientation="center" className="lux-divider">Select Time Slots</Divider>
          <RangePicker
            showTime={{ format: "HH:mm" }}
            format="MMM DD yyyy HH:mm"
            onChange={selectTimeSlots}
            className="lux-picker"
          />

          <button className="lux-btn mt-3" onClick={() => setShowModal(true)}>
            See Booked Slots
          </button>

          {from && to && (
            <div className="lux-confirm-box mt-4">
              <p>Total Hours: <b>{totalHours}</b></p>
              <p>Rent Per Hour: <b>{car.rentPerHour}</b></p>
              <Checkbox onChange={(e) => setdriver(e.target.checked)}>
                Driver Required (+$30/hr)
              </Checkbox>
              <h3 className="mt-3">Total Amount: <b>${totalAmount}</b></h3>

              <StripeCheckout
                shippingAddress
                token={onToken}
                currency='inr'
                amount={totalAmount * 100}
                stripeKey="pk_test_51NFtVGSAZAXtdYSkpJntFLfuU3dQNlk1BVqldJWCWQUyDqAtoE1wHVhRCB2GEnGurggdZOd1L08afXnaMN0H7qcO00yUPQevQp"
              >
                <button className="lux-btn mt-2">Book Now</button>
              </StripeCheckout>
            </div>
          )}
        </Col>

        {car.name && (
          <Modal
            open={showModal}
            closable={false}
            footer={null}
            title="Booked time slots"
          >
            <div className="lux-modal-body">
              {car.bookedTimeSlots.map((slot, index) => (
                <button key={index} className="lux-slot-btn">
                  {slot.from} - {slot.to}
                </button>
              ))}
              <div className="text-right mt-4">
                <button className="lux-btn" onClick={() => setShowModal(false)}>
                  CLOSE
                </button>
              </div>
            </div>
          </Modal>
        )}
      </Row>

      <style jsx>{`
        .lux-booking-row {
          min-height: 90vh;
          padding: 2rem 1rem;
        }

        .lux-car-image {
          width: 100%;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        .lux-info-col {
          text-align: left;
          padding: 1rem;
        }

        .lux-divider {
          font-size: 1.25rem;
          color: #1a1a2e;
          font-weight: 600;
          margin: 1rem 0;
        }

        .lux-car-info p {
          margin: 0.25rem 0;
          font-size: 1.1rem;
          color: #333;
        }

        .lux-picker {
          width: 100%;
          border-radius: 12px;
          padding: 0.5rem;
        }

        .lux-btn {
          background: linear-gradient(135deg, #d4af37 0%, #f4d03f 100%);
          border: none;
          border-radius: 10px;
          padding: 0.6rem 1.2rem;
          color: white;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: 0.3s;
        }

        .lux-btn:hover {
          transform: translateY(-2px);
          background: linear-gradient(135deg, #e6c248 0%, #f7d94c 100%);
        }

        .lux-confirm-box {
          background: #f9f9f9;
          padding: 1rem;
          border-radius: 12px;
          margin-top: 1rem;
        }

        .lux-modal-body {
          padding: 1rem;
        }

        .lux-slot-btn {
          background-color: #eee;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          border: none;
          margin-bottom: 0.5rem;
          display: block;
          width: 100%;
          text-align: center;
        }

        @media (max-width: 768px) {
          .lux-info-col {
            text-align: center;
          }
        }
      `}</style>
    </DefaultLayout>
  );
}

export default BookingCar;