# Overview

This repo is a demonstration of building a browser-targeted library, such as for an enterprise SDK, which supports jest unit testing as well as manual execution and testing within a browser.  

# To Use This Demo

```
git clone https://github.com/ZacharyCalvert/library-jest-webpack-test.git
cd library-jest-webpack-test
npm install
npm run build
npm start
```

# Recommendations

Install jest-cli and run one-off tests from the command line!
To install:
```npm install -g jest-cli```
to run:
```jest <filename.js>```
for this repo, you can run 
```jest service.test.js```
