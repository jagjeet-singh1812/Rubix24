const router = require('express').Router();
const Mentee = require('../models/Mentee');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    try {
        const { name, email, password, profile_pic, personality_score } = req.body;
        const newMentee = new Mentee({
            name,
            email,
            password,
            profile_pic,
            personality_score
        });
        await newMentee.save();
        res.status(200).json({ message: 'Mentee registered successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);

router.post("/login", async (req, res) => {
    try{
        const {email, password} = req.body;
        const mentee = Mentee.find({email: email});
        if(!mentee){
            return res.status(404).json({message: "Mentee not found"});
        }
        if(mentee.password !== password){
            return res.status(401).json({message: "Incorrect password"});
        }
        const token = jwt.sign({id: mentee._id}, process.env.SECRET_KEY);
        return res.status(200).json({token});
    }catch(error){
        res.status(500).json({ error: String(error) });
    }
});

module.exports = router;