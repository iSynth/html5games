/*global FSMachine, Rules, LoginPage, RoomsPage*/

/* The object that embodies all the system */

var DominoSystem = function () {
    'use strict';
    this.stateMachine = new FSMachine();
    this.pages = {
        login: new LoginPage(),
        rooms: new RoomsPage()
    };
    Rules.initStateMachine(this.stateMachine);
};
DominoSystem.prototype = {
    enqueueEvent: function (event) {
        'use strict';
        this.stateMachine.enqueueEvent(event);
    }
};