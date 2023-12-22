import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      data-aos="fade-down-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="3000"
      className="banner h-96 bg-black bg-opacity-70 bg-blend-overlay flex items-center justify-center rounded-lg"
    >
      <div className="text-white px-8 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          Where Productivity{" "}
          <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
            Meets Perfection
          </span>
        </h1>
        <p className="mt-3 lg:w-1/2 mx-auto text-center">
          Discover the epitome of efficiency at our task management hub, where
          productivity meets perfection. Streamline your workflow, prioritize
          tasks, and elevate your accomplishments with intuitive features and
          seamless organization.
        </p>
        <Link to="/login">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-center mt-5">
            Lets explore
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
