// Met de POST request tekst toevoegen
// Met de GET request de tekst opvragen en weergeven in de DOM


// Eerst de GET toevoegen aan de DOM
//  Dan krijg ik alle posts in totaal in de DOM met een li tag

// Daarna de POST toevoegen aan de DOM
//  Dan krijg ik de nieuwe gemaakte post, wat dan weer toegevoegd wordt met de GET request
const parent = document.querySelector('#container');


const addBtn = document.querySelector("#add_btn");
// console.log(addBtn);

addBtn.addEventListener('click', async () => {
    console.log(await getToDo());


    const childLi = document.createElement('li');
    childLi.classList.add('new-api-li')


    const input = document.querySelector('#new-task');
    input.value;
    // console.log(input.value);

    const buttonNearLi = document.createElement('button');
    // console.log(buttonNearLi)
    buttonNearLi.classList.add('delete-btns');
    const contentBtn = document.createTextNode('Taak gedaan');


    const contentLi = document.createTextNode(input.value);

    parent.appendChild(childLi);

    childLi.appendChild(contentLi);

    childLi.appendChild(buttonNearLi);

    buttonNearLi.appendChild(contentBtn);

    // console.log(input.value);

    const data = await postToDo({ description: input.value, done: false });
    // const deleteData = await deletePost();
    // console.log(data);
});




async function getData() {
    const data = await getToDo();
    data.forEach(toDoItem => {
        console.log(toDoItem.description);


        const childLi = document.createElement('li');
        childLi.classList.add('new-api-li')

        const buttonNearLi = document.createElement('button');
        // console.log(buttonNearLi)
        buttonNearLi.classList.add('delete-btns');
        buttonNearLi.setAttribute("data-type", toDoItem._id)


        const contentLi = document.createTextNode(toDoItem.description);
        const contentBtn = document.createTextNode('Taak gedaan');


        parent.appendChild(childLi);
        childLi.appendChild(contentLi);

        childLi.appendChild(buttonNearLi);

        buttonNearLi.appendChild(contentBtn);




        //GEBRUK DIT OM DE LI TE DELETEN AAN DE HAND VAN DE ADDEVENT
        buttonNearLi.addEventListener("click", e => {
            // deleteToDo(id);

            if (e.target.classList.contains("delete-btns")) {



                console.log(toDoItem._id);

                // Deleten
                deleteToDo(toDoItem._id);

                // Lijst leegmaken vanuit de dom
                parent.innerHTML = '';

                // Lijst ophalem
                getData();

                const deletedTasks = `Taak: ${toDoItem.description} met ID: ${buttonNearLi.getAttribute('data-type')} is succesvol verwijderd!`;
                console.log(deletedTasks);


            }

        })


    });

    console.log(data);
}

getData();

// GET en POST was al gemaakt maar er was een loop
// Bij regel 34 hadden we de waarde meegegeven wat in de inputveld werd genoteerd
// creeren van textnode 
