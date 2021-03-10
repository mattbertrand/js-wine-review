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
        <div id="wines">
            <div>
                <h4>Name:</h4>
                <p>Varietal: - Vintage:</p>
            </div>
        </div>
    `
}

function renderForm() {
    resetMain();
    main().innerHTML = formTemplate();
    form().addEventListener("submit", submitForm);
}

function renderWines() {
    resetMain();
    main().innerHTML = winesTemplate()
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