# Login page with Internationalization

## Overview

This project implements a login page with internationalization support for English and Bulgarian. The page includes a login form, a forgot password functionality, and credential validation against a local JSON file.

## Features

1. Login Page
   - Email and Password input fields
   - Login button
   - "Forgot Password" link
   - Success screen for successful login
   - Error message display for failed login attempts

2. Forgot Password Page
   - Email input field
   - Submit button
   - Success screen indicating a reset link was sent

3. Internationalization
   - Support for English and Bulgarian languages

4. Local Authentication
   - Credential validation against a local JSON file

5. State Management
   - Utilizes appropriate state management for scalability

  ## Technologies Used

| Technology | Purpose | Documentation |
|------------|---------|---------------|
| React.js | Frontend framework | [Docs](https://reactjs.org/docs/getting-started.html) |
| Context API | State management | [Docs](https://reactjs.org/docs/context.html) |
| react-i18next | Internationalization | [Docs](https://react.i18next.com/) |
| Material-UI | UI components and styling | [Docs](https://mui.com/getting-started/usage/) |

## Setup and Installation

1. Clone the repository
2. Install dependencies: `yarn install`
3. Start the development server: `yarn start`

## Usage

1. Navigate to the login page
2. Enter email and password
3. Click "Login" to attempt authentication
4. Use "Forgot Password" link to access the password reset page

## Test Credentials
For testing purposes, you can use the following credentials:

| Field    | Value             |
|----------|-------------------|
| Email    | `test@example.com`|
| Password | password123       |
