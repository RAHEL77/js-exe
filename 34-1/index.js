let usersList = [];
const getUsers = async() => {
    for (let i = 1; i < 11; i++) {
        const callApi = await fetch(`https://swapi.dev/api/people/${i}/`);
        let data = await callApi.json();
        let world = await fetch(data.homeworld);
        planetdata = await world.json();
        console.log(world)
        usersList.push({
            name: data.name,
            hair: data.hair_color,
            height: data.height,
            planet: {
                name: planetdata.name,
                population: planetdata.population
            }
        })
    }
    createTable()
}
const createTable = () => {
    const table = document.createElement("table");
    table.classList.add("star-wars");
    const tableBody = document.createElement("tbody");
    const tr = document.createElement("tr");
    const title = document.createElement("td");
    title.setAttribute("colspan", "5");
    title.classList.add("header");
    title.innerHTML = "Star Wars";

    const categories = document.createElement("tr");
    tr.appendChild(title);
    tableBody.appendChild(tr);
    tableBody.appendChild(categories);

    usersList.forEach((item) => {
        const tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerHTML += item.name;
        let td2 = document.createElement("td");
        td2.innerHTML += item.hair;
        let td3 = document.createElement("td");
        td3.innerHTML += item.height;
        let td4 = document.createElement("td");
        td4.innerHTML += item.planet.name;
        let td5 = document.createElement("td");
        td5.innerHTML += item.planet.population;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        tableBody.appendChild(tr);
    });
    table.appendChild(tableBody);
    document.body.appendChild(table);
}