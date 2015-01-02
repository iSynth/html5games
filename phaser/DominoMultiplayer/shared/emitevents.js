/*global module, exports*/

var EmitEvents = Object.freeze({
    CONNECTION: "connection",
    DISCONNECTION: "disconnection",
    SERVER_SEND_ID: "EmitEvents.SERVER_SEND_ID",
    CLIENT_SEND_LOGIN: "EmitEvents.CLIENT_SEND_LOGIN"
});

try {
    module.exports = EmitEvents;
} catch (ignore) {}