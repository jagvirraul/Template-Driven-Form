import React, { useState } from 'react';
import './app.scss';
const App = () => {
  const [getdata, setGetdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    mobileno: "",
    dob: "",
    gender: "",
  });
  const [record, setrecord] = useState([]);
  const options = [
    { label: 'Select option', value: 'select option' },
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setGetdata({ ...getdata, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let newrecord = { ...getdata, id: new Date().getTime().toString() };
    setrecord([...record, newrecord]);
    setGetdata({ firstname: "", lastname: "", email: "", password: "", mobileno: "", dob: "", gender: "" });
  }
  return (
    <div className="App">
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit} autoComplete="off" className='container'>

        <label>First Name</label>
        <input name="firstname" type="text" className="firstname"
          placeholder="firstname" required value={getdata.firstname} onChange={handleInput} />

        <label>Last Name</label>
        <input name="lastname" type="text" className="lastname"
          placeholder="lastname" required value={getdata.lastname} onChange={handleInput} />

        <label>Email</label>
        <input name="email" type="email" className="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
          placeholder="email" required value={getdata.email} onChange={handleInput} />

        <label>Password</label>
        <input name="password" type="password" className="password"
          placeholder="password" required value={getdata.password} onChange={handleInput}
          onKeyPress={(e) => {
            if (!/[0-9]/.test(e.key)) {
              e.preventDefault();
            }
          }}
        />

        <label>Mobile Number</label>
        <input name="mobileno" type="number" className="mobileno"
          placeholder="mobileno" required value={getdata.mobileno} onChange={handleInput} />

        <label>Date Of Birth</label>
        <input name="dob" type="date" className="dob"
          placeholder="(mm/dd/yyyy)" required value={getdata.dob} onChange={handleInput} />
        <label>Gender</label>
        <select onChange={handleInput} name="gender" required>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>

        <button type="submit">Save</button>
      </form>
      <div>
        {record.map((elem, id) => {
          return (
            <div key={id}>
              <dl>
                <dt>First Name</dt>
                <dd>{elem.firstname}</dd>
                <dt>Last Name</dt>
                <dd>{elem.lastname}</dd>
                <dt>Email</dt>
                <dd>{elem.email}</dd>
                <dt>Password</dt>
                <dd>{elem.password}</dd>
                <dt>Mobile Number</dt>
                <dd>{elem.mobileno}</dd>
                <dt>Date Of Birth</dt>
                <dd>{elem.dob}</dd>
                <dt>Gender</dt>
                <dd>{elem.gender}</dd>
              </dl>
            </div>
          );
        })
        }
      </div>
    </div>
  );
}

export default App;
