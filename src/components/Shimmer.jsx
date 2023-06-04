import React from 'react';
export const Loader=()=>{
<div className="animate-pulse w-44 h-48 bg-slate-400 rounded-lg"></div>
}
const Shimmer = () => (
  <div className="flex flex-wrap justify-center gap-5 mt-5">
  <Loader/><Loader/><Loader/>
  <Loader/><Loader/><Loader/>
  <Loader/><Loader/><Loader/>
  </div>
);

export default Shimmer;