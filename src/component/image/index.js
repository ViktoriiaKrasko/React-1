import "./index.css";

export default function Image({ src, name }) {
  return <img src={src} alt={name} className="image" />;
}
