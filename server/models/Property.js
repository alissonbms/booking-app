import { model, Schema } from "mongoose";

const PropertyModel = model(
  "Property",
  new Schema({
    name: { type: String, required: true }, // Tower Apartment
    type: {
      type: String,
      enum: ["Hotel", "Cabin", "Apartment"],
      required: true,
      default: "Hotel",
    }, // hotel, cabin or apartment
    headline: { type: String, required: true }, // Great apartment with air conditioning
    country: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    distance: { type: String, required: true }, // 300m from center
    photos: { type: [String] }, // 5 required: true
    rating: { type: Number, min: 0, max: 10 },
    rooms: { type: [Schema.Types.ObjectId], ref: "Room", default: [] },
    cheapestPrice: { type: Number, required: true },
    supportedGuests: { type: Number, required: true },
    featured: { type: Boolean, default: false },
  })
);

export default PropertyModel;
