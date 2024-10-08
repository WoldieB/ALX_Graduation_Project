import React from 'react';
import LowerFooter from '../Components/LowerFooter';
import './Contact.css';
const Contact = () => {
  const clinic_data = [
    {
      id: 1,
      c_day: 'Monday',
      c_time: '11:00 AM-9:00 PM',
    },
    {
      id: 2,
      c_day: 'Tuesday',
      c_time: '11:00 AM-9:00 PM',
    },
    {
      id: 3,
      c_day: 'Wednesday',
      c_time: '11:00 AM-9:00 PM',
    },
    {
      id: 4,
      c_day: 'Thursday',
      c_time: '11:00 AM-9:00 PM',
    },
    {
      id: 5,
      c_day: 'Friday',
      c_time: '11:00 AM-9:00 PM',
    },
    {
      id: 6,
      c_day: 'Saturday',
      c_time: '11:00 AM-9:00 PM',
    },
    {
      id: 7,
      c_day: 'Sunday',
      c_time: '5:00 PM-9:00 PM',
    },
  ];
  return (
    <>
      <div className="contact_section_container" id="contact-us">
        <div className="container_container">
          <div className="google_map_location">
            <div className="gmap">
              <iframe
                title="gmap_location"
                class="gmap_iframe"
                width="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://www.google.com/maps/place/Mulu+wangel+sefera/@9.0343212,38.6483899,14.75z/data=!4m15!1m8!3m7!1s0x164b87f1be1c3391:0x84c15a51dd1984af!2sBurayu!3b1!8m2!3d9.0341439!4d38.6618889!16s%2Fg%2F11cjjzxv8_!3m5!1s0x164c79004e6c0a93:0x486ea6cecfcb822e!8m2!3d9.0314894!4d38.6510734!16s%2Fg%2F11y6g51lkg?entry=ttu"
              ></iframe>
            </div>
          </div>
          <div className="basic_contact_user_form">
            <div className="clinic_time_table">
              <h2 style={{ fontFamily: 'Poppins' }}>
                <span>
                  <i className="fa-solid fa-angles-right"></i>
                </span>
                OPD Hours
              </h2>
            </div>
            <hr />
            {clinic_data.map((e, index) => (
              <div className="clinic_timing" key={index}>
                <p className="current_day">{e.c_day}</p>
                <p className="current_day_timing">{e.c_time}</p>
              </div>
            ))}
            <div className="d_and_c">
              <div className="direction_to_clinic">
                <a
                  href="https://www.google.com/maps/place/Mulu+wangel+sefera/@9.0343212,38.6483899,14.75z/data=!4m15!1m8!3m7!1s0x164b87f1be1c3391:0x84c15a51dd1984af!2sBurayu!3b1!8m2!3d9.0341439!4d38.6618889!16s%2Fg%2F11cjjzxv8_!3m5!1s0x164c79004e6c0a93:0x486ea6cecfcb822e!8m2!3d9.0314894!4d38.6510734!16s%2Fg%2F11y6g51lkg?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Clinic Direction
                </a>
              </div>
              <div className="call_to_clinic">
                <a href="tel:9892729909">Call Clinic</a>
              </div>
            </div>
          </div>
        </div>
        <LowerFooter />

        <div className="copyright_footer">
          <p>
            <span>
              <i className="fa-regular fa-copyright"></i>
            </span>
            2024
            <a href="/" id="clinic_name">
              Home Dental Clinic.
            </a>
            All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
