import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import "../main.css";

function AddProperty() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="addproperty">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-2 mt-4 signup-form-group">
          <Form.Field>
            <div className="row">
              <div className="col-md-7">
                <label>Property title</label>
              </div>
              <div className="col-md-5">
                <input
                  className="form-control form-field"
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Property title"
                  {...register("title", { required: true })}
                />
              </div>
            </div>
          </Form.Field>
          {errors.title && <p>This field is required</p>}
        </div>

        <div className="form-group mb-2 mt-4 signup-form-group">
          <Form.Field>
            <div className="row">
              <div className="col-md-7">
                <label>Description</label>
              </div>
              <div className="col-md-5">
                <input
                  className="form-control form-field"
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Description"
                  {...register("description", { required: true })}
                />
              </div>
            </div>
          </Form.Field>
          {errors.description && <p>This field is required</p>}
        </div>

        <div className="form-group mb-2 mt-4 signup-form-group">
          <Form.Field>
            <div className="row">
              <div className="col-md-7">
                <label>Upload property Images</label>
              </div>
              <div className="col-md-5">
                <input
                  type="file"
                  name="img"
                  id="img"
                  accept="image/jpg"
                  {...register("img", { required: true })}
                />
              </div>
            </div>
          </Form.Field>
          {errors.img && <p>This field is required</p>}
        </div>

        <div className="form-group mb-2 mt-4 signup-form-group">
          <Form.Field>
            <div className="row">
              <div className="col-md-7">
                <label>Per Night Fees</label>
              </div>
              <div className="col-md-5">
                <input
                  className="form-control form-field"
                  type="number"
                  name="nightlyFee"
                  id="nightlyFee"
                  placeholder="in USD"
                  {...register("nightlyFee", { required: true })}
                />
              </div>
            </div>
          </Form.Field>
          {errors.nightlyFee && <p>This field is required</p>}
        </div>

        <div className="form-group mb-2 mt-4 signup-form-group">
          <Form.Field>
            <div className="row">
              <div className="col-md-7">
                <label>Service Fees</label>
              </div>
              <div className="col-md-5">
                <input
                className="form-control form-field"
                  type="number"
                  name="serviceFee"
                  id="serviceFee"
                  placeholder="in USD"
                  {...register("serviceFee", { required: true })}
                />
              </div>
            </div>
          </Form.Field>
          {errors.serviceFee && <p>This field is required</p>}
        </div>

        <div className="form-group mb-2 mt-4 signup-form-group">
          <Form.Field>
            <div className="row">
              <div className="col-md-7">
                <label>Amenities</label>
              </div>
              <div className="col-md-5">
                <input
                className="form-control form-field"
                  type="text"
                  name="amenities"
                  id="amenities"
                  placeholder="eg. Swimming Pool, Free Parking, etc."
                  {...register("amenities", { required: true })}
                />
              </div>
            </div>
          </Form.Field>
          {errors.amenities && <p>This field is required</p>}
        </div>

        <div className="form-group mb-2 mt-4 signup-form-group">
          <Form.Field>
            <div className="row">
              <div className="col-md-7">
                <label>Bedrooms</label>
              </div>
              <div className="col-md-5">
                <input
                className="form-control form-field"
                  type="number"
                  name="bedrooms"
                  id="bedrooms"
                  placeholder="no. of bedrooms"
                  {...register("bedrooms", { required: true })}
                />
              </div>
            </div>
          </Form.Field>
          {errors.bedrooms && <p>This field is required</p>}
        </div>

        <div className="form-group mb-2 mt-4 signup-form-group">
          <Form.Field>
            <div className="row">
              <div className="col-md-7">
                <label>Guests</label>
              </div>
              <div className="col-md-5">
                <input
                className="form-control form-field"
                  type="number"
                  name="guests"
                  id="guests"
                  placeholder="maximum of guests allowed per room"
                  {...register("guests", { required: true })}
                />
              </div>
            </div>
          </Form.Field>
          {errors.guests && <p>This field is required</p>}
        </div>

        <div className="form-group mb-2 mt-4 signup-form-group">
          <Form.Field>
            <div className="row">
              <div className="col-md-7">
                <label>Available from</label>
              </div>
              <div className="col-md-5">
                <input
                className="form-control form-field"
                  type="date"
                  name="availabilityFrom"
                  id="availabilityFrom"
                  {...register("availabilityFrom", { required: true })}
                />
              </div>
            </div>
          </Form.Field>
          {errors.availabilityFrom && <p>This field is required</p>}
        </div>

        <div className="form-group mb-2 mt-4 signup-form-group">
          <Form.Field>
            <div className="row">
              <div className="col-md-7">
                <label>Available to</label>
              </div>
              <div className="col-md-5">
                <input
                className="form-control form-field"
                  type="date"
                  name="availabilityTo"
                  id="availabilityTo"
                  {...register("availabilityTo", { required: true })}
                />
              </div>
            </div>
          </Form.Field>
          {errors.availabilityTo && <p>This field is required</p>}
        </div>

        <div className="text-lg-start mt-4 pt-2">
          <Button type="submit" className="btn loginButton">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddProperty;
