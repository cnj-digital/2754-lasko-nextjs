import cx from "classnames";

export type ContentProps = {
  title: string | null;
  variant: {
    value: string;
  };
  asset: { permalink: string } | null;
  content_field: {
    text: string;
    type: string;
  }[];
};

export default function Content({
  title,
  asset,
  variant,
  content_field,
}: ContentProps) {
  return (
    <div className={cx("grid py-20 gap-10", asset ? "grid-cols-2" : "")}>
      <div className="px-6">
        <h2 className="text-green-800 font-black font-neutraface">{title}</h2>
        <div className="mt-4">
          {content_field.map((item, i) => {
            if (item.type === "text") {
              return (
                <div
                  key={i}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                  className="content"
                ></div>
              );
            } else if (item.type === "cta") {
            }
          })}
        </div>
      </div>
      {asset && (
        <img
          src={asset.permalink}
          alt="content"
          className={cx(
            " rounded-2xl",
            variant?.value === "left" ? "order-1" : ""
          )}
        />
      )}
    </div>
  );
}
