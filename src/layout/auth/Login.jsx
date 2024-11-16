import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="container mt-5">
      <div className="col-12 col-sm-6 mx-auto card card-body shadow">
        <form>
          <h3 className="text-center">Login</h3>
          <div className="form-group">
            <label className="mb-2">Phone Number</label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="form-control mb-3"
            />
          </div>
          <div className="form-group">
            <label className="mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-success btn-block mt-3 w-100"
              type="submit">
              Login
            </button>
          </div>
          <p className="text-center mt-3">
            Forgot Password?{' '}
            <Link to="/forgot-password" className="no-underline text-success">
              Click here
            </Link>
          </p>
          <p className="text-center">Copyright (C) 2020</p>
        </form>
      </div>
    </div>
  );
}
