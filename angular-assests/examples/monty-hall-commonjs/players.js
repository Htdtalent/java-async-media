const standardIn = require("./standard-in.js");

// Human
class HumanPlayer {

    pickDoor() {
        const door = standardIn.readInt("Choose a door [1-3]:", 1, 3);
        // make it zero-based
        return door - 1;
    }

    shouldSwitch() {
        return standardIn.readString("Switch doors [y/n]?:").toLowerCase() === "y";
    }
}

// Computer
class ComputerPlayer {

    constructor(switchDoor) {
        this.switchDoor = switchDoor;
    }

    pickDoor() {
        return Math.floor(Math.random() * 3);
    }

    shouldSwitch() {
        return this.switchDoor;
    }
}

module.exports.HumanPlayer = HumanPlayer;
module.exports.ComputerPlayer = ComputerPlayer;