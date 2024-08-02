import React from 'react';
import Table from 'react-bootstrap/Table';





function Holdings() {
  return (
    <>
      <div className="container-fluid p-5 display-flex ">
        <div className='row'><div className='col-md-12'><p className='me-4 p-4 fs-4'>Holdings</p></div></div>


        <div className="row fs-5">
          <div className="col-md-3">
            <p>Total investment</p>
            <p>13</p>
          </div>
          <div className="col-md-3">
            <p>Current Value</p>
            <p>13</p>
          </div>
          <div className="col-md-3">
            <p>Day's P&L</p>
            <p>13</p>
          </div>
          <div className="col-md-3">
            <p>Total P&L</p>
            <p>13</p>
          </div>
        </div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
      </div>
    </>
  )
}

export default Holdings