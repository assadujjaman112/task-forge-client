import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const ToDoList = () => {
    const {user} = useContext(AuthContext);
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios.get("https://task-forge-server-nine.vercel.app/tasks");
      return res.data;
    },
  });

  const myTasks = tasks?.filter(item => item.email === user.email);
  const toDo = myTasks?.filter((item) => item.status === "toDo");
  const ongoing = myTasks?.filter((item) => item.status === "ongoing");
  const completed = myTasks?.filter((item) => item.status === "completed");

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://task-forge-server-nine.vercel.app/tasks/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="lg:w-4/5 mx-auto bg-blue-300 py-10 px-6 mt-10 lg:mt-16 rounded-lg shadow-lg">
      <Tabs>
        <TabList>
          <Tab>To-Do</Tab>
          <Tab>Ongoing</Tab>
          <Tab>Completed</Tab>
        </TabList>

        <TabPanel>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="text-lg">
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Deadline</th>
                  <th>Priority</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {toDo?.map((task, i) => (
                  <tr key={task._id}>
                    <th>{i + 1}</th>
                    <td>{task?.title}</td>
                    <td>{task?.deadline}</td>
                    <td>{task?.priority}</td>
                    <th>
                      <Link to={`/dashboard/updateTask/${task?._id}`}>
                        <button className="btn btn-ghost btn-xs">
                          <FaRegEdit className="text-lg"></FaRegEdit>
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(task._id)}
                        className="btn btn-ghost btn-xs"
                      >
                        <FaTrashAlt className="text-lg"></FaTrashAlt>
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="text-lg">
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Deadline</th>
                  <th>Priority</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {ongoing?.map((task, i) => (
                  <tr key={task._id}>
                    <th>{i + 1}</th>
                    <td>{task?.title}</td>
                    <td>{task?.deadline}</td>
                    <td>{task?.priority}</td>
                    <th>
                      <Link to={`/dashboard/updateTask/${task?._id}`}>
                        <button className="btn btn-ghost btn-xs">
                          <FaRegEdit className="text-lg"></FaRegEdit>
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(task._id)}
                        className="btn btn-ghost btn-xs"
                      >
                        <FaTrashAlt className="text-lg"></FaTrashAlt>
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
        <TabPanel>
        <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="text-lg">
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Deadline</th>
                  <th>Priority</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {completed?.map((task, i) => (
                  <tr key={task._id}>
                    <th>{i + 1}</th>
                    <td>{task?.title}</td>
                    <td>{task?.deadline}</td>
                    <td>{task?.priority}</td>
                    <th>
                      <Link to={`/dashboard/updateTask/${task?._id}`}>
                        <button className="btn btn-ghost btn-xs">
                          <FaRegEdit className="text-lg"></FaRegEdit>
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(task._id)}
                        className="btn btn-ghost btn-xs"
                      >
                        <FaTrashAlt className="text-lg"></FaTrashAlt>
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ToDoList;
