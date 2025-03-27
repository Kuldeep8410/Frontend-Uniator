import { useEffect, useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { ToastContainer,toast } from "react-toastify";
import Loader from "../UiComponents/Loader";

const BASE_URl = "https://uniator-backend.onrender.com/mern-revision/v1"

function DeleteCourse({ props }) {

    const [courseIs, setCourseId] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect (() =>{
        setCourseId(props)
    },[])
    
    const deleteCourse = async (courseIs) => {        
        try {
            setLoading(true);
            const response = await fetch(`${BASE_URl}/delete-course/${props}`, {
                method: "DELETE",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                // console.log("response",response)
                return response
            }

            const result = await response.json();
            if(result.success){
                toast.success(result.message);
            }
            setLoading(false);
        } catch (error) {
            console.error("Error deleting course:", error);
        }
    };


    return (
        <div>
            {loading ? (<Loader />) : (
                <div className=" relative flex border-2 border-red-600  rounded-2xl h-10 text-white text-2xl font-bold justify-center content-center hover:bg-amber-800">
                <button onClick={deleteCourse} className="bg-red-600 rounded-2xl"><RiDeleteBin5Fill /></button>
             
             </div>
            )}
        <ToastContainer />
        </div>
    )
}
export default DeleteCourse;