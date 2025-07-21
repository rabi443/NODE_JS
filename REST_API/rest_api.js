const express = require('express');
const app = express();
const fs = require('fs');
const PORT = 8000;

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Middleware to parse URL-encoded bodies

const Users = require('./MOCK_DATA.json'); // Importing the users data from current folder of MOCK_DATA.json file
// const Users = require('../file_name'); // to go one level back from current directory ../ is used
// const Users = require('../../file_name');// to go two levels back from current directory ../../ is used
// const Users = require('../data/file_name'); // to go one level back and then into data folder ../data

// Home route render a welcome message in plain text
app.get('/', (req, res) => {
  console.log("Home route accessed");
  res.send('Welcome to the Home Page!\n');
});

//render the users data in html format
app.get('/users', (req, res) => {
 let html = `
    <h1>Users List</h1>
    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Contact</th>
      </tr>
  `;

  Users.forEach(user => {
    html += `
      <tr>
        <td>${user.id}</td>
        <td>${user.first_name}</td>
        <td>${user.last_name}</td>
        <td>${user.email}</td>
        <td>${user.gender}</td>
        <td>${user.contact}</td>
      </tr>
    `;
  });

  html += `</table>`;
  res.send(html);
  
});

// Render all the users data in JSON format 
app.get('/api/users', (req, res) => {
    res.setHeader('X-MyName', 'Rabin Chaudhary'); // Set a custom header
    res.json(Users);
});

//Render the specified user data in JSON format
app.get('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = Users.find(user => user.id === userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});

//POST route to add a new user
app.post('/api/users', (req, res) => {   
    const body = req.body;
    if(!body.first_name || !body.last_name || !body.email || !body.gender || !body.contact) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    // console.log(body);
    Users.push({...body , id: Users.length +1}); // Add the new user to the Users array
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(Users), (err , data) => {
        if (err) {
            return res.status(500).send('Error writing/adding new users to file');
        }
        res.status(201).json({ message: 'User added successfully', status: "Success", id: Users.length });
    });
});

//PATCH route to update an existing user
app.patch('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const body = req.body;
    const userIndex = Users.findIndex(user => user.id === userId);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }
    // Update the user data
    Users[userIndex] = { ...Users[userIndex], ...body };
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(Users), (err) => {
        if (err) {
            return res.status(500).send('Error updating user in file');
        }
        res.json({ 
          message: 'User updated successfully',
          status: "Success", 
          updatedUserId: userId, // ← this line added
          updatedUser: Users[userIndex] // ← optional: include full updated user 
        });
    });
});
    
//DELETE route to delete an existing user
app.delete('/api/users/delete/:id',(req, res) => {
  const userId = parseInt(req.params.id, 10);
  const userIndex = Users.findIndex(user => user.id === userId);
  const deletedUser = Users[userIndex]; // Store the user to be deleted
  if (userIndex === -1) {
      return res.status(404).json({ message: 'User not found' });
  }
  Users.splice(userIndex, 1); // Remove the user from the Users array
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(Users), (err) => {
      if (err) {
          return res.status(500).send('Error deleting user from file');
      }
      res.json({ message: 'User deleted successfully', status: "Success", deletedUserId: userId, deletedUser: deletedUser });
  }); 
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});