import React from 'react';
import './Reservation.css';
import { useState } from 'react';
import { toast } from 'react-toastify';


function Reservation() {
  let [firstname, setfirstname] = useState('');
  let [lastname, setlastname] = useState('');
  let [email, setemail] = useState('');
  let [username, setusername] = useState('');
  let [adress, setAdress] = useState('');
  let [city, setCity] = useState('');
  let [phoneNumber, SetPhoneNum] = useState('');
  let [paymentMethode, SetMethode] = useState('');
  function addUser(e) {
    e.preventDefault()
    let newUser = { firstname, lastname, email, username, adress, city, phoneNumber, paymentMethode }
    console.log(newUser);
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          toast.error(data.message)
        } else {
          toast.success("Your reservation was successful" + username);
          setfirstname("")
          setlastname("")
          setemail("")
          setusername("")
          setAdress("")
          setCity("")
          SetPhoneNum("")
        }
      })
      .catch(error => {
        console.log("An error occurred: " + (error.message || "Unknown error"));
      });


  }


  return (
    <div className='body'><div className="container" style={{ marginTop: "80px" }}>
      <div className="form-group">
        <h2>Reservation Form</h2>
        <div className="row">
          <div className="col">
            <label>First Name</label>
            <input onChange={(e) => setfirstname(e.target.value)} value={firstname} type="text" placeholder="FirstName" />
          </div>
          <div className="col">
            <label>Last Name</label>
            <input onChange={(e) => setlastname(e.target.value)} value={lastname} type="text" placeholder="Last Name" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Email</label>
            <input onChange={(e) => setemail(e.target.value)} value={email} type="email" placeholder="Email" />
          </div>
          <div className="col">
            <label>Username</label>
            <input onChange={(e) => setusername(e.target.value)} value={username} type="text" placeholder="Username" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Address</label>
            <input onChange={(e) => setAdress(e.target.value)} value={adress} type="text" placeholder="Address" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>City</label>
            <input onChange={(e) => setCity(e.target.value)} value={city} type="text" placeholder="City" />
          </div>
          <div className="col">
            <label>Phone Number</label>
            <input onChange={(e) => SetPhoneNum(e.target.value)} value={phoneNumber} type="text" placeholder="Phone Number" />
          </div>
          <div className="col">
            <label>Payement Method</label>
            <select onChange={(e) => SetMethode(e.target.value)} value={paymentMethode}>
              <option value="Paypal">Paypal</option>
              <option value="Mastercard">Mastercard</option>
            </select>
          </div>

        </div>

      </div>

      <button className='bu' type='submit' onClick={addUser}>submit</button>
    </div>
    </div>
  );
}

export default Reservation;




