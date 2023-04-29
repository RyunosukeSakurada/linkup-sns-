import React from 'react'
import "./Sponsor.css"

function Sponsor() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className='sponsor'>
      <div className="sponsorContainer">
        <span className='sponsorTitle'>Sponsored</span>
          <div className="sponsorCompany">
            <img 
              src={PUBLIC_FOLDER + "sponsor/sponsor1.jpg"}
              alt="" 
              className='sponsorImg'
            />
            <span className='sponsorCompanyName'>Lunaire Apparel</span>
            <p className='sponsorText'>
            Lunaire Apparel is a fashion brand that offers high-quality and unique clothing with innovative designs. We prioritize sustainability and strive to make a positive impact on the environment. At Lunaire Apparel, we aim to take your fashion style to the next level.
            </p>
          </div>

          <div className="sponsorCompany">
            <img 
              src={PUBLIC_FOLDER + "sponsor/sponsor2.jpg"}
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
              src={PUBLIC_FOLDER + "sponsor/sponsor3.jpg"}
              alt="" 
              className='sponsorImg'
            />
            <span className='sponsorCompanyName'>TechVision</span>
            <p className='sponsorText'>
            TechVision provides innovative and high-quality IT solutions, specializing in web development, custom software development, and AI solutions. We promise to use the latest technologies to contribute to the growth of your business. TechVision strives for your success.
            </p>
          </div>
      </div>
    </div>
  )
}

export default Sponsor