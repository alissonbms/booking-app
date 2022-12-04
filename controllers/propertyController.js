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
  const { min, max, ...others } = req.query;

  try {
    const properties = await PropertyModel.find({
      ...others,
      cheapestPrice: { $gte: min || 1, $lte: max || 999 },
    }).limit(req.query.limit);

    // if (!properties.length) {
    //   return next(missingEntityRegistersError("properties"));
    // }

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
    featured,
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
      featured,
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

export const countByCountry = async (req, res, next) => {
  const countries = req.query.countries.split(",");

  try {
    const list = await Promise.all(
      countries.map((country) => {
        return PropertyModel.countDocuments({ country: country });
      })
    );

    return res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const cabinsCount = await PropertyModel.countDocuments({ type: "Cabin" });
    const apartmentsCount = await PropertyModel.countDocuments({
      type: "Apartment",
    });
    const hotelsCount = await PropertyModel.countDocuments({ type: "Hotel" });

    return res.status(200).json([
      { type: "Cabin", count: cabinsCount },
      {
        type: "Apartment",
        count: apartmentsCount,
      },
      {
        type: "Hotel",
        count: hotelsCount,
      },
    ]);
  } catch (error) {
    next(error);
  }
};
