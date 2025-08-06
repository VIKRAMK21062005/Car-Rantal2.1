// import React from "react";
// import { Menu, Dropdown, Button, Row, Col } from "antd";
// import { Link } from "react-router-dom";

// function DefaultLayout(props) {
//   // ✅ Safely parse user from localStorage
//   let user = null;
//   try {
//     user = JSON.parse(localStorage.getItem("user"));
//   } catch (err) {
//     user = null;
//   }

//   const menu = (
//     <Menu>
//       <Menu.Item>
//         <a href="/">Home</a>
//       </Menu.Item>
//       <Menu.Item>
//         <a href="/userbookings">Bookings</a>
//       </Menu.Item>
//       <Menu.Item>
//         <a href="/admin">Admin</a>
//       </Menu.Item>
//       <Menu.Item
//         onClick={() => {
//           localStorage.removeItem("user");
//           window.location.href = "/login";
//         }}
//       >
//         <li style={{ color: "slateblue" }}>Logout</li>
//       </Menu.Item>
//     </Menu>
//   );

//   return (
//     <div>
//       <div className="header bs1">
//         <Row gutter={16} justify="center">
//           <Col lg={20} sm={24} xs={24}>
//             <div className="d-flex justify-content-between align-items-center">
//               <h1>
//                 <b>
//                   <Link to="/" style={{ color: "slateblue" }}>
//                     Cars Rental
//                   </Link>
//                 </b>
//               </h1>

//               {/* ✅ Conditionally render username or login button */}
//               {user && user.username ? (
//                 <Dropdown overlay={menu} placement="bottomCenter">
//                   <Button>{user.username}</Button>
//                 </Dropdown>
//               ) : (
//                 <Link to="/login">
//                   <Button>Login</Button>
//                 </Link>
//               )}
//             </div>
//           </Col>
//         </Row>
//       </div>

//       <div className="content">{props.children}</div>

//       <div className="footer text-center">
//         <hr />
//         <p>Designed and Developed By Vikram 🪽</p>
//       </div>
//     </div>
//   );
// }

// export default DefaultLayout;

import React from "react";
import { Menu, Dropdown, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined, DownOutlined } from "@ant-design/icons";

function DefaultLayout(props) {
  let user = null;
  try {
    user = JSON.parse(localStorage.getItem("user"));
  } catch (err) {
    user = null;
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/userbookings">My Bookings</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/admin">Admin</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <div className="lux-header">
        <Row justify="center">
          <Col lg={20} sm={24} xs={24}>
            <div className="lux-nav">
              <div className="lux-logo">
                <Link to="/">Car Rental</Link>
              </div>

              <div className="lux-menu">
                <Link to="/">Home</Link>
                <Link to="/userbookings">My Bookings</Link>
                <Link to="/admin">Admin</Link>

                {user && user.username && (
                  <Dropdown overlay={menu} placement="bottomRight">
                    <Button icon={<UserOutlined />} type="text">
                      {user.username} <DownOutlined />
                    </Button>
                  </Dropdown>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="content">{props.children}</div>

      <div className="footer text-center">
        <p>Designed and Developed By Vikram 🪽</p>
      </div>

      <style jsx>{`
        .lux-header {
          background:rgb(210, 233, 154);
          padding: 1rem 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .lux-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .lux-logo a {
          font-size: 1.8rem;
          font-weight: bold;
          color: #d4af37;
          text-decoration: none;
        }

        .lux-menu {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .lux-menu a {
          color: #fff;
          font-weight: 500;
          font-size: 1rem;
          text-decoration: none;
           transition: 0.3s ease;
        }

        .lux-menu a:hover {
          color: #d4af37;
          border-bottom: 3px solid rgb(30, 129, 234);/* or 'blue' if you want solid blue */
        }
        .lux-menu a:hover {
          color: #d4af37;
        }
      `}</style>
    </div>
  );
}

export default DefaultLayout;
