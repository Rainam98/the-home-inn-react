import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import "../main.css";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="container mt-5 signup-form">
      <img src="images/logo.jpg" className="img-fluid" alt="Logo" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-2 mt-4 signup-form-group">
          <Form.Field>
            {/* <label>First Name</label> */}
            <input
              className="form-control"
              type="text"
              name="firstName"
              placeholder="First Name"
              {...register("firstName", { required: true })}
            />
          </Form.Field>
          {errors.firstName && <p>This field is required</p>}
        </div>

        <div className="form-group mb-2 signup-form-group">
          <Form.Field>
            {/* <label>Last Name</label> */}
            <input
              className="form-control"
              type="text"
              name="lastName"
              placeholder="Last Name"
              {...register("lastName", { required: true })}
            />
          </Form.Field>
          {errors.lastName && <p>This field is required</p>}
        </div>

        <div className="form-group mb-2 signup-form-group">
          <Form.Field>
            {/* <label>Email</label> */}
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", {required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,})}
            />
          </Form.Field>
          {errors.email && <p>This field is required</p>}
        </div>

        <div className="form-group mb-2 signup-form-group">
          <Form.Field>
            {/* <label>Mobie Number</label> */}
            <input
              className="form-control"
              type="text"
              name="phone"
              placeholder="Mobile Number"
              {...register("phone", { required: true })}
            />
          </Form.Field>
          {errors.phone && <p>This field is required</p>}
        </div>

        <div className="form-group mb-2 signup-form-group">
          <Form.Field>
            {/* <label>Address</label> */}
            <input
              className="form-control"
              type="text"
              name="address"
              placeholder="Address"
              {...register("address", { required: true })}
            />
          </Form.Field>
          {errors.address && <p>This field is required</p>}
        </div>

        <div className="form-group mb-2 signup-form-group">
          <Form.Field>
            {/* <label>Password</label> */}
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              {...register("password", {
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
              })}
            />
          </Form.Field>
          {errors.password && <p className="field-errors">This field is required</p>}
        </div>
        
        <input type="checkbox" name="becomeahost"></input>
        <p className="medium fw-italic mt-2 pt-1 mb-0">
            Become a host
        </p>

        <div className="text-lg-start mt-4 pt-2">
        <Button type="submit" className="btn loginButton">Sign Up</Button>
        
          <p className="small fw-bold mt-2 pt-1 mb-0">
            Already have an account?{" "}
            <a href="/" className="link-success">
              Login
            </a>
          </p>
        </div>
      </Form>
    </div>
  );
}

export default SignUp;
