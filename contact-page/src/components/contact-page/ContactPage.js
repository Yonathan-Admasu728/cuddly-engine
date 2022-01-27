import React, { useState } from "react";
import Axios from "axios";
import FormInput from "../form-input/form-input";


export default function ContactPage() {
  const url =
    "https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users";
  const [data, setData] = useState({
    name: "",
    email: "",
    birthDate: "",
    // CHECKBOX /
    agreeToBeContactedViaEmail: false,
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      name: data.name,
      email: data.email,
      birthDate: data.birthDate,
      agreeToBeContactedViaEmail: data.agreeToBeContactedViaEmail,
    }).then((res) => {
      console.log(res.data)
      setData([res.data, ...data])
      alert("SUCCESS!! :-)\n\n" + JSON.stringify(data));
    })
    .catch(err => {
        console.log(err);
      })
      setData({
        name: '',
        email: '',
        birthDate: '',
        agreeToBeContactedViaEmail: false
      });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

// Reset Input Field handler
const resetInputField = () => {
    setData({
        name: '',
        email: '',
        birthDate: '',
        agreeToBeContactedViaEmail: false
      });
  };
  

  return (
    <div>
      <div className="container contact mt-5">
        <div className="row pt-5">
          <div className="col-md-6 p-5">
            <img src="./contactus.svg" alt="" />
          </div>
          <div className="col-md-6">
            <div className="contact-form m-2 p-5 n-box2">
              <h3 className="font-bold">Contact US</h3>
              <form onSubmit={submit}>
                <FormInput
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handle}
                  label="Name"
                  required
                />

                <FormInput
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handle}
                  label="Email"
                  required
                />
                <FormInput
                  type="date"
                  name="birthDate"
                  value={data.birthDate}
                  onChange={handle}
                  label="birth date"
                />
                <>
                  <input
                    checked={data.agreeToBeContactedViaEmail}
                    type="checkbox"
                    name="agreeToBeContactedViaEmail"
                    onChange={handle}
                  />
                  &nbsp;&nbsp;
                  <label>I agree to be contacted via email.</label>
                </>

                <div className="row pt-5">
                  <button className='primary-button mt-3' type="button" onClick={resetInputField}>Clear</button>
                  <button className='primary-button mt-3'>submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
