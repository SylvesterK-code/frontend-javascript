# 🚀 TypeScript Project Setup Guide

This guide walks you through setting up a complete TypeScript development environment with support for linting, testing, and bundling using Webpack.

---

## 📦 1. Initialize the Project

```bash
mkdir typescript-project && cd typescript-project
npm init -y
```

---

## 🔧 2. Install Dependencies

### TypeScript Compiler and Types
```bash
npm install --save-dev typescript @types/node
```

### ESLint for Linting
```bash
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### Jest for Testing
```bash
npm install --save-dev jest ts-jest @types/jest
npx ts-jest config:init
```

### Webpack for Bundling
```bash
npm install --save-dev webpack webpack-cli webpack-dev-server ts-loader html-webpack-plugin
```

---

## ⚙️ 3. Configuration Files

### `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
  "include": ["src"],
  "exclude": ["node_modules", "**/*.test.ts"]
}
```

### `.eslintrc.js`
```js
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {}
};
```

### `webpack.config.js`
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: './dist',
    open: true,
  },
};
```

---

## 📂 4. Project Structure

```
typescript-project/
├── src/
│   ├── index.ts
│   ├── index.html
│   └── example.ts
├── tests/
│   └── example.test.ts
├── package.json
├── tsconfig.json
├── .eslintrc.js
├── jest.config.js
├── webpack.config.js
└── README.md
```

---

## 🧪 5. Add NPM Scripts

Add the following to your `package.json`:

```json
"scripts": {
  "build": "tsc",
  "start": "webpack serve --mode development",
  "lint": "eslint . --ext .ts",
  "test": "jest"
}
```

---

## ✅ 6. Run the Project

### Build TypeScript:
```bash
npm run build
```

### Start Development Server:
```bash
npm run start
```

### Lint the Code:
```bash
npm run lint
```

### Run Tests:
```bash
npm run test
```

---

You're now ready to start coding your TypeScript project with support for linting, testing, and module bundling!
