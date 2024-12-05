type CardNewsProps = {
  title: string;
  tagline: string;
  image: string;
};

export default function CardNews({ title, tagline, image }: CardNewsProps) {
  return (
    <div>
      <div>
        <img src={image} />
      </div>
      <div>
        <p>{tagline}</p>
        <h3>{title}</h3>
      </div>
    </div>
  );
}
