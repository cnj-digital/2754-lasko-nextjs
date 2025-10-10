import Content, { ContentProps } from "./Content";
import Form from "./Form";
import Quote from "./Quote";
import Share from "./Share";
import VideoPlayer from "./Video";
import CortinaForm from "./CortinaForm";
import MedijskeVsebine from "./MedijskeVsebine";
import Logos from "./Logos"; 

type BuilderComponentProps = {
  type: string;
  data: ContentProps;
  globals: any;
};

export default function BuilderComponent({ 
  type,
  data,
  globals,
}: BuilderComponentProps) {
  const components: { [key: string]: React.ComponentType<any> } = {
    content_set: Content,
    share: Share,
    quote: Quote,
    video: VideoPlayer,
    form: Form,
    cortina_form: CortinaForm,
    medijske_vsebine: MedijskeVsebine,
    logos: Logos,
  };
  
  // Debug: log component type to see what's being passed
  console.log('Builder component type:', type, 'Data:', data);
  
  const Component = components[type] ? components[type] : NotFound;

  return <Component {...data} {...globals} />;
}

function NotFound() {
  return <div></div>;
}
