const router = require('express').Router();
const Exercise = require('../../models/exercise.model');


// Get Single

router.get('/:id', (req, res) => {
    Exercise.findById(req.params.id)
        .then( exercise => res.json(exercise))
        .catch(err => res.status(400).json({err: err}));
})

// Get All 
router.get('/', (req, res) => {
    
    Exercise.find()
        .then( response => res.json(response))
        .catch(err => res.status(400).json('err ' + err))

});

// Insert user in to db
router.post('/', (req, res) => {
    
    // crate exercise
    const exercise = {
        username: req.body.username,
        description: req.body.description,
        duration: Number(req.body.duration),
        date: req.body.date
    }

    // New Exercise
    const newExercise = new Exercise({...exercise});

    newExercise.save()
        .then( () => res.json({msg: 'exercise added'}))
        .catch( err => res.json('error '+err))
});


// Delete
router.delete('/:id', (req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json({msg: 'successfully delete'}))
        .catch(err => res.status(400).json({msg: err, error: true}))
});

// Update
router.put('/:id', (req, res) => {
    Exercise.findById(req.params.id)
        .then( exercise => {

            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = req.body.duration;
            exercise.date = req.body.date;

            exercise.save()
                .then(() => res.json({msg: 'updated successfully', errror: false}))
                .catch(err => res.status(400).json({msg: err, error: true}))
        })
        .catch(err => json.status(400).json({msg: err, error: true}))
});


module.exports = router;