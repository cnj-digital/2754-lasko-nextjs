import Container from "./Container";

type InfoBannerProps = {
  copy: string;
};

export default function InfoBanner({ copy }: InfoBannerProps) {
  return (
    <Container className=" py-20">
      <div className="relative rounded-4xl   shadow-card  px-6 lg:p-10 pt-6 pb-8 bg-[#F3F3F3]">
        <div
          className="   text-green-800 relative font-bold text-xl "
          dangerouslySetInnerHTML={{ __html: copy }}
        ></div>
        <div
          className="absolute z-0 inset-0 h-full w-full opacity-20"
          style={{ backgroundImage: "url('/bg-green.png')" }}
        />
      </div>
    </Container>
  );
}
