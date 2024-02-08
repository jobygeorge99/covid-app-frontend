import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const SearchPatients = () => {

    const [input,setinput] = new useState (
        {
            "patientPhone":""
        }
    )

    const readInput = (event)=>{
        setinput({...input,[event.target.name]:event.target.value})
    }

    const [tableData,setTableData] = new useState([])

    var res

    const getData = ()=>{

        console.log(input)
        axios.post("http://localhost:3001/api/patient/search",input).then((response)=>{
            console.log(response.data)
            res=response
            setTableData(response.data)
        })

    }

  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Enter Phone number</label>
                            <input type="text" className="form-control" name='patientPhone' value={input.patientPhone} onChange={readInput} />

                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button id='submitBtn' className="btn btn-success" onClick={getData}>Search</button>

                        </div>

                        <table class="table" id="table">
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
                                    tableData.map((value,index)=>{
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
    </div>
  )
}

export default SearchPatients