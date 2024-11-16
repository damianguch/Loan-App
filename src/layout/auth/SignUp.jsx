import { Fragment, useState } from 'react';

export default function SignUp() {
  const [registrationStage, SetRegistrationStage] = useState(1);

  const renderRegistrationStage = () => {
    switch (registrationStage) {
      case 1:
        return (
          <form>
            <h3 className="text-center">Sign Up</h3>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="Enter Phone Number"
                className="form-control mt-1"
              />
            </div>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Full name"
                className="form-control mt-1"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Pasword"
                className="form-control mt-1"
              />
            </div>
            <div className="form-group mt-3">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Re-enter Pasword"
                className="form-control mt-1"
              />
            </div>
            <div className="form-group">
              <button
                onClick={() => SetRegistrationStage(2)}
                className="btn btn-success mt-3 w-100">
                Next
              </button>
            </div>
          </form>
        );

      case 2:
        return (
          <form>
            <div className="form-group">
              <label>D.O.B</label>
              <input type="date" name="" id="" className="form-control mt-1" />
            </div>
            <div className="form-group mt-3">
              <label>State Of Residence</label>
              <select name="" id="" className="form-control mt-1">
                <option value="">---Select State---</option>
                <option value="">Lagos</option>
                <option value="">Ogun</option>
                <option value="">Enugu</option>
              </select>
            </div>
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter valid email address"
                className="form-control mt-1"
              />
            </div>
            <div className="form-group text-center mt-3">
              <button
                onClick={() => SetRegistrationStage(1)}
                className="btn btn-success btn-sm">
                {'<<'}Previous
              </button>
              <button className="btn btn-success btn-sm ms-3">
                Create Account
              </button>
            </div>
          </form>
        );
    }
  };

  return (
    <Fragment>
      <div className="container mt-5">
        <div className="col-sm-6 offset-3 card card-body shadow">
          {renderRegistrationStage()}
        </div>
      </div>
    </Fragment>
  );
}
