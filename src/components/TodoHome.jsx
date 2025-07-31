import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deletetask } from "../redux/slice/todoSlice";
import AddTimer from "./AddTimer";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from 'react-router-dom';

function TodoHome() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [todolist, setTodolist] = useState({
        task: "",
    });

    const [percentages, setPercentages] = useState(0);

    const taskList = useSelector(state => state.todo.tasks);
    const completedTasks = useSelector(state => state.todo.completedTasks);

    const dispatch = useDispatch();

    const handleTask = (e) => {
        setTodolist({
            ...todolist, [e.target.name]: e.target.value
        });
    };

    const addHandler = () => {
        if (todolist) {
            dispatch(addTask(todolist));
            setTodolist({ task: "" });
        } else {
            // console.log("Task cannot be empty");
        }
    };
    
    const removeHandler = (index) => {
        const percentage = percentages[index] || 0;

        if (percentage > 0 && percentage <= 100) {
            dispatch(deletetask({ index, percentage }));
        }
    };
    
    const percentHandler = (index, e) => {
        setPercentages(prev => ({ ...prev, [index]: e.target.value }));
    };

    return (
        <div className="min-h-screen bg-base-100 flex flex-col items-center px-4 py-8 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
            </div>

            {/* Header */}
            <div className="relative z-10 text-center mb-12">
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-fade-in">
                    Daily Tasks
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            </div>

            {/* Add Task Section */}
            <div className="relative z-10 w-full max-w-2xl mb-12">
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-[1.02]">
                    <label className="block text-white/90 text-lg font-medium mb-4">
                        Create a new task
                    </label>
                    <div className="flex flex-col gap-4">
                        <input
                            className="w-full h-14 px-6 bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                            type="text"
                            placeholder="What needs to be done today?"
                            name="task"
                            value={todolist.task}
                            onChange={handleTask}
                        />
                        <button 
                            className="h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 active:scale-95"
                            onClick={addHandler}
                        >
                            Add Task
                        </button>
                    </div>
                </div>
            </div>

            {/* Current Tasks Section */}
            <div className="relative z-10 w-full max-w-2xl mb-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                        📋 Current Tasks
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-4">
                    {taskList.length > 0 ? (
                        taskList.map((task, index) => (
                            <div
                                key={index}
                                className="backdrop-blur-xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 transform hover:scale-[1.02] animate-slide-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <h3 className="text-white text-lg font-medium mb-4 break-words">
                                    <span className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mr-3">
                                        {index + 1}
                                    </span>
                                    {task.task}
                                </h3>
                                
                                <div className="flex flex-wrap items-center gap-3 justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="text-white/70 text-sm">Progress:</span>
                                        <input
                                            className="w-20 h-10 px-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white text-center focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                                            type="number"
                                            name={`percentage-${index}`}
                                            onChange={(e) => percentHandler(index, e)}
                                            value={percentages[index] || ''}
                                            placeholder="0"
                                            min="0"
                                            max="100"
                                        />
                                        <span className="text-white/70 text-sm">%</span>
                                    </div>
                                    
                                    <div className="flex items-center gap-3">
                                        <button
                                            className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50 active:scale-95"
                                            onClick={() => removeHandler(index)}
                                        >
                                            Complete
                                        </button>
                                        <div className="opacity-80 hover:opacity-100 transition-opacity duration-300">
                                            <AddTimer />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">📝</div>
                            <p className="text-white/60 text-lg">No tasks yet. Add one above to get started!</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Completed Tasks Section */}
            <div className="relative z-10 w-full max-w-2xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-2">
                        Completed Tasks
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-4">
                    {!completedTasks.lenght > 0 ? (
                        completedTasks.map((item, index) => (
                            <div
                                className="backdrop-blur-xl bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-400/30 rounded-2xl p-6 shadow-xl transition-all duration-500 animate-slide-in"
                                key={index}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-white font-medium">
                                        <span className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full text-sm font-bold mr-3">
                                            {index + 1}
                                        </span>
                                        {item.task}
                                    </h3>
                                    <span className="px-3 py-1 bg-emerald-500/30 text-emerald-200 rounded-full text-sm font-medium">
                                        {item.percentage}% complete
                                    </span>
                                </div>
                                
                                <div className="relative">
                                    <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-emerald-400 to-green-400 rounded-full transition-all duration-1000 ease-out shadow-lg"
                                            style={{ width: `${item.percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4"></div>
                            <p className="text-white/60 text-lg">No completed tasks yet. Keep working!</p>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes slide-in {
                    from { opacity: 0; transform: translateX(-20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                
                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }
                
                .animate-slide-in {
                    animation: slide-in 0.6s ease-out forwards;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    );
}

export default TodoHome;