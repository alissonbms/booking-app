import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import useFetch from "../../hooks/useFetch";

const ProgressBar = () => {
  const { data, isFetching } = useFetch(`/api/room`);

  const rooms = [];

  data.map((room) => {
    room.roomNumbers.map((roomNumber) => {
      rooms.push(roomNumber);
    });
  });

  const roomsFiltered = rooms.filter(
    (roomNumber) => roomNumber.unavailableDates.length > 0
  );

  const value = (roomsFiltered.length * 100) / data.length;

  return (
    <CircularProgressbar
      value={value}
      text={`${Math.round(value)}%`}
      strokeWidth={5}
    />
  );
};

export default ProgressBar;
