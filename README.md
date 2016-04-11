# ng2-build

Build tool for Angular apps

[![Gittip](http://img.shields.io/gittip/mprinc.png)](https://www.gittip.com/mprinc/)

[![NPM](https://nodei.co/npm/qpp.png?downloads=true&stars=true)](https://nodei.co/npm/ng2-build/)

# Installation
	npm install ng2-build --save

# Features

* Works for ng2
* Works for ng1+ng2

# Usage

1. install it
1. move tools, gulpfile.ts, tsconfig.json, tslint.json, typings.json to the project folder (outside of the node_modules)
	1. update config.ts
1. package.example.json as a startup package.json for the project
	1. move it to the project folder
	2. rename it into package.json
	3. update it properly
1. npm start

```sh
mv node_modules/ng2-build/tools node_modules/ng2-build/gulpfile.ts node_modules/ng2-build/tsconfig.json node_modules/ng2-build/tslint.json node_modules/ng2-build/typings.json .
mv node_modules/ng2-build/package.example.json package.json
```

# Release History
* 1.0.0 Initial release
