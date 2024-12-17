import FacebookIcon from "../Icons/Facebook";
import InstagramIcon from "../Icons/Instagram";
import LinkIcon from "../Icons/Link";

export default function Share() {
  return (
    <div
      className="px-6 py-8 flex flex-col items-center justify-center rounded-3xl w-full bg-cover my-20"
      style={{ backgroundImage: 'url("/bg-green.jpg")' }}
    >
      <span className="text-2xl text-white font-neutraface">Povej Naprej</span>
      <div className="flex flex-wrap gap-4 mt-6 items-center">
        <button className="">
          <InstagramIcon className="text-white size-14" />
        </button>
        <button>
          <FacebookIcon className="text-white size-14" />
        </button>
        <button className="bg-white text-green-800 rounded-xl font-semibold px-6 py-1.5 border border-white text-xl flex items-center ">
          <LinkIcon className="size-8 mr-2" />
          <span>Kopiraj povezavo</span>
        </button>
      </div>
    </div>
  );
}
