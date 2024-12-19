import cx from "classnames";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cx("max-w-7xl mx-auto px-6 lg:px-10 xl:px-20", className)}>
      {children}
    </div>
  );
}
