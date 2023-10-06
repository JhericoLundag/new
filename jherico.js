var navLinks; 
var isMenuOpen = true;
document.addEventListener("DOMContentLoaded", function () {
  navLinks = document.getElementById("navLinks"); 
});

function toggleMenu() {
  navLinks.style.visibility= "visible";
  if (isMenuOpen) {
    navLinks.style.display ='block';
    
  } else {
    navLinks.style.display ='none'; 
    
  }
  isMenuOpen =! isMenuOpen;
}

function myFunction(x) {
  x.classList.toggle("change");
  toggleMenu();
}
  document.addEventListener("DOMContentLoaded", function () {
    image1 = document.getElementById('slider1');
    image2 = document.getElementById('slider2');
    image3 = document.getElementById('slider3');
    image4 = document.getElementById('slider4');
    image5 = document.getElementById('slider5');
    image6 = document.getElementById('slider6');
    element = document.getElementById("myElement");
    textElement = document.getElementById('text');
    textElement1 = document.getElementById('text1');
   
   
   image1.addEventListener('click', () => {
     
     textElement.textContent = 'Date Posted: Unknown';
     textElement1.textContent = 'Caption: Last picture with my mom';
     newImageUrl = 'fam.jpg'; 
     element.style.backgroundImage = 'url(' + newImageUrl + ')';
   });
   
   image2.addEventListener('click', () => {
    textElement.textContent = 'Date Posted: March 15 2023';
    textElement1.textContent = 'Caption: kanya kanyang siraan pag-uwi';
     newImageUrl = 'plastikan.jpg'; 
     element.style.backgroundImage = 'url(' + newImageUrl + ')';
     
     
   });
   
   image3.addEventListener('click', () => {
    textElement.textContent = 'Date Posted: Unknown';
    textElement1.textContent = 'Caption: allen is the reason why we survive';
     newImageUrl = 'allen.jpeg';
     element.style.backgroundImage = 'url(' + newImageUrl + ')';
   });
   
   image4.addEventListener('click', () => {
    textElement.textContent = 'Date Posted: July 16 2021';
    textElement1.textContent = 'Caption: Una at huling karangalan in my entire life';
     newImageUrl = 'grad.jpg';
     element.style.backgroundImage = 'url(' + newImageUrl + ')';
   });
   image5.addEventListener('click', () => {
    textElement.textContent = 'Date Posted: May 12 2023';
    textElement1.textContent = 'Caption: Wish ko po may mahulugan ng 1k';
     newImageUrl = 'pray.jpg'; 
     element.style.backgroundImage = 'url(' + newImageUrl + ')';
   });
   image6.addEventListener('click', () => {
    textElement.textContent = 'Date Posted: April 13 2023';
    textElement1.textContent = 'Caption: Italian Model';
     newImageUrl = 'korean.jpeg'; 
     element.style.backgroundImage = 'url(' + newImageUrl + ')';
   });


  function showLoader() {
    document.querySelector('.loader').style.display = 'block';
  }
  
  
  function hideLoader() {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.luding').style.display = 'none';
  }
  
  
  function simulateLoading() {
    showLoader();
  
    setTimeout(function () {
      hideLoader();
      document.querySelector('.enteng').style.display = 'block';
    }, 4000); 
  }
  
  window.addEventListener('load', simulateLoading);
});
  
