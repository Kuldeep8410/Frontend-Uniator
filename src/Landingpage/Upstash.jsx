export default function StatsSection() {
    return (
      <div className="relative bg-base-100 text-white flex flex-col items-center justify-center min-h-screen px-6">
        <h1 className="text-7xl font-bold bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
          Fast Anywhere
        </h1>
        <div className="mt-16 relative w-full max-w-5xl">
          {/* Background Globe Effect */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[600px] h-[300px] bg-gray-800 rounded-full blur-2xl opacity-30"></div>
          </div>
  
          {/* Stats Card */}
          <div className="relative bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 flex flex-wrap md:flex-nowrap justify-around items-center shadow-lg gap-4 text-center">
          <StatItem value="40B" label="Redis Commands" />
          <StatItem value="90M" label="QStash Messages" />
          <StatItem value="8M" label="Vector Queries" />
          <StatItem value=">99.99%" label="Uptime" />
        </div>

  
          <p className="text-sm text-gray-400 text-center mt-4">* weekly average</p>
        </div>
      </div>
    );
  }
  
  function StatItem({ value, label }) {
    return (
      <div className="flex flex-col items-center">
      <span className="text-3xl font-bold text-green-400">{value}</span>
      <span className="text-lg mt-0.5 ml-2">{label}</span>
      </div>
    );
  }
  