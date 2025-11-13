import Content, { ContentProps } from "./Content";
import Form from "./Form";
import Quote from "./Quote";
import Share from "./Share";
import VideoPlayer from "./Video";
import CortinaForm from "./CortinaForm";
import MedijskeVsebine from "./MedijskeVsebine";
import Logos from "./Logos";
import Videos from "./Videos";
import News from "./News";
import Events from "./Events";
import WallOfFame from "./WallOfFame";
import CortinaResults from "./CortinaResults";
import RelatedPages from "./RelatedPages";

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
    videos: Videos,
    news: News,
    events: Events,
    wall_of_fame: WallOfFame,
    cortina_results: CortinaResults,
    related_pages: RelatedPages,
    related_pages_two: RelatedPages,
  };
  
  // Debug: log component type to see what's being passed
 // console.log('Builder component type:', type, 'Data:', data);
  
  const Component = components[type] ? components[type] : NotFound; 

  return <Component {...data} {...globals} />;
}

function NotFound() {
  return <div></div>;
}
