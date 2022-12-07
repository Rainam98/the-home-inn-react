import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Sidemenu from "./Sidemenu";
import Header from "./Header";

function BecomeHost() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <div>
        <div className="wrapper">
          <Sidemenu></Sidemenu>
          <div id="content">
            <Header></Header>
            <form onSubmit={handleSubmit}>
              <div className="hostcontainer">
                <p className="hostpara mb-4">
                  Are you sure you want to become a host?
                </p>
                <button
                  type="submit"
                  className="btn btn-outline-success hostacceptButton"
                >
                  Yes
                </button>
                &nbsp;&nbsp;&nbsp;
                <button
                  type="submit"
                  className="btn btn-outline-danger hostdeclineButton"
                >
                  No
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BecomeHost;
