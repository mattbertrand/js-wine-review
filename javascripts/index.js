const wines = [
    {name: "La Crema", varietal: "Chardonnay", vintage: "2015"},
    {name: "Duckhorn", varietal: "Pinot Noir", vintage: "2016"},
    {name: "Silver Oak", varietal: "Cabernet", vintage: "2014"},
    {name: "Rombaueur", varietal: "Zinfandel", vintage: "2013"}
];

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
    let winesDiv = document.getElementById("wines")
    
    h2.innerText = wine.name
    h3.innerText = wine.varietal
    h4.innerText = wine.vintage

    div.appendChild(h2)
    div.appendChild(h3)
    div.appendChild(h4)

    winesDiv.appendChild(div)
    
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

    wines.push({
        name: nameInput().value,
        varietal: varietalInput().value,
        vintage: vintageInput().value
    })

    resetFormInput()
}

document.addEventListener('DOMContentLoaded', function() {
    // renderForm();
    renderWines()
})