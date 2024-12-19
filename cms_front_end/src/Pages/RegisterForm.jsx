import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { validPassword } from "../Components/Regex";
import { signup } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Navbar from '../Components/Navbar';

const RegisterForm = () => {
  const [inputs, setInputs] = useState({
    role: "member", // Set a default role if needed
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password1: "",
    password2: "",
  });

  
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const userSignup = useSelector((state) => state.userSignup);
  const { error, loading, userInfo } = userSignup;
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [redirect, userInfo]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { password1, password2, first_name, role } = inputs;

    if (password1 !== password2) {
      setMessage("Passwords do not match");
    } else if (first_name.length < 3) {
      setMessage("Please enter a valid first name");
    } else if (!validPassword.test(password1) || !validPassword.test(password2)) {
      setMessage("Your password should contain uppercase and lowercase letters, and numbers");
    } else {
      dispatch(signup(inputs));
      setMessage("Signup is successful");
      navigate("/login");
    }
  };
  return (
    <>
    <Navbar />
      <div className="signUp_form_container">
        <div className="sign-up">
          <form className="sign-up_form" onSubmit={handleSubmit}>
            <div>
              <img
                className="default_image"
                src="./sda_logo_update.png"
                alt="sda logo"
              />
            </div>
            <h1 className="center1-black">Sign Up</h1>
            <p>
              {message && <message className=" text-danger">{message}</message>}
            </p>
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="form-control1">
                    <label htmlFor="userType">Select user type</label>
                    <select
                      id="userType"
                      name="role"
                      value={inputs.role}
                      onChange={handleChange}
                      required
                    >
                      <option desabled>--choose--</option>
                      <option value="accountant">Tressurer</option>
                      <option value="pastor">Pastor</option>
                      <option value="secretary">Secretary</option>
                      <option value="member">Member</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-control1">
                    <label htmlFor="first-name">First Name</label>
                    <input
                      className="input"
                      type="text"
                      name="first_name"
                      placeholder="Enter your first name"
                      value={inputs.first_name || ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-control1">
                    <label htmlFor="last-name">Last Name</label>
                    <input
                      className="input"
                      type="text"
                      name="last_name"
                      placeholder="Enter your last name"
                      value={inputs.last_name || ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div className="form-control1">
                    <label htmlFor="email">Email</label>
                    <input
                      className="input"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your Email address"
                      value={inputs.email || ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-control1">
                    <label htmlFor="password">Password</label>
                    <input
                      className="input"
                      type="password"
                      id="password"
                      name="password1"
                      placeholder="Enter your password"
                      value={inputs.password1 || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-control1">
                    <label htmlFor="password">Comfirm Password</label>
                    <input
                      className="input"
                      type="password"
                      id="password"
                      name="password2"
                      placeholder="Enter your password"
                      value={inputs.password2 || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="form-control1">
              <button className="btn2" type="submit" name="submit">
                Create Account
              </button>
            </div>
          </form>

          <small className="next1-page">
            You have account?{" "}
            <Link className="link" to="/login">
              Sign In
            </Link>
          </small>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
