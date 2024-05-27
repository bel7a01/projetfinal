import React, { useState, useEffect } from 'react'
import './Tableau.css'
import icon10 from '../../assets/icon11.png'
import { toast } from 'react-toastify';


const Tableau = () => {
  let [users, setuser] = useState([])
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) {
      fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(data => {
          setuser(data)
        })
      setLoading(false)

    }

  }, [loading])
  async function deleteUser(id) {
    try {
      let res = await fetch("http://localhost:3000/users/" + id, { method: "DELETE" });
      let data = await res.json()
      toast.success("deleted User ! ")
      console.log(data)
      setLoading(true)
    } catch (e) {
      toast.error("error while deleting")
      console.log(e)
    }

  }

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>City</th>
          <th>Phone Number</th>
          <th>Payement Method</th>
          <th>Delete</th>

        </tr>
      </thead>
      <tbody>
        {users.map((item, index) => (
          <tr key={index}>
            <td>{item.firstname}</td>
            <td>{item.lastname}</td>
            <td>{item.email}</td>
            <td>{item.adress}</td>
            <td>{item.city}</td>
            <td>{item.phoneNumber}</td>
            <td>{item.paymentMethode}</td>
            <td>
              <button onClick={() => deleteUser(item._id)} className="butt">
                <img className='imgs' src={icon10}></img>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tableau