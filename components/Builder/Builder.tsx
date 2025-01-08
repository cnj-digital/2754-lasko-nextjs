import Content, { ContentProps } from "./Content";
import Form from "./Form";
import Quote from "./Quote";
import Share from "./Share";
import VideoPlayer from "./Video";

type BuilderComponentProps = {
  type: string;
  data: ContentProps;
};

export default function BuilderComponent({
  type,
  data,
}: BuilderComponentProps) {
  const components: { [key: string]: React.ComponentType<any> } = {
    content_set: Content,
    share: Share,
    quote: Quote,
    video: VideoPlayer,
    form: Form,
  };
  const Component = components[type] ? components[type] : NotFound;

  return <Component {...data} />;
}

function NotFound() {
  return <div></div>;
}
