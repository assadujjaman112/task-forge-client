import { useForm } from "react-hook-form";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { googleSignIn, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate("/dashboard/profile");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate("/dashboard/profile");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="login py-5 bg-opacity-70 bg-black bg-blend-overlay min-h-screen flex items-center">
      <div className="bg-slate-200 py-6 lg:py-8 px-5 lg:px-10 rounded-lg md:w-4/5 lg:w-3/5 mx-auto">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="pl-3">Email</label>
          <input
            {...register("email")}
            className="input w-full mb-2 bg-white"
            placeholder="Email"
          />
          <label className="pl-3">Password</label>
          <input
            {...register("password", { required: true })}
            className="input w-full bg-white"
            placeholder="Password"
          />
          {errors.exampleRequired && <span>This field is required</span>}

          <input
            type="submit"
            value="Login"
            className="btn btn-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg mt-5"
          />
        </form>
        <div className="mt-5 flex justify-center">
          <button onClick={handleGoogleSignIn} className="btn btn-outline">
            <FaGoogle className="text-2xl"></FaGoogle>
          </button>
        </div>
        <p className="mt-5 text-center">
          Do not Have an account?{" "}
          <Link className="text-blue-600 font-semibold " to="/signUp">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
