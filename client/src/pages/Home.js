// import React , {useState,useEffect} from 'react'
// import { useSelector , useDispatch } from 'react-redux'
// import DefaultLayout from '../components/DefaultLayout'
// import { getAllCars } from '../redux/actions/carsActions'
// import { Col, Row , Divider , DatePicker, Checkbox} from 'antd'
// import {Link} from 'react-router-dom'
// import Spinner from '../components/Spinner';
// import moment from 'moment'
// const {RangePicker} = DatePicker
// function Home() {
//     const {cars} = useSelector(state=>state.carsReducer)
//     const {loading} = useSelector(state=>state.alertsReducer)
//     const [totalCars , setTotalcars] = useState([])
//     const dispatch = useDispatch()
    

//     useEffect(() => {
//         dispatch(getAllCars())
//     }, [])

//     useEffect(() => {

//         setTotalcars(cars)
        
//     }, [cars])


//     function setFilter(values){

//         var selectedFrom = moment(values[0] , 'MMM DD yyyy HH:mm')
//         var selectedTo = moment(values[1] , 'MMM DD yyyy HH:mm')

//         var temp=[]

//         for(var car of cars){

//               if(car.bookedTimeSlots.length == 0){
//                   temp.push(car)
//               }
//               else{

//                    for(var booking of car.bookedTimeSlots) {

//                        if(selectedFrom.isBetween(booking.from , booking.to) ||
//                        selectedTo.isBetween(booking.from , booking.to) || 
//                        moment(booking.from).isBetween(selectedFrom , selectedTo) ||
//                        moment(booking.to).isBetween(selectedFrom , selectedTo)
//                        )
//                        {

//                        }
//                        else{
//                            temp.push(car)
//                        }

//                    }

//               }

//         }


//         setTotalcars(temp)


//     }

//     return (
//         <DefaultLayout>

//              <Row className='mt-3' justify='center'>
                 
//                  <Col lg={20} sm={24} className='d-flex justify-content-left'>

//                      <RangePicker showTime={{format: 'HH:mm'}} format='MMM DD yyyy HH:mm' onChange={setFilter}/>
                 
//                  </Col>

//              </Row>

//               {loading === true && (<Spinner/>)}


              
//               <Row justify='center' gutter={16}>

//                    {totalCars.map(car=>{
//                        return <Col lg={5} sm={24} xs={24}>
//                             <div className="car p-2 bs1">
//                                <img src={car.image} className="carimg"/>

//                                <div className="car-content d-flex align-items-center justify-content-between">

//                                     <div className='text-left pl-2'>
//                                         <p>{car.name}</p>
//                                         <p> Rent Per Hour {car.rentPerHour} /-</p>
//                                     </div>

//                                     <div>
//                                         <button className="btn1 mr-2"><Link to={`/booking/${car._id}`}>Book Now</Link></button>
//                                     </div>

//                                </div>
//                             </div>
//                        </Col>
//                    })}

//               </Row>

//         </DefaultLayout>
//     )
// }

// export default Home

