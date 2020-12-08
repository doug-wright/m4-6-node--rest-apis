'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { getAllClients, getClientById, addClient, deleteClient } = require('./handlers/clientHandlers');
const { getWordObj, getWord, evalGuess } = require('./handlers/hangmanHandlers');
const { response } = require('express');

express()
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('public'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // Exercise 2 endpoints

  // Get all clients
  .get('/clients', (req, res) => {
    const response = getAllClients();

    if (response.status === 'ok') {
      res.status(200).json({ status: 200, clients: response.data });
    } else {
      res.status(200).json({ status: 200, message: response.data });
    }
  })

  // Get specific client
  .get('/clients/:id', (req, res) => {
    const response = getClientById(req.params.id);

    if (response.status === 'ok') {
      res.status(200).json({ status: 200, clients: response.data });
    } else {
      res.status(200).json({ status: 200, message: response.data });
    }
  })

  // Add a new client
  .post('/clients', (req, res) => {
    // Make sure all parameters are provided
    const requiredParams = ['isactive', 'age', 'name', 'gender', 'company', 'email', 'phone', 'address'];

    if (requiredParams.every(param => Object.keys(req.query).includes(param))) {
      const response = addClient(req.query);

      if (response.status === 'ok') {
        res.status(201).json({ status: 201, message: response.data });
      } else {
        res.status(200).json({ status: 200, message: response.data });
      }
    } else {
      res.status(400).json({ status: 400, message: 'Missing data'});
    }
  })

  // Delete a client
  .delete('/clients/:id', (req, res) => {
    const response = deleteClient(req.params.id);

    if (response.status === 'ok') {
      res.status(200).json({ status: 200, message: response.data });
    } else {
      res.status(200).json({ status: 200, message: response.data });
    }
  })

  // Exercise 3 endpoints

  // Testing
  .get('/hangman/word/:id', (req, res) => {
    const response = getWordObj(req.params.id);
  
    if (response.status === 'ok') {
      res.status(200).json({ status: 200, wordObj: response.data});
    } else {
      res.status(200).json({ status: 200, message: response.data});
    }
  })

  // Get word
  .get('/hangman/word', (req, res) => {
    const response = getWord();
  
    if (response.status === 'ok') {
      res.status(200).json({ status: 200, id: response.word, letterCount: response.letterCount} );
    } else {
      res.status(200).json({ status: 200, message: response.data});
    }
  })

  // Evaluate guess
  .get('/hangman/guess/:id/:letter', (req, res) => {
    const response = evalGuess(req.params.id, req.params.letter);
  
    if (response.status === 'ok') {
      res.status(200).json({ status: 200, guessResult: response.data});
    } else {
      res.status(200).json({ status: 200, message: response.data});
    }
  })

  .listen(8000, () => console.log(`Listening on port 8000`));
