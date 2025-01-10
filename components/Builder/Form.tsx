"use client";

import { useEffect, useState } from "react";
import ButtonSolid from "../Buttons/Solid";
import Container from "../Container";
import Checkbox from "./Form/Checkbox";
import FileInput from "./Form/File";
import Input from "./Form/Input";
import MultipleChoice from "./Form/MultipleChoice";
import SingleChoice from "./Form/SingleChoice";
import TextArea from "./Form/Textarea";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import CloseIcon from "../Icons/Close";
import cx from "classnames";

type FormItemTypes =
  | "text_input"
  | "text_area"
  | "checkbox"
  | "single_choice"
  | "multiple_choice"
  | "file";

const FormComponents = {
  text_input: Input,
  text_area: TextArea,
  checkbox: Checkbox,
  single_choice: SingleChoice,
  multiple_choice: MultipleChoice,
  file: FileInput,
};

const DynamicFormComponent = ({
  type,
  ...props
}: { type: FormItemTypes } & any) => {
  const Component = FormComponents[type as FormItemTypes] || NotFound;
  return <Component {...props} />;
};

export default function Form({ form }: any) {
  const [formState, setFormState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    try {
      // Add your form submission logic here

      const formHtml = e.currentTarget as HTMLFormElement;
      const formData = new FormData(formHtml);

      // Create an object to store the processed form data
      const processedData: Record<string, string | string[]> = {};

      // Iterate through all form entries
      for (const [key, value] of formData.entries()) {
        // Check if the key ends with []
        if (key.endsWith("[]")) {
          const baseKey = key.slice(0, -2); // Remove [] from the key
          if (!processedData[baseKey]) {
            // Get all values and convert them to strings
            processedData[baseKey] = formData
              .getAll(key)
              .map((value) => value.toString());
          }
        } else {
          processedData[key] = value as string;
        }
      }

      await fetch("https://cms.lasko.eu/api/form-results", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: form.id,
          results: Object.fromEntries(formData),
        }),
      });

      setFormState("success");
    } catch (err) {
      setFormState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong"
      );
    }
  };

  if (!form) return null;

  return (
    <div
      className="max-w-8xl my-10 py-10 lg:pb-20 w-full mx-auto flex flex-col items-center rounded-4xl "
      style={{ backgroundImage: "url('/bg-green.jpg')" }}
    >
      <Container className="w-full">
        <form onSubmit={handleSubmit} className="w-full">
          <h2 className=" text-2xl lg:text-[32px] leading-[1.4] lg:leading-[1.4] text-white font-neutraface text-center ">
            {form.title}
          </h2>
          <div className="mt-6 py-6 lg:px-8 lg:bg-black/30 lg:backdrop-blur-sm rounded-3xl space-y-3 max-w-lg mx-auto">
            {form.items.map((item: any, i: number) => (
              <DynamicFormComponent
                key={i}
                {...item}
                errorMessage={form.required_error}
              />
            ))}
            <div
              dangerouslySetInnerHTML={{ __html: form.disclaimer }}
              className="text-xs lg:text-sm mt-4 text-white bg-black/30 lg:bg-transparent rounded-xl p-4 lg:p-0"
            ></div>
            <div
              className={cx(
                "text-red-500 text-xs lg:text-sm bg-black/30 lg:bg-transparent rounded-xl p-4 lg:p-0 ",
                errorMessage ? "block" : "hidden"
              )}
            >
              {errorMessage}
            </div>
          </div>
          <ButtonSolid
            title={form.submit_button_label}
            size="small"
            className={cx(
              "mt-6 mx-auto w-full lg:w-auto text-center justify-center",
              formState === "loading" ? "opacity-50 cursor-not-allowed" : ""
            )}
            type="submit"
          />
        </form>
      </Container>

      <NotificationToast
        title={form.success.title}
        message={form.success.content}
        onClose={() => setFormState("idle")}
        isOpen={formState === "success"}
      />
    </div>
  );
}

function NotFound() {
  return <div>Not found</div>;
}

function NotificationToast({
  message = "Successfully registered for the prize game.",
  title = "Success",
  duration = 5000,
  onClose,
  isOpen = true,
}: {
  message?: string;
  title?: string;
  duration?: number;
  onClose: () => void;
  isOpen?: boolean;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isOpen) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <Dialog
      static
      unmount={false}
      open={false}
      onClose={() => onClose()}
      className=" pointer-events-none"
    >
      <div
        className={cx(
          " fixed top-4 w-full px-4 md:px-0 z-[100] duration-300 md:right-4 md:w-auto pointer-events-auto transition",
          isOpen ? "opacity-100 translate-y-0" : "-translate-y-full opacity-0"
        )}
      >
        <DialogPanel className="bg-green-500 text-white rounded-xl flex items-start shadow-lg p-4 max-w-sm w-full relative">
          <div className="pr-3">
            <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
            <div
              className="mt-3"
              dangerouslySetInnerHTML={{ __html: message }}
            />
          </div>

          <button
            onClick={() => onClose && onClose()}
            className=" text-white bg-black/20 backdrop-blur-sm p-2  rounded-lg transition-colors"
            aria-label="Close notification"
          >
            <CloseIcon className="size-6" />
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
