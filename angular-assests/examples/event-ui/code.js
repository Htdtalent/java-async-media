// # - By Id, will return one element by the id
// . - By Class, will return all elements with that class
// [] - By Attribute, will return all elements with that attribute
// div - By Tag, will return all elements with that tag


const redishBtn = document.querySelector('#redish');
const blueishBtn = document.querySelector('#blueish');
const yellowishBtn = document.querySelector('#yellowish');

function handleClick(evt) {
    //1. Remove any color-ish classes from the body
    document.body.classList.remove('red-ish', 'blue-ish', 'yellow-ish');
    //2. Add the class fromt he button that was clicked
    const btn = evt.target;
    document.body.classList.add(btn.className);
}

redishBtn.addEventListener('click', handleClick);
blueishBtn.addEventListener('click', handleClick);
yellowishBtn.addEventListener('click', handleClick);




// 1. Grab a reference to the element with its id.
// 2. Assign an event listener to the change event.
// 3. When the event fires, grab the value of the input.
// 4. Set the background font size of the body to that value.
const fontSizeInput = document.querySelector('#fontSize');

function handleFontSizeChange(evt) {
    const select = evt.target;
    const fontSize = select.value;
    document.body.style.fontSize = `${fontSize}`;
}

fontSizeInput.addEventListener('change', handleFontSizeChange);


// 1. Grab list items to update.
const lis = document.querySelectorAll('ul>li');
// 2. Grab the animal input.
const animal = document.querySelector('#animal');
// 3. Register a keyup listener.
animal.addEventListener('keyup', function (evt) {
    // 4. Grab the current value of the input.
    //const currentInput = evt.target.value.trim();
    let currentInput = animal.value.trim();
    if (currentInput.length === 0) {
        currentInput = '...'
    }
    // 5. Update the list items with the trimmed value.
    lis.forEach(li => li.innerText = currentInput);
});

// Create a function that will handle the submit event.
// 1. Grab a reference to the form.
const form = document.querySelector('#loginForm');
// 2. Register an event listener for the submit event.
form.addEventListener('submit', function (evt) {
    // 3. Prevent the default behavior.
    evt.preventDefault();
    evt.stopPropagation();
    // 4. Grab the username and password values.
    const usernameInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');

    const username = usernameInput.value;
    const password = passwordInput.value;
    // 5. Log out those values.
    console.log(username, password);
    // 6. Clear the form.
    usernameInput.value = '';
    passwordInput.value = '';
});

// 1. Grab x and y spans for use later.
const spnX = document.querySelector('#spnX');
const spnY = document.querySelector('#spnY');

// 1a. Create function to handle the mouse move event.
function handleMouseMove(evt) {
    // 2. Grab the x and y values from the event.
    const x = evt.pageX;
    const y = evt.pageY;
    // 3. Mouse events include coordinate information.
    // Display it in the spans.
    spnX.innerText = x;
    spnY.innerText = y;
}

// 4. Grab the checkbox.
const chkTracking = document.querySelector('input[type="checkbox"]');

// 5. Register a change listener.
chkTracking.addEventListener('change', function (evt) {
    const noTrackMessage = "Not tracking...";

    if (chkTracking.checked) {
        // 6. When the checkbox is changed to checked, add mouse tracking.
        document.addEventListener('mousemove', handleMouseMove);
    } else {
        // 7. When the checkbox is changed to unchecked, remove mouse tracking.
        document.removeEventListener('mousemove', handleMouseMove);
        spnX.innerText = noTrackMessage;
        spnY.innerText = noTrackMessage;
    }
 });