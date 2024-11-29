// Generates a random integer.
// maxExclusive: the maximum value, not included
// Example: randomInt(5) will generate 1 of 5 values
// between 0 and 4.
function randomInt(maxExclusive) {
    return Math.floor(Math.random() * maxExclusive);
}

function getRevealedDoor(prizeDoor, playerDoor) {
    let result;
    if (prizeDoor === playerDoor) {
        // we can chose either of the two remaining doors
        result = (prizeDoor + 1 + randomInt(2)) % 3;
    } else {
        // we have only one option
        result = 3 - prizeDoor - playerDoor;
    }
    return result;
}

function playGame() {

    // prizeDoor is zero-based, 1-3 becomes 0-2
    let prizeDoor = randomInt(3);

    console.log("Let's Solve the Monty Hall Problem!");
    console.log("There are three doors labeled 1-3.");

    // 2. actions are now part of player
    // the player is responsible for making the door zero-based
    let playerDoor = this.player.pickDoor();

    console.log(`You chose door #${playerDoor + 1}.`);

    let revealedDoor = getRevealedDoor(prizeDoor, playerDoor);

    console.log(`There's a goat behind door #${revealedDoor + 1}.`)

    // 2. actions are now part of player
    let change = this.player.shouldSwitch();
    if (change) {
        playerDoor = 3 - playerDoor - revealedDoor;
        console.log(`You switched to door #${playerDoor + 1}`);
    }

    if (playerDoor === prizeDoor) {
        console.log("You win!");
    } else {
        console.log("You lose.");
    }

    // 3. return win or loss
    return playerDoor === prizeDoor;
}

// 1. Game is now a constructor
// that takes a player as a parameter
export default function Game(player) {
    this.player = player;
}

Game.prototype.play = playGame;