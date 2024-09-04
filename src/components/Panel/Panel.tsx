import { ReactNode } from "react";
import "./Panel.scss";

const BASE_CLASS = "panel";

interface Props {
  header: ReactNode;
  children: ReactNode;
}

export const Panel: React.FC<Props> = ({ header, children }) => {
  return (
    <div className={BASE_CLASS}>
      <div className={`${BASE_CLASS}__header`}>{header}</div>
      <div className={`${BASE_CLASS}__form`}>{children}</div>
    </div>
  );
};
