import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";
import capacity from "./capacity.svg";
import bedroom from "./bedroom.svg";
import sleepingbed from "./sleepingBed.svg";
import bathRoom from "./bathRoom.svg";

import "./index.css";

export default function RoomDetails({ guests, bedrooms, beds, baths }) {
  const guest = guests === 1 ? " гість" : " гостя";
  const bedRoom = bedrooms === 1 ? " спальня" : " спальні";
  const bed = beds === 1 ? " ліжко" : " ліжка";
  const bath = baths === 1 ? " ванна кімната" : " ванних кімнати";
  return (
    <Box className="room__details" shadow>
      <Heading border>Деталі помешкання: </Heading>
      <ListItem imageSrc={capacity}>
        {guests}
        {guest}
      </ListItem>
      <ListItem imageSrc={bedroom}>
        {bedrooms}
        {bedRoom}
      </ListItem>
      <ListItem imageSrc={sleepingbed}>
        {beds}
        {bed}
      </ListItem>
      <ListItem imageSrc={bathRoom}>
        {baths}
        {bath}
      </ListItem>
    </Box>
  );
}
