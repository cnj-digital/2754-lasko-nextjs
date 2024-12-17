import ButtonSolid from "@/components/Buttons/Solid";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-20">
      <img src="/404.png" alt="404" className=" mt-20 max-h-[400px] mx-auto" />
      <p className="text-black text-center mx-auto max-w-xl text-2xl font-bold leading-[1.4] lg:text-[32px]">
        Ups! Naleteli ste na dno soda. Vrnite se tja, kjer teče pivo!{" "}
      </p>
      <ButtonSolid
        url="/"
        title="Naše pivo"
        className="mt-6 lg:mt-10 mx-auto "
      />
    </Container>
  );
}
