import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";

const CreateTask = () => {
  const {user} = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const task = {
      email : user.email,
      title : data.title,
      description : data.description,
      deadline : data.deadline,
      priority : data.priority,
      status : "toDo"
    }
    axios.post("http://localhost:5000/tasks", task).then((res) => {
      console.log(res.data);
    
    });
  };

  return (
    <div className="lg:w-4/5 mx-auto bg-blue-300 py-10 px-6 mt-10 lg:mt-16 rounded-lg shadow-lg">
      <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl mb-6">
        Create A Task
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
            <p className="text-red-700 pl-3">
              {errors.title && <span>This field is required</span>}
            </p>
          </div>
          <div className="w-1/2">
            <label className="pl-3">Description</label>
            <input
              {...register("description", { required: true })}
              className="input w-full bg-white "
              placeholder="Description"
            />
            <p className="text-red-700 pl-3">
              {errors.description && <span>This field is required</span>}
            </p>
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

        <input
          type="submit"
          value="Add A Task"
          className="btn border-0 btn-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg mt-5"
        />
      </form>
    </div>
  );
};

export default CreateTask;
