// Call the function when the HTML page finishes loading
window.onload = function () {

    // Call the function to be loaded after the HTML page has been set
    // landingPage();

    //adding the event listerner for Mozilla
    if(window.addEventListener)
        document.addEventListener('DOMMouseScroll', moveObject, false);

    //for IE/OPERA etc
    document.onmousewheel = moveObject;
};

// Show landing Page introduction to the user
function landingPage() {

    // Call the function to animate the content of the landing page
    animateLandingPageContent();
}

function moveObject(event)
{
    var delta = 0;

    if (!event) event = window.event;

    // normalize the delta
    if (event.wheelDelta) {

        // IE and Opera
        delta = event.wheelDelta / 60;

    } else if (event.detail) {

        // W3C
        delta = -event.detail / 2;
    }

    var currPos=document.getElementById('intro').offsetTop;
    console.log(currPos);
    //calculating the next position of the object
    currPos=parseInt(currPos)-(delta*10);

    //moving the position of the object
    document.getElementById('intro').style.top = currPos+"px";
}
// Function to animate the landing page paragraph
function animateLandingPageContent() {

    let objContent = document.getElementById("intro");
    let pos = 500;
    let id = setInterval(frame, 10);

    function frame() {
        if (pos === 20) {
            clearInterval(id);
        } else {
            pos--;
            objContent.style.top = pos + 'px';
            objContent.style.left = pos + 'px';
        }
    }
}