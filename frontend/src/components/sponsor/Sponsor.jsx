import React from 'react'
import "./Sponsor.css"

function Sponsor() {
  return (
    <div className='sponsor'>
      <div className="sponsorContainer">
        <span className='sponsorTitle'>Sponsored</span>
          <div className="sponsorCompany">
            <img 
              src="/assets/sponsor/sponsor1.jpeg" 
              alt="" 
              className='sponsorImg'
            />
            <span className='sponsorCompanyName'>Bagtopia</span>
            <p className='sponsorText'>
              Bagtopia is a trendy and fashionable bag store that offers a wide range of high-quality bags for all occasions. From stylish totes and chic backpacks to elegant clutches and practical travel bags, we have something for everyone. Our products are made from the finest materials and are designed to be both stylish and functional. We strive to provide exceptional customer service and a seamless shopping experience for our customers.
            </p>
          </div>

          <div className="sponsorCompany">
            <img 
              src="/assets/sponsor/sponsor2.jpeg" 
              alt="" 
              className='sponsorImg'
            />
            <span className='sponsorCompanyName'>Nexus Innovations</span>
            <p className='sponsorText'>
              Nexus Innovations is a tech company that develops innovative solutions for businesses to stay ahead in the digital landscape. We provide cutting-edge software and hardware products to help clients streamline operations, improve customer experience, and create new revenue streams.
            </p>
          </div>

          <div className="sponsorCompany">
            <img 
              src="/assets/sponsor/sponsor3.jpeg" 
              alt="" 
              className='sponsorImg'
            />
            <span className='sponsorCompanyName'>Timeless Autos</span>
            <p className='sponsorText'>
              Timeless Autos specializes in vintage and classic cars. Our showroom offers a carefully curated selection of restored and maintained automobiles, with expert assistance in finding your perfect vehicle. We also provide maintenance and repair services to keep your classic car running smoothly, all while providing exceptional customer service.
            </p>
          </div>
      </div>
    </div>
  )
}

export default Sponsor