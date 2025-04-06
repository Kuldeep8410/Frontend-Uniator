import { useContext, useState } from "react";
import { AppContext } from '../ContextApi/FisrtContext';
import { toast, ToastContainer } from 'react-toastify';

function Attendance() {
    const { AllGetReq } = useContext(AppContext);
    const [res, setRes] = useState(null); 

    const [course, setCourse] = useState({
        courseCode1: "",
        courseCode2: "",
        entryNumber: ""
    });

    function onChangeHandler(event) {
        const { name, value } = event.target;
        setCourse((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    async function CourseWiseAtt() {
        try {
            const CourseCode = course.courseCode1.trim();
            if (!CourseCode) {
                toast.error("Course Code is required!");
                return;
            }

            const response = await AllGetReq("get-attendace-all-course", { courseCode: CourseCode });

            if (!response || !response.success) {
                toast.error("Error fetching data");
                return;
            }

            toast.success("Data fetched successfully");
            setRes(response);
        } catch (error) {
            console.error("Error in CourseWiseAtt:", error);
        }
    }

    async function AttendanceOfA_student() {
        try {
            const CourseCode = course.courseCode2.trim();
            const studentEmail = course.entryNumber.trim();

            if (!CourseCode || !studentEmail) {
                toast.error("Both Course Code and Entry Number are required!");
                return;
            }

            const response = await AllGetReq("get-student-attendance-by-entry", {
                courseCode: CourseCode,
                studentEmail: studentEmail
            });

            if (!response || !response.success) {
                toast.error("Error fetching student attendance");
                return;
            }

            toast.success("Student attendance fetched successfully");
            setRes(response);
        } catch (error) {
            console.error("Error in AttendanceOfA_student:", error);
        }
    }

    // Render Table for Response Data
    const renderAttendanceTable = (res) => {
        if (!res || !res.data || res.data.length === 0) {
            return <p>No attendance records found.</p>;
        }

        return (
            <div className="overflow-x-auto mt-4">
                <table className="min-w-full table-auto text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-800">
                            <th className="px-4 py-2 text-white">Date</th>
                            {/* <th className="px-4 py-2 text-white">Student ID</th> */}
                            <th className="px-4 py-2 text-white">Attendance Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {res.data.map((record) => (
                            <tr key={record._id} className="bg-black border-b">
                                <td className="px-4 py-2">{new Date(record.date).setHours(0, 0, 0).toLocaleString()}</td>
                                {record.attendanceRecords.map((attendance, index) => (
                                    <tr key={attendance._id}>
                                        <td className="px-4 py-2"></td>
                                        {/* <td className="px-4 py-2">{attendance.student}</td> */}
                                        <td className="px-4 py-2">{attendance.status}</td>
                                    </tr>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div className="bg-black text-white flex flex-col">
            {/* Attendance by Course */}
            <div className="flex flex-col gap-1 border p-2 rounded m-2 relative w-full sm:w-3/4">
                <h1>Attendance By Course Code</h1>
                <label>
                    Enter Course Code:
                    <input
                        className="border m-2 rounded"
                        type="text"
                        name="courseCode1"
                        value={course.courseCode1}
                        onChange={onChangeHandler}
                    />
                </label>
                <button onClick={CourseWiseAtt} className="bg-blue-700 p-2 rounded">
                    Show
                </button>
            </div>

            {/* Attendance by Student Entry */}
            <div className="flex flex-col gap-1 border p-2 rounded m-2 relative w-full sm:w-3/4">
                <h1>Attendance Entry Wise and In A Course</h1>
                <label>
                    Enter Course Code:
                    <input
                        className="border m-2 rounded"
                        type="text"
                        name="courseCode2"
                        value={course.courseCode2}
                        onChange={onChangeHandler}
                    />
                </label>
                <label>
                    Entry Number Of Student:
                    <input
                        className="border m-2 rounded"
                        type="text"
                        name="entryNumber"
                        value={course.entryNumber}
                        onChange={onChangeHandler}
                    />
                </label>
                <button onClick={AttendanceOfA_student} className="bg-blue-700 w-2/5 p-2">
                    Show Student Attendance
                </button>
            </div>

            {/* Response Section */}
            <div>
                {res ? (
                    renderAttendanceTable(res)  // Display table with attendance data
                ) : (
                    <h1>No response</h1>
                )}
            </div>

            <ToastContainer />
        </div>
    );
}

export default Attendance;
