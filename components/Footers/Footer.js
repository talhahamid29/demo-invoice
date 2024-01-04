import React from 'react'

const Footer = (isDrawerOpen) => {
  return (
    <div style={{ marginBottom: 0 ,marginTop:50 }}>
      <div style={{ height:40}} className="bg-white shadow">
        <div
          className="contianer bg-white pl-16 pr-10 "
          style={{ marginLeft:400}}
        >
          <div className="flex mt-1 " style={{fontSize:13}}>Copy Right Oxcytech Pvt Ltd</div>
        </div>
      </div>
    </div>
  );
}

export default Footer
