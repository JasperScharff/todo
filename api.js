const local_api = 'http://localhost:3000/';


// GET: Haal de database op
async function getToDo() {
    try {
        const res = await fetch(local_api, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",

            },
        })
        const JSON = await res.json();
        return JSON
    } catch (error) {
        console.log("error", error)
    }
}

// POST: Maakt nieuw element aan
async function postToDo(data) {
    try {
        const res2 = await fetch(local_api, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",

            },
        })
        const JSON2 = await res2.json();
        return JSON2
    } catch (error) {
        console.log("error", error)
    }
}


// DELETE: delete de item van de database 
// DELETE task with id = 1
async function deleteToDo(id) {

    try {
        const res3 = await fetch(local_api + id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            },
        });

        return res3;
    } catch (error) {
        console.log('Error', error)
    };
};

/*In index.js wordt de functie deleteToDo(toDoItem._id), 
//aangeroepen met parameter toDoItem (wat alle taken aanroept en plaatst in een apparte array)
De ._id, zorgt ervoor dat de ID wordt aangoepen van de Array lijst, dus dan krijg je een hele lijst
met allemaal id's, afhankelijk hoeveel taken er zijn. 

De functie deleteToDo(id) wordt in de api.js gemaakt met de parameter id. 
De parameter id = de aangeroepen deleteToDo(toDoItem._id). Dus de functie wordt 
opgeslagen in de id va de parameter en wordt dan weer geplaatst achter de local_api. 

Zo heb je de http://localhost:3000/ (local api) + de id (bijvoorbeeld:6d935bd6-387d-41e0-b836-964641273d67)
= http://localhost:3000/6d935bd6-387d-41e0-b836-964641273d67 = URI.
*/
