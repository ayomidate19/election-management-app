const express = require('express');
const path = require('path');
// 1. Import the Prisma Client package
const { PrismaClient } = require('@prisma/client');

const app = express();
// 2. Initialize the client to talk to your dev.db file
const prisma = new PrismaClient();
const PORT = process.env.PORT || 9000;

// Set up template layouts engine
app.set('view engine', 'ejs');
// ... upper lines stay exactly the same (lines 1 - 11)

// Set up template layouts engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Enable form data processing (ADD THIS LINE HERE)
app.use(express.urlencoded({ extended: true }));

// Deliver static files (CSS files and static local images)
app.use(express.static(path.join(__dirname)));

// ... rest of your code stays exactly the same

app.get('/', async (req, res) => {
    try {
        const parties = await prisma.party.findMany(); // Fetches from your SQLite file
        res.render('Home', { parties }); // Passes records to Home.ejs
    } catch (error) {
        console.error(error);
        res.status(500).send("Database error loading homepage");
    }
});


app.get('/index', (req, res) => {
    res.render('index');
});

// 3. Update the About Route to query parties
app.get('/about', async (req, res) => {
    try {
        const parties = await prisma.party.findMany();
        res.render('about', { parties });
    } catch (error) {
        console.error(error);
        res.status(500).send("Database error loading parties");
    }
});

// 4. Update the Polling Unit Route to query polling units
app.get('/polling-unit', async (req, res) => {
    try {
        const units = await prisma.pollingUnit.findMany();
        res.render('polling-unit', { units });
    } catch (error) {
        console.error(error);
        res.status(500).send("Database error loading polling units");
    }
});

app.get('/sheet', (req, res) => {
    res.render('Sheet');
});

// 5. Update the Store Route to query parties
app.get('/store', async (req, res) => {
    try {
        const parties = await prisma.party.findMany();
        res.render('store', { parties });
    } catch (error) {
        console.error(error);
        res.status(500).send("Database error loading store data");
    }
});

app.listen(PORT, () => {
    console.log(`Server running smoothly on http://localhost:${PORT}`);
});
