import InfoBanner from "../InfoBanner";

type QuoteProps = {
  copy: string;
};

export default function Quote({ copy }: QuoteProps) {
  return <InfoBanner copy={copy} />;
}
