import React, { useEffect, useState } from 'react'
import SubscriptionCard from '../components/SubcriptionCard'
import Nav1 from './Nav1'
import Table from 'react-bootstrap/Table';
export default function AllSubscriptionPlans() {

    const [plans, setPlans] = useState()

    useEffect(()=>{
        async function getAllPlans(){
            const data = await fetch("http://" + process.env.REACT_APP_API_CALL_ADDRESS + "/getAllSubscriptionPlans")
            .then(res=>res.json())
              .then(dt=>{
                setPlans(dt['msg'])
                console.log(dt['msg'])
                return dt
              })
            return data
          }

          getAllPlans()
    }, [])

  if(!plans){
    return(
        <>
        {/* Loading.... */}
        </>
    )
  } else 
  return (
   
       
       <><Nav1 /><div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Plan Name</th>
            <th>Monthly Price</th>
            <th>No of Device</th>
            
            
          </tr>
        </thead>
        <tbody>
    {plans.map(plan=>{return(
        <>

<SubscriptionCard key= {plan._id} plan={plan} />
        {/* {plan._id} */}
        {/* <br/> */}
        </>
    )})}
   </tbody>
      </Table>
    </div>
</>
  
  )
}
