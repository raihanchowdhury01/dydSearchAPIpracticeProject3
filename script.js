

const cardFun = (searchText) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
    .then(r => r.json())
    .then(d => displayCard(d.meals))
}
const displayCard = (ps) => {
    
    const callCardParent = document.getElementById('cardParent');
    callCardParent.innerHTML = '';
    ps.map(p => {
       
       
        
    const makeDiv = document.createElement('div');
    makeDiv.classList.add('col');
    makeDiv.innerHTML = `
    <div class="card">
      <img src="${p.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${p.strMeal}</h5>
        <p class="card-text">${p.strInstructions}</p>
      </div>
      <button onclick = 'modalBtn(${p.idMeal})' type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
    </div>
    
    `;
    callCardParent.appendChild(makeDiv)
    })
}
  

const clickBtn = () => {
  const inputField = document.getElementById('searchInput').value;
  cardFun(inputField);
}

cardFun('fish');



const modalBtn = idMeal => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  
    fetch(url)
    .then(r => r.json())
    .then(d => displayModal(d.meals[0]))
  }
    const displayModal = (pa) => {
      
      document.getElementById('exampleModalLabel').innerText = pa.strMeal;
      document.getElementById('modalBody').innerHTML = `
        <img class ='img-fluid' src = '${pa.strMealThumb}' alt = ''>
        <p> ${pa.strInstructions}</p>
      `;
    } 
