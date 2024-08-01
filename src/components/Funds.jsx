import { faCircleInfo, faCircleNotch, faClock, faDroplet, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import upi from '../assets/upi.png';

function Funds() {
  return (
    <div className='container-fluid'>
      
      <div
        className='mt-2 ms-2 p-1'
        style={{
          borderColor: '#f57f17',
          borderWidth: 2,
          borderStyle: 'solid',
          backgroundColor: '#fff176'
        }}
      >
        <p style={{ color: 'black' }}>
          <FontAwesomeIcon 
            icon={faTriangleExclamation} 
            style={{ color: "#d9b120", marginRight: '15px' }} 
          />
          This is a demo platform with dummy data. 
          <span style={{ color: '#0d47a1', fontWeight: '600' }}>
            Signup now 
          </span> 
           to access the live platform
        </p>
      </div>

     
      <div className="row mt-3">
        <div className="col-md-6">
          
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <p className='mt-2' style={{ fontSize: '13px' }}>
            Instant, zero-cost fund transfers with 
            <img src={upi} alt="UPI" style={{ marginLeft: '3px', width: '23px' }} />
          </p>
          <div className='ms-auto'>
            <button className='btn btn-success border-0 me-2'>Add funds</button>
            <button className='btn btn-info border-0'>Withdraw</button>
          </div>
        </div>
      </div>

      
      <div className="row mt-5">
       
        <div className="col-md-6">
          <div className="d-flex align-items-center mb-3">
            <p className='me-3 mb-0'>
              <FontAwesomeIcon icon={faClock} className='me-2' />
              Enquiry
            </p>
            <div className='ms-auto d-flex'>
              <p className='me-3 mb-0'>
                <FontAwesomeIcon icon={faCircleNotch} className='me-2' />
                View statement
              </p>
              <p className='mb-0'>
                <FontAwesomeIcon icon={faCircleInfo} className='me-2' />
                Help
              </p>
            </div>
          </div>
          <div className="table-responsive">
            <table className='table'>
              <tbody>
                <tr>
                  <td>Available margin</td>
                  <td style={{ fontSize: '30px' }}>1,00,000.00</td>
                </tr>
                <tr>
                  <td>Used margin</td>
                  <td style={{ fontSize: '30px' }}>0.00</td>
                </tr>
                <tr>
                  <td>Available cash</td>
                  <td style={{ fontSize: '30px' }}>1,00,000.00</td>
                </tr>
                <tr>
                  <td>Opening balance</td>
                  <td>1,00,000.00</td>
                </tr>
                <tr>
                  <td>Payin</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Payout</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>SPAN</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Delivery margin</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Exposure</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Options premium</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Collateral (Liquid funds)</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Collateral (Equity)</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Total collateral</td>
                  <td>0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

       
        <div className="col-md-6">
          <div className="d-flex align-items-center mb-3">
            <p className='me-3 mb-0'>
              <FontAwesomeIcon icon={faDroplet} className='me-2' />
              Commodity
            </p>
            <div className='ms-auto d-flex'>
              <p className='me-3 mb-0'>
                <FontAwesomeIcon icon={faCircleNotch} className='me-2' />
                View statement
              </p>
              <p className='mb-0'>
                <FontAwesomeIcon icon={faCircleInfo} className='me-2' />
                Help
              </p>
            </div>
          </div>
          <div className="table-responsive">
            <table className='table'>
              <tbody>
                <tr>
                  <td>Available margin</td>
                  <td style={{ fontSize: '30px' }}>50,000.00</td>
                </tr>
                <tr style={{ backgroundColor: 'white' }}>
                  <td>Used margin</td>
                  <td style={{ fontSize: '30px' }}>0.00</td>
                </tr>
                <tr>
                  <td>Available cash</td>
                  <td style={{ fontSize: '30px' }}>50,000.00</td>
                </tr>
                <tr>
                  <td>Opening balance</td>
                  <td>1,00,000.00</td>
                </tr>
                <tr>
                  <td>Payin</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Payout</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>SPAN</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Delivery margin</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Exposure</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Options premium</td>
                  <td>0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Funds;