import React , {useState,useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { getAllCars } from '../redux/actions/carsActions'
import { Col, Row , Divider , DatePicker, Checkbox} from 'antd'
import {Link} from 'react-router-dom'
import Spinner from '../components/Spinner';
import moment from 'moment'
const {RangePicker} = DatePicker

function Home() {
    const {cars} = useSelector(state=>state.carsReducer)
    const {loading} = useSelector(state=>state.alertsReducer)
    const [totalCars , setTotalcars] = useState([])
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(getAllCars())
    }, [])

    useEffect(() => {
        setTotalcars(cars)
    }, [cars])


    function setFilter(values){
        var selectedFrom = moment(values[0] , 'MMM DD yyyy HH:mm')
        var selectedTo = moment(values[1] , 'MMM DD yyyy HH:mm')

        var temp=[]

        for(var car of cars){
              if(car.bookedTimeSlots.length === 0){
                  temp.push(car)
              }
              else{
                   for(var booking of car.bookedTimeSlots) {
                       if(selectedFrom.isBetween(booking.from , booking.to) ||
                       selectedTo.isBetween(booking.from , booking.to) || 
                       moment(booking.from).isBetween(selectedFrom , selectedTo) ||
                       moment(booking.to).isBetween(selectedFrom , selectedTo)
                       )
                       {
                       }
                       else{
                           temp.push(car)
                       }
                   }
              }
        }

        setTotalcars(temp)
    }

    return (
        <DefaultLayout>
            <div className="luxury-home-container">
                 {/* Hero Section */}
                <div className="hero-section">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Experience <span className="luxury-accent">Luxury</span> on Every Journey
                        </h1>
                        <p className="hero-subtitle">
                            Premium car rental service for discerning professionals and travelers
                        </p>
                    </div>
                    <div className="hero-overlay"></div>
                </div>

                {/* Filter Section */}
                <div className="filter-section">
                    <div className="filter-container">
                        <h3 className="filter-title">Select Your Travel Dates</h3>
                        <Row className="filter-row" justify="center">
                            <Col lg={20} sm={24} className="filter-col">
                                <div className="date-picker-wrapper">
                                    <RangePicker 
                                        showTime={{format: 'HH:mm'}} 
                                        format='MMM DD yyyy HH:mm' 
                                        onChange={setFilter}
                                        className="luxury-date-picker"
                                        size="large"
                                        placeholder={['Pickup Date & Time', 'Return Date & Time']}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                {loading === true && (<Spinner/>)}

                {/* Cars Section */}
                <div className="cars-section">
                    <div className="section-header">
                        <h2 className="section-title">Our Premium Fleet</h2>
                        <p className="section-subtitle">Choose from our collection of luxury vehicles</p>
                    </div>
                    
                    <Row justify="center" gutter={[24, 24]} className="cars-grid">
                        {totalCars.map(car=>{
                            return (
                                <Col lg={6} md={8} sm={12} xs={24} key={car._id}>
                                    <div className="luxury-car-card">
                                        <div className="car-image-container">
                                            <img src={car.image} className="luxury-car-image" alt={car.name}/>
                                            <div className="car-overlay">
                                                <div className="availability-badge">Available</div>
                                            </div>
                                        </div>

                                        <div className="car-details">
                                            <div className="car-info">
                                                <h3 className="car-name">{car.name}</h3>
                                                <div className="car-price">
                                                    <span className="currency">₹</span>
                                                    <span className="amount">{car.rentPerHour}</span>
                                                    <span className="period">/hour</span>
                                                </div>
                                            </div>

                                            <div className="car-features">
                                                <div className="feature-item">
                                                    <span className="feature-icon">⚡</span>
                                                    <span>Premium</span>
                                                </div>
                                                <div className="feature-item">
                                                    <span className="feature-icon">🛡️</span>
                                                    <span>Insured</span>
                                                </div>
                                                <div className="feature-item">
                                                    <span className="feature-icon">🏆</span>
                                                    <span>Luxury</span>
                                                </div>
                                            </div>

                                            <div className="car-actions">
                                                <button className="luxury-book-btn">
                                                    <Link to={`/booking/${car._id}`} className="book-link">
                                                        Reserve Now
                                                    </Link>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </div>

            <style jsx>{`
                .luxury-home-container {
                    background: linear-gradient(135deg,rgb(0, 0, 0) 0%, #1a1a1a 50%, #2a2a2a 100%);
                    min-height: 100vh;
                    color: #ffffff;
                }

                .hero-section {
                    position: relative;
                    height: 60vh;
                    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }

                .hero-content {
                    text-align: center;
                    z-index: 2;
                    position: relative;
                }

                .hero-title {
                    font-size: 3.5rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                    background: linear-gradient(45deg, #d4af37, #ffd700, #b8860b);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-shadow: 0 0 30px rgba(212, 175, 55, 0.5);
                }

                .luxury-accent {
                    color: #d4af37;
                }

                .hero-subtitle {
                    font-size: 1.3rem;
                    color: #cccccc;
                    font-weight: 300;
                    letter-spacing: 0.5px;
                }

                .hero-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
                }

                .filter-section {
                    background: linear-gradient(135deg,rgb(81, 92, 76) 0%, #16213e 50%,rgb(36, 59, 40) 100%);
                    backdrop-filter: blur(20px);
                    padding: 3rem 0;
                    border-top: 1px solid rgba(212, 175, 55, 0.2);
                    border-bottom: 1px solid rgba(212, 175, 55, 0.2);
                }

                .filter-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
    
                }

                .filter-title {
                    text-align: center;
                    font-size: 1.8rem;
                    color: #d4af37;
                    margin-bottom: 2rem;
                    font-weight: 600;
                    text-shadow: 0 0 30px rgba(171, 150, 81, 0.5);
                
                }

                .filter-row {
                    margin-top: 0;
                }

                .filter-col {
                    display: flex;
                    justify-content: center;
                    
                }

                .date-picker-wrapper {
                    background: linear-gradient(135deg,rgb(163, 163, 175) 0%,rgb(226, 230, 240) 50%,rgb(203, 203, 225) 100%);
                    border: 2px solid rgba(154, 193, 104, 0.3);
                    border-radius: 15px;
                    padding: 1rem;
                    transition: all 0.3s ease;
                    
                }

                .date-picker-wrapper:hover {
                    border-color: rgba(212, 175, 55, 0.6);
                    box-shadow: 0 0 20px rgba(212, 175, 55, 0.2);
                    
                }

                .luxury-date-picker {
                    background: transparent !important;
                    border: none !important;
                    color: #ffffff !important;
                    font-size: 1.1rem !important;
                    padding: 0.5rem 1rem !important;
                   
                }

                .cars-section {
                    padding: 4rem 2rem;
                    max-width: 1400px;
                    margin: 0 auto;
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 3rem;
                }

                .section-title {
                    font-size: 2.5rem;
                    color: #d4af37;
                    margin-bottom: 1rem;
                    font-weight: 700;
                }

                .section-subtitle {
                    font-size: 1.2rem;
                    color: #cccccc;
                    font-weight: 300;
                }

                .cars-grid {
                    margin-top: 2rem;
                }

                .luxury-car-card {
                    background: linear-gradient(145deg, #1a1a2e 0%, #16213e 100%);
                    border-radius: 20px;
                    overflow: hidden;
                    transition: all 0.4s ease;
                    border: 1px solid rgba(212, 175, 55, 0.2);
                    position: relative;
                    height: 100%;
                }

                .luxury-car-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(212, 175, 55, 0.3);
                    border-color: rgba(212, 175, 55, 0.5);
                }

                .car-image-container {
                    position: relative;
                    height: 200px;
                    overflow: hidden;
                }

                .luxury-car-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.4s ease;
                }

                .luxury-car-card:hover .luxury-car-image {
                    transform: scale(1.1);
                }

                .car-overlay {
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

                .availability-badge {
                    background: linear-gradient(45deg, #00ff88, #00cc6a);
                    color: #000;
                    padding: 0.3rem 0.8rem;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .car-details {
                    padding: 1.5rem;
                }

                .car-info {
                    margin-bottom: 1rem;
                }

                .car-name {
                    font-size: 1.3rem;
                    font-weight: 600;
                    color: #ffffff;
                    margin-bottom: 0.5rem;
                }

                .car-price {
                    display: flex;
                    align-items: baseline;
                    gap: 0.2rem;
                    color: #d4af37;
                    font-weight: 600;
                }

                .currency {
                    font-size: 1rem;
                }

                .amount {
                    font-size: 1.5rem;
                    font-weight: 700;
                }

                .period {
                    font-size: 0.9rem;
                    color: #cccccc;
                }

                .car-features {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }

                .feature-item {
                    display: flex;
                    align-items: center;
                    gap: 0.3rem;
                    font-size: 0.8rem;
                    color: #cccccc;
                }

                .feature-icon {
                    font-size: 1rem;
                }

                .car-actions {
                    display: flex;
                    justify-content: center;
                }

                .luxury-book-btn {
                    background: linear-gradient(45deg, #d4af37, #ffd700);
                    border: none;
                    border-radius: 25px;
                    padding: 0.8rem 2rem;
                    font-weight: 600;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
                    width: 100%;
                }

                .luxury-book-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.5);
                    background: linear-gradient(45deg, #ffd700, #d4af37);
                }

                .book-link {
                    color: #000;
                    text-decoration: none;
                    font-weight: 600;
                }

                .book-link:hover {
                    color: #000;
                }

                @media (max-width: 768px) {
                    .hero-title {
                        font-size: 2.5rem;
                    }
                    
                    .hero-subtitle {
                        font-size: 1.1rem;
                    }
                    
                    .section-title {
                        font-size: 2rem;
                    }
                    
                    .cars-section {
                        padding: 2rem 1rem;
                    }
                }
            `}</style>
        </DefaultLayout>
    )
}

export default Home