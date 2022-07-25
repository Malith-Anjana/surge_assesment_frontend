import React, { useEffect, useState } from 'react'
import NavbarStd from '../../components/Navbars/NavbarStd'
import { deleteNote, getNotes } from '../../api/api';
import { confirm, success, unsuccess } from '../../components/AlerBox';

const StudentMain = () => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try{
        const res = await getNotes();
        setdata(res.data.notes)
        setLoading(false)
      }
      catch(error){
        setLoading(false)
          if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
          ) {
            unsuccess(error)
          }
      }
    }
    getData();
  }, [])
  

  const removeNote = async(id) =>{
    try{
      const res = await deleteNote(id)
    }catch(error){
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        unsuccess(error);
      }
    }
  }
  return (
    <div><NavbarStd/>
    <div className='container'>
    <h3 className='mt-2'><center><strong>Student's Note List</strong></center></h3>
    <div className='mt-4'>
    <table className="table table-bordered table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>

    {data.map((item,key)=>{
     return <tr key={key}>
     <th scope="row">{key+1}</th>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>
      <button className="btn btn-success mx-2"><i className="fa fa-pen"></i> Update</button>
      <button className="btn btn-danger mx-2" onClick={()=>removeNote(item._id)}><i className="fa fa-trash"></i> Delete</button>
      </td>
      </tr>
    })}
    
  </tbody>
</table>

</div>
</div>

    </div>
  )
}

export default StudentMain