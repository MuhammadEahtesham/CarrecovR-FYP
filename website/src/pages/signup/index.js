import React, { useState } from "react";
// import axios from 'axios'
import Navbar from "../../Components/Navbar";
import Footer from '../../Components/Footer';
// import ErrorMessage from '../../ErrorMessage'
// import Cookies from 'js-cookie';
import { Navigate, useNavigate } from 'react-router-dom';
// import { FormError } from '../../FormError';

export const Signup = () => {

  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState("")
  
  // const [userData, setUserData] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  //   confirm: "",
  //   company: "",
    
  // });

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
    
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();

    const formData = new FormData()
    formData.append("email", userData.email)
    formData.append("username", userData.username)
    formData.append("password", userData.password)
    formData.append("confirm_password", userData.confirm)
    //formData.append("company", userData.company)

    console.log('====================================');
    console.log(formData);
    console.log('====================================');

    for (let [key, value] of formData) {
      console.log(`${key}: ${value}`)
    }
    
    //  let res = await axios
    //     .post("http://127.0.0.1:8000/api/user/signup", formData)
    //     .then((response) => {
    //       console.log(response);
    //       //Cookies.set("token", response.data.access_token);
    //       alert("Data stored")
    //       navigate("/user/login")
    //       return response;
    //     })
    //     .catch((error) => {
    //       //alert(error.detail);
    //       setErrorMessage("Invalid Credentials")
    
    //     });
    //   return res;
  };

  return (
    <>
    {/* <Navbar /> */}
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                 <div className="contact-leftside col-12 col-lg-5">
                  <figure>
                    <img
                      src="../img/signup.jpg"
                      alt="contatUsImg"
                      className="img-fluid"
                    />
                  </figure>
                </div> 

                {/* right side contact form  */}
                <div className="contact-rightside col-14 col-lg-7">
                  <p className="h1">Sign Up</p>
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="username"
                          id=""
                          className="form-control"
                          placeholder="User name"
                          value={userData.username}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email"
                          value={userData.email}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                  
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="password"
                          name="password"
                          id=""
                          className="form-control"
                          placeholder="Password"
                          value={userData.password}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="password"
                          name="confirm"
                          id=""
                          className="form-control"
                          placeholder="Confirm Password"
                          value={userData.confirm}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    {/* <div className="row">
                    <div className="input-feild col-12 col-lg-6">
                      <select 
                        className="form-control form-select" id="" 
                        >
                        <option selected>Select Option</option>
                        <option value="FIA" onChange={postUserData}>FIA</option>
                       
                      </select>
                      
                    </div>
                    </div> */}
                    

                    {/* {{errorMessage} && <FormError message={errorMessage}/>} */}

                    <button
                      type="submit"
                      className="btn btn-outline-primary btn-style w-100 mt-4"
                      onClick={submitData}>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

