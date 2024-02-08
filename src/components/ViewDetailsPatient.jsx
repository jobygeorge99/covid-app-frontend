import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewDetailsPatient = () => {

    const [input,setInput] = useState([])
    
    const getData = ()=>{
        axios.get("http://localhost:3001/api/patient/view").then((response)=>{
            setInput(response.data)
        })
    }

    useEffect(()=>{getData()},[])

  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Patient Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th scope="col">Symptoms</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            input.map((value,index)=>{
                                return <tr>
                                <th scope="row">{index+1}</th>
                                <td>{value.patientName}</td>
                                <td>{value.patientPhone}</td>
                                <td>{value.patientAddress}</td>
                                <td>{value.symptoms}</td>
                                <td>{value.patientStatus}</td>
                                </tr>
                            })
                        }
                    </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ViewDetailsPatient