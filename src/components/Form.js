import React from 'react'
import { useState } from 'react';
import './Form.css'


const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState();
    const [persons, setPersons] = useState([]);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (firstName && lastName && email && phoneNo) {
        const person = { firstName, lastName, email, phoneNo };
        setPersons((people) => {
          return [...persons, person];
        });
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNo("");

        console.log(person);
      } else {
        alert("enter something");
      }
    };
  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="subcontainer">
            <label htmlFor="firstName">First Name : </label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              id="firstName"
              name="firstName"
              className="form_input"
            />
          </div>
          <div className="subcontainer">
            <label htmlFor="lastName">Last Name : </label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              id="lastName"
              name="lastName"
              className="form_input"
            />
          </div>
          <div className="subcontainer">
            <label htmlFor="email">E-mail Id : </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="email"
              name="email"
              className="form_input"
            />
          </div>
          <div className="subcontainer">
            <label htmlFor="phoneNo">Phone No : </label>
            <input
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              type="number"
              id="phoneNo"
              name="phoneNo"
              className="form_input"
            />
          </div>
          <div className="btnBox">
            <button className="btn" type="submit">
              Add Person Info
            </button>
          </div>
        </form>
      </div>
      <div className="personContainer">
        {persons.map((person) => {
          const { firstName, lastName, email, phoneNo } = person;
          return (
            <div className="person" key={phoneNo}>
              <h1>Name : {firstName + " " + lastName}</h1>
              <h3>Email : {email}</h3>
              <h4>Contact No : +91{phoneNo}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Form
