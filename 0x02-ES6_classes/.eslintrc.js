
Curriculum
Short Specializations
Average: 12.8%
0x02. ES6 classes
OOP
JavaScript
ES6
 Weight: 1
 Project over - took place from Oct 3, 2024 6:00 AM to Oct 4, 2024 6:00 AM
 An auto review will be launched at the deadline
In a nutshell…
Auto QA review: 0.0/33 mandatory & 0.0/3 optional
Altogether:  0.0%
Mandatory: 0.0%
Optional: 0.0%
Calculation:  0.0% + (0.0% * 0.0%)  == 0.0%


Resources
Read or watch:

Classes
Metaprogramming
Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

How to define a Class
How to add methods to a class
Why and how to add a static method to a class
How to extend a class from another
Metaprogramming and symbols
Requirements
All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
Allowed editors: vi, vim, emacs, Visual Studio Code
All your files should end with a new line
A README.md file, at the root of the folder of the project, is mandatory
Your code should use the js extension
Your code will be tested using Jest and the command npm run test
Your code will be verified against lint using ESLint
Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test
Setup
Install NodeJS 12.11.x
(in your home directory):

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
Install Jest, Babel, and ESLint
in your project directory, install Jest, Babel and ESList by using the supplied package.json and run npm install.

Configuration files
Add the files below to your project directory

package.json
Click to show/hide file contents
babel.config.js
Click to show/hide file contents
.eslintrc.js
Click to show/hide file contents

module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
