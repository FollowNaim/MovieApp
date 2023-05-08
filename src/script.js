/* CopyRight 2023 www.naim.vercel.app's Owner All Rights Reserved */

// Assigning Variable


const movieRef = document.querySelector("#movieName");
const searchBtn = document.querySelector(".searchBtn");
const container = document.querySelector(".container");
const result = document.querySelector(".result");
const googleBtn = document.querySelectorAll("#googleSearch");
const errorArea = document.querySelector(".errorArea");
const errorActive = document.querySelector(".errorActive");
const footer = document.querySelector(".footer");
const footerTxt = document.querySelector(".footer span")

// making fucntion for muti usage

function getMovie (){
 
 
 const container = document.querySelector(".container");
 const result = document.querySelector(".result");
 const errorArea = document.querySelector(".errorArea");
 const movieName = movieRef.value;
 const url = `https://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
 
 
 
 ''
 // When input field is empty Raise An Error
 
 if (movieName.length === 0){
  
  container.style.height = "200px";
  movieRef.placeholder = "You have to Enter A movie Name"
  movieRef.classList.add("active");
  errorActive.style.display = "block";
  errorActive.innerHTML = ` <h3> Lol ! <br> You have to enter A Movie Name O⁠_⁠o</h3>`
  
  footer.style.marginTop = "130%";
  footerTxt.style.color = "black";
  errorArea.style.display = "none"

  
 }
 
 // Fetching Data From API
 
 
 else{
  fetch(url)
  .then((resp)=>resp.json())
  .then((data)=>{
   if(data.Response== "True"){
    
    // Adding HTML into Result Section
   
    result.innerHTML = `
    
        <div class="info">
        <div class="poster">
         <img src="${data.Poster}" alt="Poster">
         
        </div>
        <div class="textArea">
         <h2>${data.Title}</h2>
         <div class="rated">
         <img src="src/star-icon.svg" alt="icon.svg">
         <span>${data.imdbRating}</span>
         </div>
         <div class="year">
          <span>${data.Year}</span>
          <span>${data.Rated}</span>
          <span>${data.Runtime}</span>
         </div>
         <div class="genre">
         
         <div>${data.Genre.split(",").join("</div><div>")}</div>
          
         </div>
        </div>
        </div>
      <div class="details">
      <div class="plot">
         <h2>Plot:</h2>
         <p>${data.Plot}</p>
        </div>
      <div class="cast">
      <h2>Cast:</h2> 
       <p>${data.Actors}</p>
       </div>
       </div>
     
    
    `
    
    
    
   }
   
   // If response False then Get this Condition
   
   if (data.Response == "False") {
    result.style.display = "none";
    errorArea.style.display = "block";
    container.style.height = "50%";
    errorActive.style.display = "none";
    errorArea.innerHTML = `   <h2><span id="errortx">Opps!</span> <span id="mName">${movieName}</span><span id="errortx"> isn't A Movie Name </span><br><span id="errortx2"> Click On This Button to Check your Input is Right Or Not.</span></h2>
        <button id="googleSearch" onclick="googleSearch()">Search This on google</button>
 `
 //  <img src="src/404.png" alt="" class="errorPhoto"
   footer.style.display ="block";
   footer.style.marginTop = "170%";
   footerTxt.style.color = "black";
   
   if(window.innerWidth > 762){
    container.style.height = "fit-content";
    footer.style.marginTop = "130%";
    footer.style.marginLeft = "8%";
    footerTxt.style.color = "black";
    errorArea.style.height = "fit-content";
    errorArea.style.marginBottom = "8%";
   
   }
    }
    
    
    
    
    // OtherWise This
    
    else{
    container.style.height = "95%";
    container.classList.add("fadeIn");
    errorActive.style.display = "none";
    result.classList.add("fadeIn");
    result.style.display = 'block';
    footer.style.display = "none";
    movieRef.classList.remove("active")
    if (window.innerWidth > 762) {
     errorArea.style.display = "none";
     container.style.height = "fit-content";
     
     footer.style.display = "block";
     footer.style.marginTop = "135%";
     footer.style.marginLeft = "7%";
     footerTxt.style.color = "black";
     if (window.innerWidth < 393){
      container.style.height = "fit-content";
     }
    }
    
    }
   
   // For error catch
   
  }).catch(error=>console.log(error));
 }
 
 
 
 

 
 
 
}


// when Clicked


searchBtn.addEventListener("click", ()=>{
 getMovie();
 
})

// When keyDown


movieRef.addEventListener("keydown",(e)=>{
 if(e.keyCode === 13){
  e.preventDefault();
  getMovie();
 }
});

function googleSearch(){
 const searchName = document.querySelector("#movieName").value;
 const url = `https://www.google.com/search?q=movie:${searchName}`;
 window.location.href = url;
}

/*window.addEventListener("resize", function() {
 if (window.innerWidth > 768) {
  container.style.height = "700px";
  container.style.width = "90%"
  footer.style.marginTop = "150%"
  footerTxt.style.color = "black"
  // set height to 600px in desktop mode
 } 
 if (window.innerWidth < 393 ){
  container.style.height = "98%";
 }
});
*/
