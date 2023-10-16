import React from 'react';
import './Sidebar.css';
import { FaCentercode, FaCreativeCommonsNd ,FaCube,FaGrav,FaAward,FaMoneyBillAlt,FaRegQuestionCircle} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-div">
        <div className="sidebar-title">
          <FaCentercode className="sidebar-icon title-icon" />
          <span className='heading'> Dashboard</span>
        </div>
        <div className="sidebar-links">
          <ul className="list-unstyled">
            <li>
              <div className="sidebar-child">
                <FaCreativeCommonsNd className="sidebar-icon" />
                <span className='titles'>Dashboard</span>
              </div>
            </li>
            <li>
              <div className="sidebar-child">
                <FaCube className="sidebar-icon" />
                <span className='titles'>Products</span>
              </div>
            </li>
            <li>
              <div className="sidebar-child">
                <FaGrav className="sidebar-icon" />
                <span className='titles'>Customers</span>
              </div>
            </li>
            <li>
              <div className="sidebar-child">
                <FaMoneyBillAlt className="sidebar-icon" />
                <span className='titles'>Income</span>
              </div>
            </li>
            <li>
              <div className="sidebar-child">
                <FaAward className="sidebar-icon" />
                <span className='titles'>Promote</span>
              </div>
            </li>
            <li>
              <div className="sidebar-child">
                <FaRegQuestionCircle className="sidebar-icon" />
                <span className='titles'>Help</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-profile">
        <img src="https://img.freepik.com/premium-photo/cartoon-boy-with-smile-his-face-generative-ai_974539-1434.jpg" alt="User Profile" className="img-fluid" />
        <div className="profile-name">
          <p className="name">Profile name</p>
          <p className="designation">Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
