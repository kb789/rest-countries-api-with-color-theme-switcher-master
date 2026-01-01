let params = new URLSearchParams(document.location.search);
let alpha3Code = params.get("alpha3Code");

function goBack() {
      history.back();
    }

function goBorder(alpha3Code) {
 
  window.location.assign(`detail.html?alpha3Code=${alpha3Code}`);
}

fetch('data.json')
  .then(response => {
    // Check if the request was successful (e.g., status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Parse the response body as JSON
    return response.json();
  })
  .then(data => {
    const result = data.find(item => item.alpha3Code === alpha3Code);
     document.getElementById("title").textContent+=` ${result.name}`
    document.getElementById("flag-pic").src=result.flags.svg
    document.getElementById("native").textContent+=` ${result.nativeName}`
    document.getElementById("population").textContent+=` ${result.population}`
     document.getElementById("region").textContent+=` ${result.region}`
      document.getElementById("subregion").textContent+=` ${result.subregion}`
       document.getElementById("capital").textContent+=` ${result.capital}`
        document.getElementById("top").textContent+=` ${result.topLevelDomain}`
          let currencies="";
         result.currencies.forEach(element => {
        currencies+=`${element.name}, `
         });
       
 currencies = currencies.slice(0, -2);

         document.getElementById("curr").textContent+=currencies

        let langs="";
         result.languages.forEach(element => {
        langs+=`${element.name}, `
         });
       
  langs = langs.slice(0, -2);

         document.getElementById("lang").textContent+=langs
          
  let borders=document.getElementById("borders")
  if (result.borders) {
         result.borders.forEach(element => {
         let abbrev = data.find(item => item.alpha3Code === element);


        borders.innerHTML+=`<div class="border" onclick="goBorder('${abbrev.alpha3Code}')">${abbrev.name}</div>`

         });
  }
  

         

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });