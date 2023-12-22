import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="lg:w-2/3 mx-auto bg-blue-300 py-10 px-6 mt-10 lg:mt-16 rounded-lg shadow-lg">
            <div className="flex justify-center">
                <img src={user?.photoURL} alt="" className="w-72 h-72 rounded-full " />
            </div>
            <div className="text-center mt-10">
                <h1><span className="font-bold">Name : </span>{user?.displayName}</h1>
                <p><span className="font-bold">Email : </span>{user?.email} </p>
                

            </div>
            
        </div>
    );
};

export default Profile;