const Teatcher = require("./model"); 

const create = (req, res) => {
    Teatcher.create({
        name: req.body.name,
        age: req.body.age
    }).then(newTeatcher => {
        res.status(200).json(newTeatcher); 
    }).catch(error => {
        res.status(400).send(error); 
    })
} 

const list = (res) => {
    Teatcher.findAll().then(teatchers => {
        res.status(200).json(teatchers); 
    }).catch(error => {
        res.status(400).send(error); 
    })
}

const getStudentsByName = (req, res) => {
    Teatcher.findAll({
        where: {
            name: req.params.name
        }
    }).then(teatchers => {
        res.status(200).json(teatchers); 
    }).catch(error => {
        res.status(400).send(error); 
    })
}

exports.create = create; 
exports.list = list;
exports.getStudentsByName = getStudentsByName; 