# Firebase Functions TypeScript Starter

A modern, production-ready starter template for building Firebase Cloud Functions with TypeScript.

## Features

- 🔥 Firebase Cloud Functions v2 API
- 📝 TypeScript support with strict type checking
- 🧩 Modular function organization
- 🔍 ESLint with Google configuration
- 💅 Prettier code formatting
- 📊 Custom logging utility (development vs production)
- 🛠️ Firestore database utility
- 🧪 Ready for testing with firebase-functions-test
- 🚀 Simple deployment workflow

## Prerequisites

- [Node.js](https://volta.sh/) (v22 or later)
- [Firebase CLI](https://firebase.google.com/docs/cli) installed globally
  ```bash
  npm install -g firebase-tools
  ```
- Firebase project created in the [Firebase Console](https://console.firebase.google.com/)

## Getting Started

1. **Clone this repository**

   ```bash
   git clone https://github.com/yourusername/firebase-functions-typescript-starter.git
   cd firebase-functions-typescript-starter
   ```

2. **Install dependencies**

   ```bash
   cd functions
   npm install
   ```

3. **Configure Firebase project**

   Log in to Firebase and select your project:

   ```bash
   firebase login
   firebase use --add
   ```

4. **Start local development server**

   ```bash
   npm run dev
   ```

   This will start the Firebase emulators and watch for code changes.

## Project Structure

```
functions/
├── src/                  # Source code
│   ├── api/              # API endpoints
│   │   └── hello.ts      # Example HTTP function
│   ├── utils/            # Utility functions
│   │   ├── db.ts         # Firestore database utility
│   │   └── logger.ts     # Custom logging utility
│   └── index.ts          # Main entry point
├── lib/                  # Compiled JavaScript output
├── node_modules/         # Dependencies
├── .eslintrc.js          # ESLint configuration
├── firebase.json         # Firebase configuration
├── firestore.rules       # Firestore security rules
├── package.json          # Project dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## Available Scripts

- `npm run lint` - Run ESLint to check code quality
- `npm run build` - Compile TypeScript to JavaScript
- `npm run build:watch` - Watch for changes and compile
- `npm run dev` - Start local development with emulators
- `npm run shell` - Start Firebase Functions shell
- `npm run deploy` - Deploy functions to Firebase
- `npm run logs` - View Firebase Functions logs

## Creating New Functions

1. Create a new file in the `src/api/` directory
2. Define and export your function
3. Import and export it in `src/index.ts`

Example:

```typescript
// src/api/myNewFunction.ts
import { onRequest } from "firebase-functions/v2/https";
import { logger } from "../utils/logger";

export const myNewFunction = onRequest((request, response) => {
  logger.info("My new function called", { path: request.path });
  response.send("Hello from my new function!");
});
```

Then in `src/index.ts`:

```typescript
import { helloWorld } from "./api/hello";
import { myNewFunction } from "./api/myNewFunction";
import admin from "firebase-admin";

admin.initializeApp();

export { helloWorld, myNewFunction };
```

## Deployment

Deploy your functions to Firebase:

```bash
npm run deploy
```

## Environment Variables

To use environment variables:

1. Create a `.env` file in the `functions` directory.
2. Set your environment variables in the Firebase console or using the Firebase CLI

## License

This project is licensed under the Apache 2.0 License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgements

- [Firebase](https://firebase.google.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/) 