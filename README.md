# Poll Express App

A simple poll application built with Express.js, EJS, and MongoDB. Users can create polls, vote on options, and view poll results.

## Features

- Create new polls with multiple options
- View all polls
- Vote on poll options
- View poll results

## Project Structure

```
poll-express/
├── package.json
├── Poll.mjs
├── pollController.mjs
├── server.mjs
├── views/
│   ├── create.ejs
│   ├── home.ejs
│   ├── polls.ejs
│   └── viewPoll.ejs
```

## Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd poll-express
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```
2. Open your browser and go to `http://localhost:8000` (or the port specified in your server).

## Endpoints

- `/` : Home page
- `/create` : Create a new poll
- `/polls` : View all polls
- `/polls/:id` : View and vote on a specific poll

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- MongoDB (via Mongoose)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
