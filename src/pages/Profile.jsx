import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../images/profile.png'


function Profile() {
  return (
    <>
      <div className="container-fluid p-5 ">
        <div className='d-flex justify-content-between border-bottom mt-5'>
            <h5 className='py-2'>Profile</h5>
            <Link className='text-decoration-none' style={{fontSize:"14px",color:"lightblue"}}><p>Password & Security</p></Link>
        </div>
        
        
        <div className="d-flex border-bottom py-5">
          <div className='d-flex justify-content-center flex-column'>
            <img src={profile} alt="no image" width={'120px'}/>
            <label htmlFor='profile' className='pt-2 d-flex justify-content-center'>
              <input type="file" id='profile' className='' style={{display:"none"}} />
              <span style={{fontSize:"14px",color:"lightblue"}}>change photo</span>
            </label>
          </div>
          <div className='d-flex justify-content-center align-items-center p-4'>
            <h4 className='py-3'>Demo User </h4>
          </div>
        </div>

        <div className="row mb-5">
            <div className="col-md-7">
              <h4 className='border-bottom py-3'>Account</h4>
              <div className="d-flex justify-content-between me-5 pt-3">
                <div>
                  <p style={{fontSize:"17px"}}>Support code</p>
                  <p style={{fontSize:"17px"}}>E-mail</p>
                  <p style={{fontSize:"17px"}}>PAN</p>
                  <p style={{fontSize:"17px"}}>Phone</p>
                  <p style={{fontSize:"17px"}}>Demat (BO)</p>
                  <p style={{fontSize:"17px"}}>Segments</p>
                  <p style={{fontSize:"17px"}}>Demat authorisation</p>
                </div>
                <div>
                  <p style={{fontSize:"15px",paddingTop:"3px",color:'lightblue'}}>View</p>
                  <p style={{fontSize:"15px",paddingTop:"3px"}}>demo@zerodha.com</p>
                  <p style={{fontSize:"15px",paddingTop:"3px"}}>*123C</p>
                  <p style={{fontSize:"15px",paddingTop:"3px"}}>*1234</p>
                  <p style={{fontSize:"15px",paddingTop:"3px",color:'lightblue'}}>1200000000011111</p>
                  <p style={{fontSize:"15px",paddingTop:"3px",color:'lightblue'}}>NFO, MF, CDS, MCX, BSE, NSE</p>
                  <p style={{fontSize:"15px",paddingTop:"3px",color:'lightblue'}}>POA</p>
                </div>
                
              </div>
              
            </div>
            <div className="col-md-5">
              <h4 className='border-bottom py-3'>Bank Accounts</h4>
              <div className="d-flex justify-content-between me-5 pt-3">
                <div>
                  <p style={{fontSize:"17px"}}>*1234</p>
                </div>
                
              </div>
            </div>
        </div>
         
      </div>
    </>
  )
}

export default Profile