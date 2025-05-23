import React from 'react';

const Loader2 = () => {
  return (
    <div className="hover:scale-110 transition-all ease-in-out cursor-pointer hover:shadow-xl hover:shadow-neutral-700 delay-250 animate-spin delay-50 duration-1000 bg-gradient-to-br border-4 shadow-inner shadow-neutral-700 border-neutral-950 from-white/80 to-gray-600 rounded-full grid place-items-center z-0 h-20 w-20 relative">
      <div className="rounded-full bg-neutral-900 absolute rotate-[90deg] z-20 h-20 scale-50 w-2" />
      <div className="rounded-full bg-neutral-900 absolute rotate-[180deg] z-20 h-20 scale-50 w-2" />
    </div>
  );
}

export default Loader2;
