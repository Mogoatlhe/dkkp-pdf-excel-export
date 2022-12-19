import Folder from "./folder";

const File_Upload = () => {
  const get_files = () => {
    const files_btn = document.querySelector("#files") as HTMLElement | null;

    if (files_btn !== null) {
      files_btn.click();
    }
  };
  return (
    <div className="flex flex-col items-center h-screen w-screen bg-sky-500 gap-6">
      <h2 className="text-slate-300 font-bold mt-14 text-4xl w-80">
        Upload all the quartely documents
      </h2>
      <div className="w-80 min-h-64 bg-slate-900 py-5 rounded-xl p-1 grid">
        <div className="flex flex-col p-6 gap-2 items-center border border-dashed border-slate-400 w-11/12 min-h-56 place-self-center rounded-lg">
          <Folder />
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
            className="font-bold bg-sky-500 mt-2 text-slate-300"
            onClick={get_files}
          >
            Browse files
          </button>
        </div>
      </div>
    </div>
  );
};

export default File_Upload;
