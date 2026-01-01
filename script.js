const dropdown = document.querySelector(".dropdown");
const toggle = document.querySelector(".dropdown-toggle");
const menu = document.querySelector(".dropdown-menu");
const items = document.querySelectorAll(".dropdown-item");
const selected = document.getElementById("selected");

const cards = document.getElementById("cards")




    fetch("data.json")
    .then(response => response.json())
    .then(data => {
      //console.log(data[0]);
      //console.log(data.name);
       data.forEach(country=>{

        const card = document.createElement('div');
         
          card.innerHTML=
          `<div class="card" id="card">
      <img src="${country.flags.svg}"/>
     <div class="card-content">
      <h3>${country.name}</h3>
      <p><strong>Population:</strong> ${country.population}</p>
      <p id="reg">Region: ${country.region}</p>
      <p>Capital: ${country.capital}</p>
     </div>
    </div>`

    card.onclick = function() { // Assign the function directly
      
        window.location.assign(`detail.html?alpha3Code=${country.alpha3Code}`);
      };
      cards.appendChild(card);
       })
      


    })
    .catch(error => console.error("Error:", error));

     

    const search = document.getElementById("search");
    
   
    search.addEventListener("input", () => {
        toggle.textContent = "All Regions" + " ▼";
        const query = search.value.toLowerCase();
        const cards_card = document.querySelectorAll("#cards div");
        cards_card.forEach(item => {
           
         
            const text=item.querySelector("h3").textContent.toLowerCase()
          
            item.style.display = text.includes(query) ? "block" : "none";
          });
      });


     
   

// Toggle dropdown
toggle.addEventListener("click", () => {
  dropdown.classList.toggle("open");
});

// Select an item
items.forEach(item => {
  item.addEventListener("click", () => {
    search.value=""
   
   const cards_card = document.querySelectorAll("#cards div");
   cards_card.forEach(card => {
      
    
       const text=card.querySelector("#reg").textContent.toLowerCase()
       if (item.textContent.toLowerCase() !== "all regions") {
       card.style.display = text.includes(item.textContent.toLowerCase()) ? "block" : "none";
       } else {
        card.style.display = "block"
       }
        
     });


    toggle.textContent = item.textContent + " ▼";

    dropdown.classList.remove("open");
  });
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("open");
  }
});


function dark_light() {
  var element = document.body
  element.classList.toggle("dark-mode");
  var nav = document.getElementsByTagName("nav");
  nav[0].classList.toggle("dark-mode-nav")
  var card = document.getElementsByClassName("card");
  for (const c of card) {
    // Use classList.toggle() on each individual element
    c.classList.toggle("dark-mode-card");
  }

}