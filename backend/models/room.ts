import mongoose, { Schema, Document } from "mongoose";
import geoCoder from "../utils/geoCoder";
import { IUser } from "./user";

export interface IImage extends Document {
  public_id: string;
  url: string;
}

export interface IReview extends Document {
  user: IUser;
  rating: number;
  comment: string;
}

export interface ILocation {
  type: String;
  coordinates: number[];
  formattedAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface IRoom extends Document {
  name: string;
  description: string;
  pricePerNight: number;
  // address: string;
  // googleMapsUrl: string;
  // location: ILocation;
  // guestCapacity: number;
  // numOfBeds: number;
  isInternet: boolean;
  isBreakfast: boolean;
  isAirConditioned: boolean;
  isPetsAllowed: boolean;
  isRoomCleaning: boolean;
  // ratings: number;
  // numOfReviews: number;
  images: IImage[];
  category: string;
  // reviews: IReview[];
  user: IUser;
  createdAt: Date;
}

const roomSchema: Schema<IRoom> = new Schema({
  name: {
    type: String,
    required: [true, "Please enter room name"],
    trim: true,
    maxLength: [200, "Room name can not exceed 200 characters"],
  },
  description: {
    type: String,
    required: [true, "Please enter room description"],
  },
  pricePerNight: {
    type: Number,
    required: [true, "Please enter room price per night"],
    default: 0.0,
  },
  // address: {
  //   type: String,
  //   required: [true, "Please enter room address"],
  // },
  // googleMapsUrl: {
  //   type: String,
  //   // required: [true, "Please enter Google Maps Url"],
  // },
  // location: {
  //   type: {
  //     type: String,
  //     enum: ["Point"],
  //   },
  //   coordinates: {
  //     type: [Number],
  //     index: "2dsphere",
  //   },
  //   formattedAddress: String,
  //   city: String,
  //   state: String,
  //   zipCode: String,
  //   country: String,
  // },
  // guestCapacity: {
  //   type: Number,
  //   required: [true, "Please enter room guest capacity"],
  // },
  // numOfBeds: {
  //   type: Number,
  //   required: [true, "Please enter number of beds in room"],
  // },
  isInternet: {
    type: Boolean,
    default: false,
  },
  isBreakfast: {
    type: Boolean,
    default: false,
  },
  isAirConditioned: {
    type: Boolean,
    default: false,
  },
  isPetsAllowed: {
    type: Boolean,
    default: false,
  },
  isRoomCleaning: {
    type: Boolean,
    default: false,
  },
  // ratings: {
  //   type: Number,
  //   default: 0,
  // },
  // numOfReviews: {
  //   type: Number,
  //   default: 0,
  // },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please select category"],
    enum: {
      values: ["Breakfast", "Lunch/Dinner", "Dessert"],
      message: "Please select correct category for room",
    },
  },

  // reviews: [
  //   {
  //     user: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "User",
  //       required: true,
  //     },
  //     rating: {
  //       type: Number,
  //       required: true,
  //     },
  //     comment: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//  Setting up location:
// roomSchema.pre("save", async function (next) {
//   if (!this.isModified("location")) {
//     next();
//   }

//   const loc = await geoCoder.geocode(this.address);

//   console.log("location", loc);

//   this.location = {
//     type: "Point",
//     coordinates: [loc[0].longitude, loc[0].latitude],
//     formattedAddress: loc[0].formattedAddress,
//     city: loc[0].city,
//     state: loc[0].stateCode,
//     zipCode: loc[0].zipcode,
//     country: loc[0].countryCode,
//   };

//   next();
// });

export default mongoose.models.Room ||
  mongoose.model<IRoom>("Room", roomSchema);
