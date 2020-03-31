const router = require('express').Router();
const User   = require('../../models/user.model');


// Get All
router.get('/', (req, res) => {
    User.find()
        .then( response => res.json(response))
        .catch(err => json.status(400).json({msg: `${err}`}))
});


// Insert into db
router.post('/', (req, res) => {
    const username = req.body.username;
    
    // new User
    const newUser = new User({username});

    // save
    newUser.save()
        .then(() => res.json({ msg: 'User Added'}))
        .catch(err => res.status(400).json('Err: '+err))

});


module.exports = router;