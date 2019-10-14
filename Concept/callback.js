// Callback
// success 'hi' logMessage with the callback in callback
// logMessage(greet(() => greet(() => 'hi')));

function logMessage(message) {
    console.log(message);
}

function greet(callback) {
    return callback();
}

logMessage(greet(() => greet(() => 'hi')));