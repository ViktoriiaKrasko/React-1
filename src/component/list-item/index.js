import "./index.css";

export default function ListItem({ children, imageSrc, title }) {
  return (
    <li className="list-item">
      {imageSrc && <img height={24} width={24} src={imageSrc} alt="Icon" />}
      <div className="list__item-block">
        {title && <strong className="list__item-title">{title}</strong>}
        <div className="list__item-content">{children}</div>
      </div>
    </li>
  );
}
