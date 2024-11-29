const todos = [
    "Buy milk.",
    "Walk the dog.",
    "Wash the car.",
    "Workout.",
    "Make dinner reservations.",
    "Cook dinner.",
    "Pack a lunch.",
    "Give the dog a bath",
    "Change the oil.",
    "Get cash from the ATM.",
    "Deposit the checks.",
    "Return the ugly sweater.",
    "Buy bread.",
    "Get a haircut.",
    "Shave.",
    "Buy cheese.",
    "Prep for class.",
    "Study.",
    "Read.",
    "Organize my desk.",
    "Respond to email.",
    "Buy walnuts.",
    "Bake cookies.",
    "Pick up shirts from dry cleaner.",
    "Buy denture cream.",
    "Pay bills.",
    "Wash the dishes.",
    "Go to dentist.",
    "Do laundry.",
    "Study for exam.",
    "Call mom.",
    "Put summer furniture away.",
    "Stock the bird feeder.",
    "Clean the bathroom.",
    "Put out recycling.",
    "Take out the garbage.",
    "Sort recycling",
    "Let bread proof.",
    "Cancel reservations.",
    "Buy opera tickets.",
    "Clean up inbox.",
    "Bake wedding cake for bake sale.",
    "Clean my bedroom.",
    "Defrost the freezer.",
    "Scrub out the sink.",
    "Mop the kitchen floor.",
    "Send in rebate form.",
    "Make soup.",
    "Make the bed.",
    "Drop off mail.",
    "Practice violin.",
    "Get a massage.",
    "Add an entry to gratitude journal.",
    "Try origami.",
    "Paint the hallway.",
    "Call dad.",
    "Send Mo's birthday card.",
    "Remember I am blessed.",
    "Take a walk.",
    "Be persistent.",
    "Send the Thank You card.",
    "Jog to the coffee shop.",
    "Make donuts.",
    "Meet Asha at the lake.",
    "Rotate tires.",
    "Tighten the bike chain.",
    "Meditate.",
    "Practice clarinet.",
    "Parent/teacher conferences...",
    "Schedule a check-up.",
    "Try to make risotto.",
    "Vacuum.",
    "Dust window ledges.",
    "Prep for garage sale.",
    "Mow the lawn.",
    "Shovel snow.",
    "Rake leaves.",
    "Crush aluminum cans.",
    "Saunter.",
    "Smell the roses.",
    "Take a nap.",
    "Stare into the abyss.",
    "Schedule \"me\" time.",
    "Take guinea pigs to vet.",
    "Do taxes.",
    "Thrift.",
    "Buy kombucha.",
    "Knit a scarf.",
    "Soak beans.",
    "Wrap gifts.",
    "Call customer service.",
    "Register to vote.",
    "Bike ride along the river.",
    "Go sledding.",
    "Go to the beach.",
    "Picnic.",
    "Enjoy a bonfire.",
    "Wash windows.",
    "Neighborhood meeting.",
    "Go camping.",
    "Balance the checkbook.",
    "Weed the garden."
];

function ToDo(id, description) {
    this.id = id;
    this.description = description;
    this.isComplete = false;
}

function getRandomDescription() {
    const index = Math.floor(Math.random() * todos.length);
    return todos[index];
}

export function getRandomToDos(count) {
    const result = [];
    for (let i = 0; i < count; i++) {
        result.push(new ToDo(i + 1, getRandomDescription()));
    }
    return result;
}

export function getRandomToDo(currentToDos) {
    let maxId = 0;
    currentToDos.forEach(item => maxId = Math.max(item.id, maxId));
    return new ToDo(maxId + 1, getRandomDescription())
}