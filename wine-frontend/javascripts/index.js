let wines = [];

const baseURL = "http://localhost:3000"

function main() {
    return document.getElementById("main")
}

function nameInput() {
    return document.getElementById('name')
}

function varietalInput() {
    return document.getElementById('varietal')
}

function vintageInput() {
    return document.getElementById('vintage')
}

function form() {
    return document.getElementById('form')
}

function formLink() {
    return document.getElementById('form-link')
}

function winesLink() {
    return document.getElementById('wines-link')
}

function getWines() {
   fetch(baseURL + '/wines')
        .then(resp => resp.json())
        .then(function(data) {
            wines = data
        })

        renderWines()
}

function resetFormInput() {
    nameInput().innerHTML = "";
    varietalInput().innerHTML = "";
    vintageInput().innerHTML = "";
}

function resetMain() {
    main().innerHTML = "";
}

function formTemplate() {
    return `
    <h3>Add Wine</h3>
        <form id="form">
            <div class="input-field">
                <label for="name">Wine Appellation</label>
                <input type="text" name="name" id="name">
            </div>
            <div class="input-field">
                <label for="varietal">Grape varietal</label>
                <input type="text" name="varietal" id="varietal">
            </div>
            <div class="input-field">
                <label for="vintage">Grape vintage</label>
                <input type="integer" name="vintage" id="vintage">
            </div>
            <input type="submit" value="Add Wine">
        </form>
    `
}

function winesTemplate() {
    return `
    <h3>List of wines</h3>
        <div id="wines"></div>
    `
}

function renderWine(wine) {
    let div = document.createElement("div")
    let h2 = document.createElement("h2")
    let h3 = document.createElement("h3")
    let h4 = document.createElement("h4")
    let deleteLink = document.createElement("a")
    let editLink = document.createElement("a")
    let winesDiv = document.getElementById("wines")
    
    editLink.dataset.id = wine.id
    editLink.setAttribute("href", "#")
    editLink.innerText = "Edit"
    
    deleteLink.dataset.id = wine.id
    deleteLink.setAttribute("href", "#")
    deleteLink.innerText = "Delete"
    
    editLink.addEventListener("click", editWine)
    deleteLink.addEventListener("click", deleteWine)

    h2.innerText = wine.name
    h3.innerText = wine.varietal
    h4.innerText = wine.vintage

    div.appendChild(h2)
    div.appendChild(h3)
    div.appendChild(h4)
    div.appendChild(editLink)
    div.appendChild(deleteLink)

    winesDiv.appendChild(div)
    
}

function deleteWine(e) {
    e.preventDefault();

    let id = e.target.dataset.id

    fetch(baseURL + '/wines/' + id, {
        method: 'DELETE'
    })
    .then(function(resp) {
        return resp.json()
    })
    .then(function(data) {
        wines = wines.filter(function(wine) {
            return wine.id !== data.id
        })
        renderWines()
    })
}


function renderForm() {
    resetMain();
    main().innerHTML = formTemplate();
    form().addEventListener("submit", submitForm);
}

function renderWines() {
    resetMain();
    main().innerHTML = winesTemplate()
    
    wines.forEach(function(wine) {
        renderWine(wine)
    })
}

function submitForm(e) {
    e.preventDefault();

    let strongParams = {
        wine: {
            name: nameInput().value,
            varietal: varietalInput().value,
            vintage: vintageInput().value
        }
    }

    fetch(baseURL + '/wines', {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(strongParams),
        method: 'POST'
    })
        .then( function(resp) {
            return resp.json()
        })
        .then( function(wine) {
            wines.push(wine)
            renderWines()
        })

    renderWines()
}

function formLinkEvent() {
    formLink().addEventListener("click", function(e) {
        e.preventDefault();

        renderForm();
    })
}
function winesLinkEvent() {
    winesLink().addEventListener("click", function(e) {
        e.preventDefault();

        renderWines();
    })
}

document.addEventListener('DOMContentLoaded', function() {
    getWines();
    renderForm();
    formLinkEvent();
    winesLinkEvent()
})