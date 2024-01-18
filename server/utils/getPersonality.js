const getPersonality = (score) => {
    try {
        if(score>=15 && score<=24)
            return "Strategic and Supportive";
        else if(score>=25 && score<=34)
            return "Collaborative and Adaptive";
        else if(score>=35 && score<=44)
            return "Independent and Practical";
        else if(score>=45 && score<=54)
            return "Business and Entrepreneurial";
        else if(score>=55 && score<=64)
            return "Science and Research-focused";
        else 
            return "None";
    } catch (error) {
        console.log(error);
        return "error";
    }
}

module.exports = getPersonality;