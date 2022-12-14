
const File_Upload = () => {
  return (<div className = "w-80 h-64 bg-slate-900 rounded-xl p-1 grid">
    <div className="flex flex-col p-6 items-center border border-dashed border-slate-400 w-11/12 h-56 place-self-center rounded-lg">
      <p className="font-bold text-slate-400 text-center">Drag your documents here to start uploading</p>
      <div className="flex gap-1 mt-4 ">
        <div className="border-t border-slate-500 w-8 mt-[9px]"></div>
        <p className="text-slate-500">OR</p>
        <div className="border-t border-slate-500 w-8 mt-[9px]"></div>
      </div>
    </div>
  </div>)
}

export default File_Upload