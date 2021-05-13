const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),

    },
    exercises: [
        {
      name: {
      type: String,
      trim: true,
      required: "Enter a name for exercise"
  },
    type: {
    type: String,
    trim: true,
    required: "Enter an exercise type",
  },
    weight: {
    type: Number,
  },
    duration: {
    type: Number,
    required: "Enter number of minutes of exercise for this type"
    },
    reps: {
    type: Number,
    },
    sets: {
    type: Number,
    },
    distance: {
        type: Number,
        },
    },
    ],
});
    
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;