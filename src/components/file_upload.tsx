const File_Upload = () => {
  const get_files = () => {
    const files_btn = document.querySelector("#files") as HTMLElement | null;

    if (files_btn !== null) {
      files_btn.click();
    }
  };
  return (
    <div className="w-80 h-64 bg-slate-900 rounded-xl p-1 grid">
      <div className="flex flex-col p-6 items-center border border-dashed border-slate-400 w-11/12 h-56 place-self-center rounded-lg">
        <p className="font-bold text-slate-400 text-center">
          Drag your documents here to start uploading
        </p>
        <div className="flex gap-1 mt-4 ">
          <div className="border-t border-slate-500 w-8 mt-[9px]"></div>
          <p className="text-slate-500">OR</p>
          <div className="border-t border-slate-500 w-8 mt-[9px]"></div>
        </div>
        <form className="hidden">
          <input type="file" id="files" name="files" multiple />
          <input type="submit" id="submit" />
        </form>
        <button
          className="font-bold bg-teal-900 mt-2 text-slate-300"
          onClick={get_files}
        >
          Browse files
        </button>
      </div>
    </div>
  );
};

export default File_Upload;
