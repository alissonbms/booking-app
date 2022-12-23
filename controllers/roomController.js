import { Types } from "mongoose";
import PropertyModel from "../models/Property.js";
import RoomModel from "../models/Room.js";

import {
  couldNotCreateError,
  createError,
  idIsRequiredError,
  missingEntityRegistersError,
  notFoundOrInvalidDataError,
} from "../utils/customErrors.js";

export const getRooms = async (req, res, next) => {
  try {
    const rooms = await RoomModel.find();

    if (!rooms.length) {
      return next(missingEntityRegistersError("rooms"));
    }

    res.status(200).json(rooms);
  } catch (error) {
    next(error);
  }
};

export const getRoomById = async (req, res, next) => {
  const id = req.params.id;

  if (!Types.ObjectId.isValid(id)) {
    return next(idIsRequiredError("room"));
  }

  try {
    const room = await RoomModel.findById(id);

    if (!room) {
      return next(notFoundOrInvalidDataError("room"));
    }

    res.status(200).json(room);
  } catch (error) {
    next(error);
  }
};

export const createRoom = async (req, res, next) => {
  const propertyid = req.params.propertyid;

  if (!Types.ObjectId.isValid(propertyid)) {
    return next(idIsRequiredError("property"));
  }

  const { title, description, maxPeople, price, roomNumbers } = req.body;

  if (!title || !description || !maxPeople || !price || !roomNumbers) {
    return next(allFieldsAreRequiredError());
  }

  try {
    const newRoom = await RoomModel.create({
      title,
      description,
      maxPeople,
      price,
      roomNumbers,
    });

    if (!newRoom) {
      return next(couldNotCreateError("room"));
    }

    const propertyUpdated = await PropertyModel.findByIdAndUpdate(propertyid, {
      $push: { rooms: newRoom._id },
    });

    if (!propertyUpdated) {
      return next(notFoundOrInvalidDataError("property"));
    }

    res.status(201).json(newRoom);
  } catch (error) {
    next(error);
  }
};

export const updateRoom = async (req, res, next) => {
  const id = req.params.id;

  if (!Types.ObjectId.isValid(id)) {
    return next(idIsRequiredError("room"));
  }

  try {
    const updatedRoom = await RoomModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedRoom) {
      return next(notFoundOrInvalidDataError("room"));
    }

    res.status(200).json(updatedRoom);
  } catch (error) {
    next(error);
  }
};

export const updateAvailabilityRoom = async (req, res, next) => {
  const id = req.params.id;

  if (!Types.ObjectId.isValid(id)) {
    return next(idIsRequiredError("roomNumber"));
  }

  try {
    await RoomModel.updateOne(
      { "roomNumbers._id": id },
      { $push: { "roomNumbers.$.unavailableDates": req.body.dates } }
    );
    res.status(200).json({ message: "Room updated" });
  } catch (error) {
    next(error);
  }
};

export const deleteRoom = async (req, res, next) => {
  const propertyid = req.params.propertyid;
  const id = req.params.id;

  if (!Types.ObjectId.isValid(propertyid) || !Types.ObjectId.isValid(id)) {
    return next(createError(400, "Property ID and Room ID are required"));
  }

  try {
    const property = await PropertyModel.findOne({ rooms: id });

    if (!property) {
      return next(
        createError(
          400,
          "Room not found in any property. Make sure you have entered the correct Room ID"
        )
      );
    }

    if (property._id.toString() !== propertyid) {
      return next(
        createError(
          409,
          "Specified Property and Room do not match. Make sure you have entered the correct Property ID"
        )
      );
    }

    const deletedRoom = await RoomModel.findByIdAndDelete(id);

    // if (!deletedRoom) {
    //   return next(notFoundOrInvalidDataError("room"));
    // }

    const updatedProperty = await PropertyModel.findByIdAndUpdate(propertyid, {
      $pull: { rooms: id },
    });

    if (!updatedProperty) {
      return next(
        createError(
          400,
          "Error has occurred while trying to remove this room from your hotel"
        )
      );
    }

    res.status(200).json({
      message: `Room deleted with success`,
    });
  } catch (error) {
    next(error);
  }
};
