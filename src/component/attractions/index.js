import Heading from "../heading";
import { Fragment } from "react";
import ListItem from "../list-item";

import "./index.css";

export default function NearbyAttractions({ list }) {
  return (
    <div className="attractions">
      <Heading>Пам'ятки поблизу</Heading>

      <div className="attractions__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ name, link }) {
  return (
    <ListItem
      children={
        <a className="link" href={link}>
          {name}
        </a>
      }
    ></ListItem>
  );
}
