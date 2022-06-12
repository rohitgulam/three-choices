const toggles = document.querySelectorAll('.toggle');
const smart = document.querySelector('#smart');
const hot = document.querySelector('#hot');
const loyal = document.querySelector('#loyal');

toggles.forEach(toggle => {
    toggle.addEventListener('change', (e) => {
        doTheTrick(e.target)
    })
});

function doTheTrick(theClickedOne) {
    // Check if all three are checked
    if(smart.checked && hot.checked && loyal.checked){
        // Check to see which one was the last to be clicked and toggle another one
        if(smart === theClickedOne){
            hot.checked = false;
        }
        if(hot === theClickedOne){
            loyal.checked = false;
        }
        if(loyal === theClickedOne){
            smart.checked = false;
        }
    }
}