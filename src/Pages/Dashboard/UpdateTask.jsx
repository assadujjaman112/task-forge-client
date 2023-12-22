import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTask = () => {
  const id = useParams();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios.patch(`https://task-forge-server-nine.vercel.app/tasks/${id.id}`, data).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: "Success",
          text: "You successfully updated the task",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="lg:w-4/5 mx-auto bg-blue-300 py-10 px-6 mt-10 lg:mt-16 rounded-lg shadow-lg">
      <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl mb-6">
        Update A Task
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/*Row - 1  */}
        <div className="flex gap-5">
          <div className="w-1/2">
            <label className="pl-3">Title</label>
            <input
              {...register("title")}
              className="input w-full mb-3 bg-white "
              placeholder="Task Title"
            />
          </div>
          <div className="w-1/2">
            <label className="pl-3">Description</label>
            <input
              {...register("description")}
              className="input w-full bg-white "
              placeholder="Description"
            />
          </div>
        </div>
        {/*Row - 2 */}
        <div className="flex gap-5">
          <div className="w-1/2">
            <label className="pl-3">Deadline</label>
            <input
              {...register("deadline")}
              type="date"
              className="input  mb-3 bg-white w-full"
            />
          </div>
          <div className="w-1/2">
            <label className="form-control w-full pl-3">Priority</label>
            <select
              {...register("priority")}
              defaultValue="default"
              className="select select-bordered w-full"
            >
              <option disabled value="default">
                Select Your Priority
              </option>
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        {/*Row - 3 */}
        <div className="flex gap-5">
          <div className="w-full">
            <label className="form-control w-full pl-3">Task Status</label>
            <select
              {...register("status")}
              defaultValue="default"
              className="select select-bordered w-full"
            >
              <option disabled value="default">
                Select Task Status
              </option>
              <option value="toDo">To-Do</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>

        <input
          type="submit"
          value="Update A Task"
          className="btn border-0 btn-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg mt-5"
        />
      </form>
    </div>
  );
};

export default UpdateTask;
