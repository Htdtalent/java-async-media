const CAPSULE_COUNT = 100;
const capsules = [];

function init() {
    const capsuleContainer = document.getElementById("capsules");
    let html = "";
    for (let i = 0; i < CAPSULE_COUNT; i++) {
        html += `<div>
            <span id="capsuleLabel${i + 1}" class="badge badge-pill badge-success">Capsule #${i + 1}</span>
            &nbsp;<span id="guest${i + 1}">Unoccupied</span>
        </div>`
    }
    capsuleContainer.innerHTML = html;
}

const messages = document.getElementById("messages");

function err(msg) {
    messages.className = "alert alert-danger";
    messages.innerText = msg;
}

function success(msg) {
    messages.className = "alert alert-success";
    messages.innerText = msg;
}

function book(evt) {
    evt.preventDefault();

    const guest = document.getElementById("guest").value.trim();
    if (guest.length === 0) {
        err("Guest name is required.");
        return;
    }

    const capsule = parseInt(document.getElementById("bookingCapsule").value, 10);
    if (isNaN(capsule)) {
        err("Capsule # is required.");
        return;
    }

    if (capsule <= 0 || capsule > CAPSULE_COUNT) {
        err("Capsule # is out of range.");
        return;
    }

    if (capsules[capsule - 1]) {
        err(`Capsule #${capsule} is occupied.`);
        return;
    }

    capsules[capsule - 1] = guest;
    document.getElementById(`capsuleLabel${capsule}`).className = "badge badge-pill badge-danger";
    document.getElementById(`guest${capsule}`).innerText = guest;
    success(`Guest: ${guest} booked in capsule #${capsule}.`);
    document.getElementById("guest").value = "";

}

function checkOut(evt) {
    evt.preventDefault();

    const capsule = parseInt(document.getElementById("checkOutCapsule").value, 10);
    if (isNaN(capsule)) {
        err("Capsule # is required.");
        return;
    }

    if (capsule <= 0 || capsule > CAPSULE_COUNT) {
        err("Capsule # is out of range.");
        return;
    }

    const guest = capsules[capsule - 1];
    if (!guest) {
        err(`Capsule #${capsule} is unoccupied.`);
        return;
    }

    capsules[capsule - 1] = null;
    document.getElementById(`capsuleLabel${capsule}`).className = "badge badge-pill badge-success";
    document.getElementById(`guest${capsule}`).innerText = "Unoccupied";
    success(`Guest: ${guest} checked out of capsule #${capsule}.`);
}

init();