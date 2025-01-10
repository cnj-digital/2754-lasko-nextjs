import FileIcon from "@/components/Icons/File";
import { useRef } from "react";

type FileUploadProps = {
  label: string;
  content: string;
  required?: boolean;
  accept?: string;
  maxSize?: number;
};

export default function FileInput({
  label,
  content,
  required = false,
  accept = "image/jpeg,image/png",
  maxSize = 10 * 1024 * 1024, // 10 MB in bytes
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="pb-5">
      <button
        onClick={handleClick}
        type="button"
        className="w-full p-4 bg-white/20 rounded-xl  transition-colors cursor-pointer flex items-center gap-2 group"
      >
        <FileIcon className="size-8 text-white" />

        <div className="text-left">
          <div className="text-white font-medium group-hover:underline">
            {label}
          </div>
          <div
            className="text-white/70 text-sm mt-1"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>

        <input
          ref={inputRef}
          type="file"
          accept={accept}
          required={required}
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file && file.size > maxSize) {
              alert(`File size must be less than ${maxSize / (1024 * 1024)}MB`);
              e.target.value = "";
            }
          }}
        />
      </button>
    </div>
  );
}
