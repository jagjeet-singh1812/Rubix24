const mongoose = require("mongoose");
const Mentor = require("./models/Mentor");
const Mentee = require("./models/Mentee");
const mentorsData = require("./mentors.json");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

(async ()=>{
    try{
        await Mentor.deleteMany({});
        await Mentee.deleteMany({});

        const menteeData = {
            name: 'Jane Doe',
            email: 'john@example.com',
            password: 'password123',
            profile_pic: 'path/to/profile/pic.jpg',
            personality_score: 30,
        };
        const mentee = new Mentee(menteeData);
        await mentee.save();

        const mentors = await Mentor.create(mentorsData);

        console.log("Data seeded successfully");
        mongoose.connection.close();
        process.exit(0);
    }catch(err){
        console.log(err);
    }
})()