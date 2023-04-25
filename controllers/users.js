import { v4 as uuidv4 } from 'uuid';

// data array is empty at starts
let users = [];

// POST Route
export const createUser = (req, res) => {
    
    const user = req.body;

    // use spread operator
    // Push data into users array 
    users.push({...user, id: uuidv4() });

    res.send(`User with the name ${user.firstName} is added.`);
}

// GET Route
export const getUsers = (req, res) => {
    res.send(users);
    res.send('Hellow Users');

}

// GET Route for specific user id
export const fetchUser = (req, res) => {
    const { id } = req.params;

    const findUser = users.find((user) => user.id == id);
    res.send(findUser);

}

// PATCH Route
export const deleteUser = (req, res) => {
    const { id } = req.params;

    // keep all the users other than the user with id mentioned in url
    users = users.filter((user) => user.id != id);

    res.send(`User with user Id ${id} is deleted.`);

}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const {firstName, lastName, dateOfBirth } = req.body;

    const user = users.find((user) => user.id == id);

    if(firstName)   user.firstName   = firstName;
    if(lastName)    user.lastName    = lastName;
    if(dateOfBirth) user.dateOfBirth = dateOfBirth;

    res.send(`User with User Id ${id} has been modified.`);

}