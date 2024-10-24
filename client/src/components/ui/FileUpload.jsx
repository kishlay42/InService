
function FileUpload({ className = '' }) {
  return (
    <div className={`flex flex-wrap gap-8 self-start ${className}`}>
      <div className="grow my-auto text-2xl leading-none">Attachments:</div>
      <div className="flex flex-wrap flex-auto gap-1.5 px-7 py-6 text-lg leading-tight text-center border border-dashed border-zinc-400 max-md:px-5">
        <label htmlFor="fileUpload" className="cursor-pointer">
          <span className="text-blue-500">Browse Files</span>
          <span className="self-start mt-1">or</span>
          <span className="basis-auto">Drag & Drop Files Here</span>
        </label>
        <input
          type="file"
          id="fileUpload"
          className="sr-only"
          aria-label="Upload files"
          multiple
        />
      </div>
    </div>
  );
}

export default FileUpload;