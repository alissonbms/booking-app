import { Types } from "mongoose";
import PropertyModel from "../models/Property.js";
import {
  allFieldsAreRequiredError,
  couldNotCreateError,
  createError,
  idIsRequiredError,
  missingEntityRegistersError,
  notFoundOrInvalidDataError,
} from "../utils/customErrors.js";

export const getProperties = async (req, res, next) => {
  try {
    const properties = await PropertyModel.find();

    if (!properties.length) {
      return next(missingEntityRegistersError("properties"));
    }

    res.status(200).json(properties);
  } catch (error) {
    next(error);
  }
};

export const getPropertyById = async (req, res, next) => {
  const id = req.params.id;

  if (!Types.ObjectId.isValid(id)) {
    return next(idIsRequiredError("property"));
  }

  try {
    const property = await PropertyModel.findById(id);

    if (!property) {
      return next(notFoundOrInvalidDataError("property"));
    }

    res.status(200).json(property);
  } catch (error) {
    next(error);
  }
};

export const createProperty = async (req, res, next) => {
  const {
    name,
    type,
    headline,
    country,
    city,
    address,
    distance,
    photos,
    description,
    rating,
    cheapestPrice,
  } = req.body;

  if (
    !name ||
    !type ||
    !headline ||
    !country ||
    !city ||
    !address ||
    !distance ||
    !description ||
    !cheapestPrice
    // !photos || !rating || !rooms || !featured || || ||
  ) {
    return next(allFieldsAreRequiredError());
  } else if (type !== "Hotel" && type !== "Cabin" && type !== "Apartment") {
    return next(
      createError(400, "Property type can be only Hotel or Cabin or Apartment")
    );
  }

  try {
    const property = await PropertyModel.create({
      name,
      type,
      headline,
      country,
      city,
      address,
      distance,
      photos,
      description,
      rating,
      cheapestPrice,
    });

    if (!property) {
      return next(couldNotCreateError("property"));
    }

    res.status(201).json(property);
  } catch (error) {
    next(error);
  }
};

export const updateProperty = async (req, res, next) => {
  const id = req.params.id;

  if (!Types.ObjectId.isValid(id)) {
    return next(idIsRequiredError("property"));
  }

  try {
    const updatedProperty = await PropertyModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedProperty) {
      return next(notFoundOrInvalidDataError("property"));
    }

    res.status(200).json(updatedProperty);
  } catch (error) {
    next(error);
  }
};

export const deleteProperty = async (req, res, next) => {
  const id = req.params.id;

  if (!Types.ObjectId.isValid(id)) {
    return next(idIsRequiredError("property"));
  }

  try {
    const property = await PropertyModel.findByIdAndDelete(id);

    if (!property) {
      return next(notFoundOrInvalidDataError("property"));
    }

    res.status(200).json(property);
  } catch (error) {
    next(error);
  }
};
