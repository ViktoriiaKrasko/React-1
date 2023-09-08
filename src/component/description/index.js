import Heading from "../heading";

import "./index.css";

export default function Description({ title, children, border }) {
  return (
    <div className="description">
      <Heading>{title}</Heading>
      <span className={`${border ? "border" : ""}`}>
        <p className="description__text">{children}</p>
      </span>
    </div>
  );
}
