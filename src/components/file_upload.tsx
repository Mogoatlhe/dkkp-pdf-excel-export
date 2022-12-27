import React from "react";
import { useState } from "react";
import Folder from "./folder";
import loading from "../assets/loading.gif";
import Swal from "sweetalert2";

const File_Upload = () => {
  const [loadingVisibility, setLoadingVisibility] = useState("hidden");
  const [uploadVisibility, setUploadVisibility] = useState("");

  const get_files = () => {
    const files_btn = document.querySelector("#files") as HTMLElement | null;

    if (files_btn !== null) {
      files_btn.click();
    }
  };

  const submitFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadVisibility("hidden");
    setLoadingVisibility("");
    const files = e.target.files;

    if (files?.length === 0) {
      display_error("No files were uploaded");
      setUploadVisibility("");
      setLoadingVisibility("hidden");
      return;
    }

    const data = formatFiles(files);

    try {
      const response = await fetch("http://localhost:5000/upload_files", {
        method: "POST",
        body: data,
      });
      console.log(await response.json());
    } catch (error) {
      if (error instanceof Error) display_error(error.message);
    } finally {
      setUploadVisibility("");
      setLoadingVisibility("hidden");
    }
  };

  const display_error = (text: string) => {
    Swal.fire({
      icon: "error",
      title: "Error!",
      text,
    });
  };

  const formatFiles = (files: FileList | null) => {
    const data = new FormData();

    if (files !== null)
      for (let i = 0; i < files.length; i++) {
        data.append(files[i].name, files[i]);
      }

    return data;
    data;
  };

  return (
    <div className="flex flex-col items-center h-screen w-screen gap-6">
      <h2
        className={`text-slate-400 font-bold mt-14 text-4xl w-80 ${uploadVisibility}`}
      >
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
      </div>
      <img src={loading} className={`${loadingVisibility}`} />
    </div>
  );
};

export default File_Upload;
