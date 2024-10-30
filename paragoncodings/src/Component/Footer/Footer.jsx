import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#37383C] text-white py-10 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
      {/* Left Section - Contact & Reviews */}
      <div className="w-full md:w-1/3 space-y-6">
        {/* Get in Touch */}
        <div>
          <h3 className="text-lg font-semibold">GET IN TOUCH</h3>
          <p>Contact Us!</p>
          <div className="flex mt-2">
            <input
              type="email"
              placeholder="gmail@example.com"
              className="w-full px-3 py-2 rounded-l-md outline-none text-black"
            />
            <button className="bg-[#73FAF9] px-4 py-2 rounded-r-md font-semibold">
              SEND
            </button>
          </div>
        </div>

        {/* Reviews Section */}
        {/* <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <img src="/clutch.png" alt="Clutch" className="w-8 h-8" />
            <div>
              <p className="text-lg">Clutch</p>
              <p>6 REVIEWS</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <img src="/trustpilot.png" alt="Trustpilot" className="w-8 h-8" />
            <div>
              <p className="text-lg">Trustpilot</p>
              <p>Reviews on Trustpilot</p>
            </div>
          </div>
        </div> */}
      </div>

      {/* Center Section - Social Links */}
      <div className="w-full md:w-1/3 text-center space-y-4">
        <h3 className="text-lg font-semibold">FOLLOW US</h3>
        <div className="flex justify-center space-x-4">
          {/* Social Icons */}
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-google"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>

      {/* Right Section - Contact Information */}
      <div className="w-full md:w-1/3 space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Registered by PSEB</h3>
          <img src="/pseb.png" alt="PSEB" className="w-16 mt-2" />
        </div>
        <div className="space-y-2 text-sm">
          <p><strong>Pakistan</strong></p>
          <p>Phone Number: +92-3251255718</p>
          <p>Mobile Number: +92-306-0711693</p>
          {/* <p>Address: Officert FF-10, City Center, Wah Cantt, Pakistan</p> */}

        

          <p>Email: paragoncodings@gmail.com</p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
