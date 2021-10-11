let innerSlider = document.querySelector(".inner-slider"); 
let nextBtn = document.querySelector(".button img:last-child"); 
let preBtn = document.querySelector(".button img:first-child");
let images = document.querySelectorAll(".inner-slider img");
let myContent = document.querySelector(".content");
let myTextP = document.querySelector(".content .text p");
let myJobP = document.querySelector(".content .job p");

let counter = 0; 
let size = images[0].clientWidth;
innerSlider.style.transform = 'translateX(' + -(size)*counter + 'px)';
nextBtn.addEventListener("click" , (e)=> {
    if(!counter) {
    myContent.innerHTML = `
    <div class="text">
    <p>
    
    " 
    If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. "
    "
    </p>
  </div>
  <div class="job">
    <p>
    <span> John Tarkpor </span> junior Front-end Developer
    </p>
  </div>
    
    `
    counter++; 
    
    innerSlider.style.transform = 'translateX(' + -(size)*counter + 'px)';
    }
    
})
preBtn.addEventListener("click" , (e)=>{
    if(counter){
    myContent.innerHTML = 
    
    `
    <div class="text">
    <p>
    "
    I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. i'm now the job of my dreams ans so excited about the future  
    "
    </p>
  </div>
  <div class="job">
    <p>
    <span> Tanya Sinclair </span> UX Engineer
    </p>
  </div>
    
    `
    counter--;
    innerSlider.style.transform = 'translateX(' + -(size)*counter + 'px)';
    }

})