import express from "express";

import { createUser, deleteUser, fetchUser, getUsers, updateUser } from "../controllers/users.js";

// initialize router
const router = express.Router();

// In index.js '/users' is used as the starting path. All routes starting with '/users' here.
router.get('/', getUsers);

// Add users to database
router.post('/', createUser);

//  Means any value after /users/ will return the response
router.get('/:id', fetchUser);

router.delete('/:id', deleteUser);

// Update specific user using user Id
router.patch('/:id', updateUser);

// To make use of users.js file in index.js.  Can be imported.s
export default router;