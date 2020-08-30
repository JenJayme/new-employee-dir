//PARENT COMPONENT WITH DATA inc CONSTRUCT ARRAY OF ITEMS
import React from 'react';
import Employees from '../src/components/data';
// import { Table } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';


const columns = [{
  dataField: 'photo',
  text: 'Photo',
  sort: false
}, {
  dataField: 'name',
  text: 'Name',
  sort: true
}, {
  dataField: 'title',
  text: 'Title',
  sort: false
}, {
  dataField: 'department',
  text: 'Department',
  sort: true
}, {
  dataField: 'phone',
  text: 'Phone',
  sort: false
}, {
  dataField: 'email',
  text: 'Email',
  sort: false
}, {
  dataField: 'birthday',
  text: 'Birthday',
  sort: true
}, {
  dataField: 'id',
  text: 'Employee ID',
  sort: false
}];

const EmployeeTable = () => {
  let EmployeesWTags = [];

  let EmployeesWTags = Employees.map(employee => {
    <tr>
      <td>
         <img key={employee.id} src={process.env.PUBLIC_URL} + "/images/" + {employee.photo} alt={employee.firstName} + " " + {employee.lastName} className="headshots" /></td> 
    <td><strong>{employee.firstName} + " " + {employee.lastName}</strong></td>
    <td>{employee.lastName}</td>
    <td>{employee.title}</td>
    <td>{employee.email}</td>
    </tr>

  })


  // for (var i = 0; i < Employees.length; i++) {
  //   let fullName = Employees[i].firstName + " " + Employees[i].lastName;
  //   let artUrl = process.env.PUBLIC_URL + "/images/" + Employees[i].photo;
  //   console.log(artUrl);
  //   EmployeesWTags.push(
  //       <tr>
  //         <td>
  //           <img key={Employees[i].index} src={artUrl} alt={fullName} className="headshots"></img>
  //         </td>

  //         <td>
  //           <p><strong>{fullName}</strong></p>
  //         </td>

  //         <td>
  //           <p>{Employees[i].title}</p>
  //         </td>

  //         <td>
  //           <p>{Employees[i].department}</p>
  //         </td>

  //         <td>
  //           <p>{Employees[i].phone}</p>
  //         </td>

  //         <td>
  //           <p>{Employees[i].email}</p>
  //         </td>

  //         <td>
  //           <p>{Employees[i].birthday}</p>
  //         </td>

  //         <td>
  //           <p>{Employees[i].id}</p>
  //         </td>

  //       </tr>
  //   )
  // }
  return (

<BootstrapTable keyField='id' data={ Employees } columns={ columns } />

/* <Table striped bordered hover> */
  // <thead>
  //   <tr className="rowhead">
  //     <th>Photo</th>
  //     <th>Name</th>
  //     <th>Title</th>
  //     <th>Department</th>
  //     <th>Phone</th>
  //     <th>Email</th>
  //     <th>Birthday</th>
  //     <th>Employee ID</th>
  //   </tr>
  // </thead>
  // <tbody>
  // {EmployeesWTags}
  // </tbody>
// </Table>

  )
}

export default EmployeeTable;