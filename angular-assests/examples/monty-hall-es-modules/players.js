import { readString, readInt } from './standard-in.js';

// Human
export class HumanPlayer {

    pickDoor() {
        const door = readInt("Choose a door [1-3]:", 1, 3);
        // make it zero-based
        return door - 1;
    }

    shouldSwitch() {
        return readString("Switch doors [y/n]?:").toLowerCase() === "y";
    }
}

// Computer
export class ComputerPlayer {

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