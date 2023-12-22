import { useForm } from "react-hook-form";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(data.name, data.image)
          .then(() => {
            console.log("User Updated");
            navigate("/dashboard/profile");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="signUp py-5 bg-opacity-70 bg-black bg-blend-overlay min-h-screen flex items-center">
      <div className="bg-slate-200 py-6 lg:py-8 px-5 lg:px-10 rounded-lg md:w-4/5 lg:w-3/5 mx-auto">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          Sign Up!
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="pl-3">Name</label>
          <input
            {...register("name")}
            className="input w-full mb-2 bg-white"
            placeholder="Name"
          />
          <label className="pl-3">Photo</label>
          <input
            {...register("image")}
            className="input w-full mb-2 bg-white"
            placeholder="Photo URL"
          />
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
            value="Sign Up"
            className="btn btn-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg mt-5"
          />
        </form>
        <p className="mt-5 text-center">
          Already Have an account?
          <Link className="text-blue-600 font-semibold " to="/login">
            LogIn
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
