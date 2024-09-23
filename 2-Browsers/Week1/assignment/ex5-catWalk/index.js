/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-5-the-cat-walk

1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/
let cat = document.querySelector('img');
cat.style.left = '0px';
let originalCatSrc = cat.src;
let screenWidth = window.innerWidth;
let middle = screenWidth / 2;

function catWalk() {
   let currentLeft = parseInt(cat.style.left);

   if (currentLeft > screenWidth) {
      cat.style.left = '0px';
   } else {
      cat.style.left = currentLeft + 10 + 'px';
   }

   let catWidth = cat.width;
   if (currentLeft >= (middle - catWidth / 2) && currentLeft <= (middle + catWidth / 2)) {
      cat.src = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
      setTimeout(() => {
        cat.src = originalCatSrc;
      }, 5000);
   }
}


window.onload = function() {
   setInterval(catWalk, 50);
};
