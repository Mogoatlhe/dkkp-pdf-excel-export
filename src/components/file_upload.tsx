import React from "react";
import Folder from "./folder";
import Swal from "sweetalert2";
import axios from "axios";

const File_Upload = () => {
  const get_files = () => {
    const files_btn = document.querySelector("#files") as HTMLElement | null;

    if (files_btn !== null) {
      files_btn.click();
    }
  };

  const submitFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files?.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "No files were uploaded",
      });
      return;
    }

    const data = formatFiles(files);
    const response = await axios.post(
      "http://localhost:5000/upload_files",
      data
    );
    console.log(response);
  };

  const formatFiles = (files: FileList | null) => {
    const data = new FormData();

    if (files !== null)
      for (let i = 0; i < files.length; i++) {
        data.append(files[i].name, files[i]);
      }

    return data;
  };

  return (
    <div className="flex flex-col items-center h-screen w-screen gap-6">
      <h2 className="text-slate-400 font-bold mt-14 text-4xl w-80">
        Upload all the quartely documents
      </h2>
      <div className="flex flex-col items-center">
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
            <form
              className="hidden"
              method="POST"
              encType="multipart/form-data"
            >
              <input
                type="file"
                id="files"
                name="files"
                multiple
                onChange={submitFile}
                accept="application/pdf"
              />
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
        <div className="h-8 w-72 border border-slate-900 shadow-xl rounded-b-md flex items-center justify-center">
          <progress
            className="w-64 rounded-md"
            aria-label="Content loading…"
            max="100"
            value="0"
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default File_Upload;
