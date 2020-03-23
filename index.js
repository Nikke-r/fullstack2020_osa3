const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const Person = require('./models/person');
const app = express();
const port = process.env.PORT;

morgan.token('body', (req, res) => {return JSON.stringify(req.body)});

app.use(express.json());
app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));
app.use(express.static('build'));

app.get('/api/persons', (req, res) => {
    Person.find({}).then(persons => {
        console.log(persons);
        res.json(persons.map(person => person.toJSON()));
    });
});

app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id)
        .then(contact => {
            if (contact) {
                res.json(contact.toJSON());
            } else {
                res.status(404).end();
            }
        })
        .catch(error => {
            next(error);
        });
});

app.get('/info', (req, res) => {
    Person.find({}).then(response => {
        const date = new Date();
        res.send(`Phonebook has ${response.length} contacts. ${date}`);
    })
});

app.delete('/api/persons/:id', (req, res, next) => {
    Person.findByIdAndRemove(req.params.id)
    .then(result => {
        res.status(204).end();
    })
    .catch(error => {
        next(error);
    })
});

app.post('/api/persons', (req, res, next) => {
    const contact = new Person({
        name: req.body.name,
        number: req.body.number,
    });

    contact.save()
        .then(savedContact => {
        res.json(savedContact.toJSON());
        })
        .catch(error => {
            next(error);
        });
});

app.put('/api/persons/:id', (req, res, next) => {
    const info = {
        name: req.body.name,
        number: req.body.number
    };

    Person.findByIdAndUpdate(req.params.id, info, {new: true})
        .then(updated => {
            res.json(updated.toJSON());
        })
        .catch(error => {
            next(error);
        });
});

const errorHandler = (error, req, res, next) => {

    if (error.name === 'CastError' && error.kind === 'ObjectId') {
        return res.status(400).send({error: 'Malformatted ID'});
    } else if (error.name === 'ValidationError') {
        console.log(error);
        return res.status(400).json({ error: error.message });
    }

    next(error);
};

app.use(errorHandler);

app.listen(port, () => {
    console.log(`App running on a port ${port}`);
});