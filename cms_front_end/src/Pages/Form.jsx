import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import Spinner from "../Components/Spinner";
import Navbar from '../Components/Navbar';

const Form = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    remember: false,  // Add remember to state
  });

  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      // Redirect based on role
      switch (userInfo.role) {
        case 'admin':
          navigate("/admin-dashboard");
          break;
        case 'member':
          navigate("/member-dashboard");
          break;
        case 'accountant':
          navigate("/accountant-dashboard");
          break;
        case 'secretary':
          navigate("/secretary-dashboard");
          break;
        case 'pastor':
          navigate("/pastor-dashboard");
          break;
        default:
          navigate("/login");
          break;
      }
    }
  }, [userInfo, navigate]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(inputs));
  };

  useEffect(() => {
    if (error) {
      setMessage("Login failed, please check your credentials and try again");
    } else if (userInfo) {
      setMessage("Login is successful");
    }
  }, [error, userInfo]);

  return (
    <>
     <Navbar />
   
    <div className="form-container">
      <div className="sign-in">
        <article className="sign-in_details">
          <form className="sign-in_form" onSubmit={handleSubmit}>
            <h1 className="center-black">Sign In</h1>
            <p>Log in to your account using your credentials</p>
            {message && <p className="text-danger">{message}</p>}
            {loading && <Spinner />}

            <div className="form-control">
              <label htmlFor="username">Email</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your Email address"
                value={inputs.username || ""}
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={inputs.password || ""}
                required
                onChange={handleChange}
              />
            </div>
            <div className="sign-in_extras">
              <div>
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  checked={inputs.remember}
                  onChange={handleChange}
                />
                <label htmlFor="remember">Remember for 30 days</label>
              </div>
              <Link className="link1" to="">
                Forgot password
              </Link>
            </div>
            <div>
              <button className="btn3" type="submit" name="submit">
                Sign In
              </button>
              <small className="next-page">
                Do not have account? <Link to="/register">Sign Up</Link>
              </small>
            </div>
          </form>
        </article>
        <article className="sign-in_logo">
          <div>
            <img className="image" src="./sda-logo.png" alt="sda logo" />
          </div>
        </article>
      </div>
    </div>
    </>
  );
};

export default Form;
