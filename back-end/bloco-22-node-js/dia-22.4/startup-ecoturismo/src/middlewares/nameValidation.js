const nameValidation = (req, res, next) => {
    const activities = req.body;
    
    if(!activities.name) { 
        return res.status(400).json({ "message": "O campo nome é obrigatório" });
    };

    if(activities.name.length < 4) {
        return res.status(400).json({ "message": "O campo name deve ter pelo menos 4 caracteres" });
    };
    
    next();
}

module.exports = nameValidation;