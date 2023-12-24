module.exports = {
  root: true,
  env: { 
    browser: true, 
    es2020: true 
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended' // Added this line for React rules
  ],
  ignorePatterns: ['dist', '.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react' // Added this line to use the react plugin
  ],
  rules: {
    // Add any specific rules, like:
    'react/react-in-jsx-scope': 'off', // For React 17+ JSX transform
    // Other custom rules can go here
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React
    }
  }
}
