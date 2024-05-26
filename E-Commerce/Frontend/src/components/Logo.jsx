// import React from 'react'

const Logo = ({ w, h }) => {
  return (
    <>
<svg width={w} height={h} viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
  {/* <!-- Background --> */}
  <rect width="180" height="50" rx="10" ry="10" fill="#ffffff"/>

  {/* <!-- Shopping Basket Icon --> */}
  <g transform="translate(0, 5)">
    <rect x="15" y="15" width="20" height="15" rx="2" ry="2" fill="#ff6600"/>
    <line x1="15" y1="15" x2="35" y2="15" stroke="#ff6600" strokeWidth="4"/>
    <line x1="20" y1="10" x2="20" y2="15" stroke="#ff6600" strokeWidth="2"/>
    <line x1="30" y1="10" x2="30" y2="15" stroke="#ff6600" strokeWidth="2"/>
  </g>

  {/* <!-- Text --> */}
  <text x="45" y="35" fontFamily="Helvetica, sans-serif" fontSize="24" fill="#333">
  ShopSmart
  </text>
</svg>






    </>
  );
};

export default Logo;
