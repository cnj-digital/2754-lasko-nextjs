import InfoBanner from "../InfoBanner";

type QuoteProps = {
  quote_content_field: string;
};

export default function Quote({ quote_content_field }: QuoteProps) {
  return <InfoBanner copy={quote_content_field} />;
}
