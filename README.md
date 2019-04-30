# NODE EXPRESS TEMPLATE

Basic Express Web Server template with Psql connector hooked in.

## USAGE

1. `npm install`
2. `npm start`
3. Modify `.env` file as necessary for your usage

## RUNNING ON NON-WINDOWS MACHINE

You will be required to modify your npm `start` script in package.json to make sure nodemon runs properly, change as below:

```
// change from
"start": "set DEBUG=* & nodemon app.js",

// to
"start": "DEBUG=* nodemon app.js",
```

## DEBUG MESSAGES

This project uses [debug](https://www.npmjs.com/package/debug) for debug messages,
You can run debug messages specific to a module by changing the flag in the `start` script in package.json, example as below:

```
// show debug messages inside indexRouter only
"start": "set DEBUG=indexRouter & nodemon app.js",

// show all debug messages
"start": "set DEBUG=* & nodemon app.js",
```
