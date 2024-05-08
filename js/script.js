document.getElementById('yesBtn').addEventListener('click', function() {
    showMessage('Yes');
});

document.getElementById('noBtn').addEventListener('click', function() {
    showMessage('No');
});

function showMessage(choice) {
    if (choice === 'Yes') {
        alert("Correct answer!");
    } else if (choice === 'No') {
        alert("You are wrong");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var images = document.getElementsByTagName('img');
    var count = 0;

    var i = 0;
    while (i < images.length) {
        count++;
        i++;
    }

    console.log("Total number of images: " + count);
});
