import Container from "../Container";

export default function Form({ form }: any) {
  console.log(form, "content");
  return (
    <div
      className="max-w-8xl my-10 px-6 py-10 lg:pb-20 w-full mx-auto flex flex-col items-center rounded-4xl "
      style={{ backgroundImage: "url('/bg-green.jpg')" }}
    >
      <Container className="w-full">
        <h2 className=" text-2xl lg:text-[32px] leading-[1.4] lg:leading-[1.4] text-white font-neutraface text-center ">
          {form.title}
        </h2>
        <div className=""></div>
      </Container>
    </div>
  );
}
