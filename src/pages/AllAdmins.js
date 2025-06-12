import React, { useEffect, useState } from 'react'
import {Link, Route, Routes} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import AdminCard from '../components/AdminCard';
import Nav1 from './Nav1';
export default function AllAdmins() {

    const [admins, setAdmins] = useState()

    useEffect(()=>{
        async function getAllAdmins(){
            const data = await fetch("http://" + process.env.REACT_APP_API_CALL_ADDRESS + "//getAllAdmins")
            .then(res=>res.json())
              .then(dt=>{
                setAdmins(dt['msg'])
                console.log(dt['msg'])
                return dt
              })
            return data
          }

          getAllAdmins()
    }, [])

  if(!admins){
    return(
        <>
        {/* loading code */}
        </>
    )
  } else 
  return (
    <><Nav1 /><div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>


          {admins.map(admin => {
            return (
              <AdminCard key={admin._id} admin={admin} />



            );
          })}
        </tbody>
      </Table>


    </div>
    {/* <a href='/Register'>
    <Button >ADD New</Button>
    </a> */}

    <Link to="/reg">
    <Button >ADD New</Button>
      </Link>
    </>
    )

    }
