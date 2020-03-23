const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

let persons = [
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
]

morgan.token('body', (req, res) => {return JSON.stringify(req.body)});

app.use(express.json());
app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));
app.use(express.static('build'));

app.get('/api/persons', (req, res) => {
    res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    const person = persons.find(person => person.id === id);

    if (person) {
        res.json(person);
    } else {
        res.status(404).end();
    }
});

app.get('/info', (req, res) => {
    const date = new Date();
    res.send(`Phonebook has info for ${persons.length} people. ${date}`);
});

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    persons = persons.filter(person => person.id !== id);
    res.status(204).end();
});

app.post('/api/persons', (req, res) => {
    const id = Math.floor(Math.random() * 1000) + 4;

    if (!req.body.name) {
        return res.status(400).json({error: 'Name is missing'});
    };

    if (!req.body.number) {
        return res.status(400).json({error: 'Number is missing'});
    };

    if (persons.find(person => person.name.toLowerCase() === req.body.name.toLowerCase())) {
        return res.status(400).json({error: 'Name must be unique'});
    }

    const newContact = {
        name: req.body.name,
        number: req.body.number,
        id: id
    };

    persons = persons.concat(newContact);
    res.json(newContact);
});

app.listen(port, () => {
    console.log(`App running on a port ${port}`);
});