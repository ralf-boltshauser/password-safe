# Password Safe

We create this project as a school project. It will be a simple password manager with focus on saving passwords secure with encryption.

## Concept

We have a login page, where the user, which is already registered, can login with his email and password.

This password is hashed and stored.

If the user is login, he is redirected to the dashboard, where he can add - view - delete, credentials regarding to an account or website.
A record contains:

- Purpose
- Password

## Thoughts

Caesar encryption and move amount is sum of ascii value of every character in password.

### Authentication

User has to login with username and password.

The password will then be hashed with bcrypt.
We use ten rounds of hashing and provide the password to be hashed.

We use JWTGuards for every rest endpoint that shouldn't be available publicly.

### Storing passwords

For storing passwords, we encrypt them first with the CryptoJS library and use the userId and the username as key.
