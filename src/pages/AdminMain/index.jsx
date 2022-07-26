import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavbarAdmin from '../../components/Navbars/NavbarAdmin'
import {unsuccess} from '../../components/AlerBox'
import './styles.css'
import { getUser } from '../../api/api'

const AdminMain = () => {
  const [data, setdata] = useState([])
  const [loading, setloading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setloading(true);
      try {
        const res = await getUser();
        setdata(res.data.users);
        setloading(false);
      } catch (error) {
        setloading(false);
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          unsuccess(error.response)
        }
      }
    };
    getData();
  }, []);

  return (
    <div>
    <div className='admin-header'> Admin Panel</div>
    <NavbarAdmin/>
    <div className='search-container'>
    <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search by Id" aria-label="Search"></input>
        <button className="btn btn-outline-danger" type="submit">Search</button>
      </form>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search by email" aria-label="Search"></input>
        <button className="btn btn-outline-danger" type="submit">Search</button>
      </form>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-danger" type="submit">Search</button>
      </form>
    </div>

    <div className='card-container'>
  <div className="row">

 {data && data.map((item, index) => {
  return <div className="col-sm-3" key={index}>
  <div className='card-group'> 
    <div className="card card-style">
      <div className="card-body">
        <h5 className="card-title">{item.firstName + " " + item.lastName}</h5>
        <hr/>
        <p className="card-text">{item.email && item.email}</p>
        <p className="card-text">{item.mobile && item.mobile}</p>
        <h6 className="card-text"><strong>{item.id && item.id}</strong></h6>
        <Link className="btn btn-outline-dark" to="#">View Profile</Link>   
      </div>
    </div>
    </div>
    </div>})
    }

    </div>
    </div>
    </div>


  )
}

export default AdminMain