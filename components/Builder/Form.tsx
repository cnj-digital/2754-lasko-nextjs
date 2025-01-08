"use client";

import ButtonSolid from "../Buttons/Solid";
import Container from "../Container";
import Checkbox from "./Form/Checkbox";
import FileInput from "./Form/File";
import Input from "./Form/Input";
import MultipleChoice from "./Form/MultipleChoice";
import SingleChoice from "./Form/SingleChoice";
import TextArea from "./Form/Textarea";

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
} as const;

const DynamicFormComponent = ({
  type,
  ...props
}: { type: FormItemTypes } & any) => {
  const Component = FormComponents[type as FormItemTypes] || NotFound;
  return <Component {...props} />;
};

export default function Form({ form }: any) {
  console.log(form, "content");

  return (
    <div
      className="max-w-8xl my-10 px-6 py-10 lg:pb-20 w-full mx-auto flex flex-col items-center rounded-4xl "
      style={{ backgroundImage: "url('/bg-green.jpg')" }}
    >
      <Container className="w-full">
        <form>
          <h2 className=" text-2xl lg:text-[32px] leading-[1.4] lg:leading-[1.4] text-white font-neutraface text-center ">
            {form.title}
          </h2>
          <div className="mt-6 py-6 px-8 bg-black/30 backdrop-blur-sm rounded-3xl space-y-3 max-w-lg mx-auto">
            {form.items.map((item: any, i: number) => (
              <DynamicFormComponent key={i} {...item} />
            ))}
            <div
              dangerouslySetInnerHTML={{ __html: form.disclaimer }}
              className="text-xs lg:text-sm mt-4"
            ></div>
          </div>
          <ButtonSolid
            title={form.submit_button_label}
            onClick={() => console.log("submit")}
            size="small"
            className="mt-6 mx-auto"
            type="submit"
          />
        </form>
      </Container>
    </div>
  );
}

function NotFound() {
  return <div>Not found</div>;
}
