Contacts-Backend
The Contacts-Backend is a Node.js Express.js application that serves as the server-side component for managing contacts. 
It provides API endpoints for authentication, contact management, and token generation. 
The backend utilizes MongoDB for data storage and JWT (JSON Web Tokens) for secure user authentication.

Deployed Application
The Contact App Backend is deployed and can be accessed at: https://contact-backend-ela3.onrender.com/

Frontend :
The frontend deployment for the Contact App can be found at: https://contacts-vault.vercel.app/

Features
User Authentication: Supports user signup, login, and token generation using JWT (JSON Web Tokens).
Contact Management: Provides API endpoints for managing contacts, including adding new contacts, retrieving all contacts, updating contact information, and deleting contacts.
Token Refresh: Offers a token refresh endpoint for generating a new access token using a refresh token.
Secure Storage: Utilizes MongoDB for storing contact and user information securely.
RESTful API: Adheres to RESTful principles for clear and consistent API design.

Technologies Used
Node.js: JavaScript runtime environment for executing server-side code.
Express.js: Web application framework for building server-side APIs.
MongoDB: NoSQL database for storing contact and user information.
Mongoose: Object Data Modeling (ODM) library for MongoDB.
JWT: JSON Web Tokens for user authentication and authorization.
API Routes/contacts (GET): Retrieves all contacts.
/contacts (POST): Adds a new contact.
/contacts/:id (DELETE): Deletes a contact with the specified ID.
/contacts/:id (PUT): Updates a contact with the specified ID.
/logout (POST): Logs out the user.
/refresh (GET): Generates a new access token using a refresh token from the cookies.

Getting Started
Prerequisites
Node.js and npm (Node Package Manager) should be installed on your machine.

Installation
Clone the repository:


git clone <repository-url>


Install the dependencies:


cd contact-backend
npm install


Configure environment variables:

Create a .env file in the root directory of the project.
Set the following environment variables:MONGODB_URI: MongoDB connection URI.
JWT_SECRET: Secret key for JWT token generation.

Start the server:
npm start


The server will be running on http://localhost:3001.

Usage
 Please refer to the frontend documentation for instructions on how to interact with the Contact App using the provided frontend deployment.

Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to create a pull request.


Contact If you have any questions or need further assistance, please feel free to contact me at hjha9999@gmail.com.
