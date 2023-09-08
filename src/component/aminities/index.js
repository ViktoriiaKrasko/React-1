import "./index.css";
import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";
import pool from "./pool.svg";
import gym from "./gym.svg";
import breakfast from "./breakfast.svg";
import wifi from "./wifi.svg";
import parking from "./parking.svg";
import pets from "./pets.svg";
import airport from "./airport.svg";
import concierge from "./concierge.svg";
import roomService from "./roomService.svg";
import childFriendly from "./childFriendly.svg";

export default function Amenities({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <Box className="amenities" shadow>
      <Heading border>Зручності: </Heading>
      {hasPool && <ListItem imageSrc={pool}>Басейн</ListItem>}
      {hasGym && <ListItem imageSrc={gym}>Спортивний зал</ListItem>}
      {hasFreeBreakfast && (
        <ListItem imageSrc={breakfast}>Безкоштовний сніданок</ListItem>
      )}
      {hasFreeWiFi && <ListItem imageSrc={wifi}>Безкоштовний Wi-Fi</ListItem>}
      {hasParking && (
        <ListItem imageSrc={parking}>Безкоштовний вуличний паркінг</ListItem>
      )}
      {hasPetsAllowed && (
        <ListItem imageSrc={pets}>
          Дозволено розміщення з домашніми тваринами
        </ListItem>
      )}
      {hasAirportShuttle && (
        <ListItem imageSrc={airport}>Трансфер до/з аеропорту</ListItem>
      )}
      {hasConciergeService && (
        <ListItem imageSrc={concierge}>Консьєрж-сервіс</ListItem>
      )}
      {hasRoomService && (
        <ListItem imageSrc={roomService}>Обслуговування номерів</ListItem>
      )}
      {hasChildFriendly && (
        <ListItem imageSrc={childFriendly}>Підходить для дітей</ListItem>
      )}
    </Box>
  );
}
