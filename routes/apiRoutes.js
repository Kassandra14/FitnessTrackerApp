//routes/api.js
const router = require("express").Router();
const Workout = require("../models/workout.js");


const collections = ["workout"];

router.get("/api/workouts", (req, res) => {
    Workout.find({})
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" },
            }
        }
    ])
        .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//create workout
router.post("/api/workouts", ({ body }, res) => {

    Workout.create(body)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        })
})

//update workout
router.put("/api/workouts/:id", ({ params, body }, res) => {
    console.log(params);
    Workout.findByIdAndUpdate(params.id, {
        $push: {
            exercises: body,
        },
    })
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
})
//get last workout
router.get("/api/workouts/range", ({ body }, res) => {
    Workout.find({}).limit(7);
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" },
            }
        }
    ])
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        })
})
module.exports = router;