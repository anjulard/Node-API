import express from "express";

// initialize router
const router = express.Router();

// in index.js '/users' is used as the starting path. All routes starting with '/users' here.
router.get('/', (req, res) => {
    res.send('Hellow Users');

});

// To make use of users.js file in index.js.  Can be imported.s
export default router;