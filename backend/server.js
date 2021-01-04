//import express from 'express';
const express = require('express');
//import dotenv from 'dotenv';
const dotenv = require('dotenv');
//import products from './data/products.js';
const products = require('./data/products.js');
//import admin from 'firebase-admin';
const admin = require('firebase-admin');

//import serviceAccount from './deneme-898e6-firebase-adminsdk-cnwkv-eb541f03cf.json';
const serviceAccount = require('./book-store-scrapper-54473-firebase-adminsdk-s3fpo-e73033ea8b.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.get('/book/:search_param', (req, res) => {
    (async () => {
        let query = req.params.search_param;
        var books = [];
        const snapshot = await db
            .collection('kitapyurdu')
            .where('search_param', '==', query)
            .get();
        await snapshot.forEach((doc) => {
            books.push(doc.data());
        });
        const snapshot2 = await db
            .collection('dr')
            .where('search_param', '==', query)
            .get();
        await snapshot2.forEach((doc) => {
            books.push(doc.data());
        });
        const snapshot3 = await db
            .collection('idefix')
            .where('search_param', '==', query)
            .get();
        await snapshot3.forEach((doc) => {
            books.push(doc.data());
        });
        await console.log(books);
        await res.json(books);
    })();
});

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`Server running on ${process.env.NODE_ENV} port ${PORT}`)
);
