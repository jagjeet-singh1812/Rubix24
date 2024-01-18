const router = require('express').Router();
const Mentee = require('../models/Mentee');
const Mentor = require('../models/Mentor');
const jwt = require('jsonwebtoken');
const getPersonality = require('../utils/getPersonality');

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
        const token = jwt.sign({id: mentee._id, type: "mentee"}, process.env.SECRET_KEY);
        return res.status(200).json({token});
    }catch(error){
        res.status(500).json({ error: String(error) });
    }
});

router.get('/algo_mentor', async (req, res) => {
    try {
        const jwt = req.body.jwt;
        const decoded = jwt.verify(jwt, process.env.SECRET_KEY);
        const mentee = await Mentee.findById(decoded.id);
        const personality_score = mentee.personality_score;

        const mentors = await Mentor.find({}).sort({ personality_score: -1 });
        const result = [];

        for (let i = 0; i < mentors.length; i++) {
            if(getPersonality(mentors[i].personality_score) === getPersonality(personality_score)){
                result.push(mentors[i]);
            }
        }
        res.status(200).json({ mentors: result });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;