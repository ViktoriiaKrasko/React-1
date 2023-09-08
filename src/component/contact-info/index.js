import "./index.css";
import Heading from "../heading";
import Description from "../description";

export default function ContactInfo({
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
}) {
  return (
    <div className="contact-info">
      <div className="contact-info__host">
        <img className="contact-info__host--image" src={image} alt="host" />
        <div className="contact-info__host--contacts">
          <Heading children={`Господар - ${name}`} />
          <div className="contact-info__host--details">
            <span className="contact-info__host--detail">{phone}</span>
            <span className="contact-info__host--detail">{response_time}</span>
            <span className="contact-info__host--detail">
              {response_rate}% відсотків швидкості відгуку
            </span>
          </div>
        </div>
      </div>
      <Description children={info} />
    </div>
  );
}
