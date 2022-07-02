import React from "react";
import "./profile.css";

export default function Profile() {
  return (
    <div class="container">
      <div className="main">
        <div className="topbar">
          <a href="/">logout</a>
        </div>
        <div className="row">
          <div className="col-md-4 mt-1 fix">
            <div className="card text-center sidebar">
              <div className="card-body">
                <img
                  src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                  alt=""
                  className="rounded-circle"
                  width={150}
                />
                <div className="mt-3">
                  <h3>NAME</h3>
                  <p>Aboutttttttttttttttttttttttt</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-1">
            <div className="card mb-3 content">
              <h1 className="m-3 pt-3">About</h1>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <h5>Full Name</h5>
                  </div>
                  <div className="col-md-9 text-secondary">Blah</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <h5>Email</h5>
                  </div>
                  <div className="col-md-9 text-secondary">abc@gmail.com</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <h5>Password</h5>
                  </div>
                  <button className="col-md-9 text-secondary">
                    Change Password
                  </button>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <h5>Education</h5>
                  </div>
                  <div className="col-md-9 text-secondary">Graduation</div>
                </div>

                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <h5>Phone</h5>
                  </div>
                  <div className="col-md-9 text-secondary">98488149865</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <h5>Address</h5>
                  </div>
                  <div className="col-md-9 text-secondary">
                    Street no. 2, Marble Palace
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 content">
              <h1 className="m-3">Saved Items</h1>
              <div className="card-body">
                <div className="row">
                  <div
                    className="col-md-3"
                    style={{
                      margin: "10px 20px",
                      backgroundColor: "#fff",
                      width: "90%",
                      borderRadius: "10px",
                    }}
                  >
                    <h5>Item1</h5>
                    <div className="col-md-9 text-secondary">Description</div>
                  </div>
                  <div className="w-100"></div>
                  <div
                    className="col-md-3"
                    style={{
                      margin: "10px 20px",
                      backgroundColor: "#fff",
                      width: "90%",
                      borderRadius: "10px",
                    }}
                  >
                    <h5>Item2</h5>
                    <div className="col-md-9 text-secondary">Description</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
