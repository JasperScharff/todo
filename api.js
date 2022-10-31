const local_api = 'http://localhost:3000/';
const id = deleteTasks;


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
        })
    
        return res3;
    } catch (error) {
        console.log('Error', error)
    };
};