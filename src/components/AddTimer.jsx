import { useState, useEffect } from "react";

// Mock toast for demonstration
const toast = {
    warning: (message) => console.log('Toast Warning:', message)
};

function StartTimer({ initialTime }) {
    const timeInmin = initialTime;
    const [time, setTime] = useState(timeInmin);
    const [isRunning, setIsRunning] = useState(false);
    const [start, setStart] = useState(true);

    useEffect(() => {
        let timer;
        if (isRunning && time > 0) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning, time]);

    const startHandler = () => {
        setIsRunning(true);
        setStart(false);
    };

    const pauseHandler = () => {
        setIsRunning(false);
        setStart(true);
    };

    if (time == 0) {
        toast.warning("timeout bro");
    }

    const progress = ((timeInmin - time) / timeInmin) * 100;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
        <div className="relative backdrop-blur-sm bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-white/30 rounded-xl p-3 shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 min-w-[140px]">
            {/* Timer display */}
            <div className="flex items-center justify-between mb-2">
                <div className="text-white font-mono text-sm font-bold">
                    {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                </div>
                <div className="text-xs text-white/70">
                    {isRunning ? '⏳' : time === 0 ? '⏰' : '⏸️'}
                </div>
            </div>

            {/* Compact progress bar */}
            <div className="relative w-full h-1.5 bg-white/20 rounded-full overflow-hidden mb-2">
                <div
                    className="h-full bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            {/* Control button */}
            <div className="flex justify-center">
                {isRunning ? (
                    <button
                        onClick={pauseHandler}
                        disabled={!isRunning}
                        className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-xs font-medium rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-50"
                    >
                        Pause
                    </button>
                ) : (
                    <button
                        onClick={startHandler}
                        disabled={isRunning || time <= 0}
                        className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-xs font-medium rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-50"
                    >
                        {time <= 0 ? 'Reset' : 'Start'}
                    </button>
                )}
            </div>

            {/* Subtle pulsing when running */}
            {isRunning && (
                <div className="absolute inset-0 rounded-xl border border-indigo-400/30 animate-pulse"></div>
            )}
        </div>
    );
}

function AddTimer() {
    const [timer, setTimer] = useState({ time: '' });
    const [timerCreated, setTimerCreated] = useState(false);

    const timeHandler = (e) => {
        setTimer({ ...timer, [e.target.name]: e.target.value });
    };

    const makeTimer = () => {
        if (timer.time) {
            setTimerCreated(!timerCreated);
        }
    };

    return (
        <div className="flex items-center gap-2">
            {/* Compact timer input */}
            {!timerCreated ? (
                <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 border border-white/20 rounded-lg p-2 hover:bg-white/15 transition-all duration-300">
                    <input
                        className="w-12 h-6 px-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/60 text-xs text-center focus:outline-none focus:ring-1 focus:ring-purple-400 transition-all duration-200"
                        type="number"
                        name="time"
                        value={timer.time}
                        onChange={timeHandler}
                        placeholder="5"
                        min="1"
                        max="999"
                    />
                    <span className="text-white/70 text-xs">min</span>
                    <button
                        className="px-2 py-1 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white text-xs font-medium rounded transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-50"
                        onClick={makeTimer}
                        disabled={!timer.time || timer.time <= 0}
                    >
                        ⏱️
                    </button>
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <StartTimer initialTime={parseInt(timer.time) * 60} />
                    <button
                        className="px-2 py-1 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white text-xs font-medium rounded transition-all duration-200 transform hover:scale-105 active:scale-95"
                        onClick={makeTimer}
                    >
                        🔄
                    </button>
                </div>
            )}
        </div>
    );
}

export default AddTimer;