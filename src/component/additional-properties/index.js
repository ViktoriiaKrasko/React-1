import Description from "../description";
import Heading from "../heading";
import Box from "../box";

import "./index.css";

export default function AdditionalProperties({
  house_rules,
  cancellation_policy,
  local_transportation,
  special_offers,
  checkin_instructions,
  host_languages,
}) {
  const language = host_languages.join(", ");

  return (
    <Box shadow>
      <Heading border>Додаткові властивості: </Heading>
      <Description border>
        <span className="subhead">Правила дому: </span>
        {house_rules}
      </Description>
      <Description border>
        <span className="subhead">Політика скасування: </span>
        {cancellation_policy}
      </Description>
      <Description border>
        <span className="subhead">Місцевий транспорт: </span>
        {local_transportation}
      </Description>
      <Description border>
        <span className="subhead">Мови хоста: </span>
        {language}
      </Description>
      <Description border>
        <span className="subhead">Спеціальні пропозиції: </span>
        {special_offers}
      </Description>
      <Description border>
        <span className="subhead">Інструкції щодо реєстрації: </span>
        {checkin_instructions}
      </Description>
    </Box>
  );
}
