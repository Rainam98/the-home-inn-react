import React from "react";
import Sidemenu from "./Sidemenu";
import Header from "./Header";
import Footer from "./Footer";

function ReservationDetails() {
  const propertyUpdate = () => {
    alert("Property Updated");
  };

  const propertyDelete = () => {
    alert("Property Deleted");
  };

  const data = [
    {
      ptitle: "UTD",
      description: "Worst University",
      guests: 5,
      city: "Dallas",
      state: "TX",
      availfrom: "12/16/2022",
      availto: "12/20/2022",
    },
    {
      ptitle: "UTD",
      description: "Worst University",
      guests: 5,
      city: "Dallas",
      state: "TX",
      availfrom: "12/16/2022",
      availto: "12/20/2022",
    },
    {
      ptitle: "UTD",
      description: "Worst University",
      guests: 5,
      city: "Dallas",
      state: "TX",
      availfrom: "12/16/2022",
      availto: "12/20/2022",
    },
  ];

  return (
    <div>
      <div>
        <div className="wrapper">
          <Sidemenu></Sidemenu>
          <div id="content">
            <Header></Header>

            <div className="App">
              <table className="table table-hover" id="checkDataTable">
                <thead>
                  <tr>
                    <th>Property Title</th>
                    <th>Description</th>
                    <th>No. of Guests</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Available From</th>
                    <th>Available To</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((val, key) => {
                    return (
                      <tr key={key}>
                        <td>{val.ptitle}</td>
                        <td>{val.description}</td>
                        <td>{val.guests}</td>
                        <td>{val.city}</td>
                        <td>{val.state}</td>
                        <td>{val.availfrom}</td>
                        <td>{val.availto}</td>
                        <td>
                          <button
                            type="button"
                            onClick={propertyUpdate}
                            className="deleteRow btn btn-outline-warning propertydetailsupdateButton"
                          >
                            Update
                          </button>
                          <button
                            type="button"
                            onClick={propertyDelete}
                            className="deleteRow btn btn-outline-delete propertydetailsdeleteButton"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ReservationDetails;
