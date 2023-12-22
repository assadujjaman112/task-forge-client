import { Link, Outlet } from "react-router-dom";
import { FaList } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className=" flex w-4/5 mx-auto">
      <div className="drawer lg:drawer-open w-60">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content md:-ml-12">
          <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">
            <FaList></FaList>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-60 min-h-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard/profile">Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/createATask">Create A Task</Link>
            </li>
            <li>
              <Link to="/dashboard/toDoList">To Do List</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full lg:w-4/5 ml-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
