import Content, { ContentProps } from "./Content";
import Share from "./Share";

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
  };
  const Component = components[type] ? components[type] : NotFound;

  return <Component {...data} />;
}

function NotFound() {
  return <div className="text-black">Component not Found</div>;
}
