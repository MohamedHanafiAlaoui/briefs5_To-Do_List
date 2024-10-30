let todo = document.getElementById("todo");
let progress = document.getElementById("progress");
let Done = document.getElementById("Done");
let Ajouter_title = document.getElementById("Ajouter_title")
let date__debut = document.getElementById("date_debut")
let date__limite = document.getElementById("date_limite")
let Priority = document.getElementById("Priority")
let LIST = document.getElementById("LIST")
let Descriptions = document.getElementById("Descriptions")
let x = 0
let Ajouter = []
let Description = []
let priority = []
let date_debut = []
let date_limite = []
let list = []
let colors = ["leftg", "leftj", "leftr"]

document.getElementById("save").addEventListener("click", function (e) {
    e.preventDefault()

    if (Ajouter_title.value !== '' && date__debut.value !== "") {
        Ajouter[Ajouter.length] = Ajouter_title.value;
        Description[Description.length] = Descriptions.value;
        priority[priority.length] = Priority.value;
        date_debut[date_debut.length] = date__debut.value;
        date_limite[date_limite.length] = date__limite.value;
        list[list.length] = LIST.value;
    }
    else {
        alert("ecrire titele")
    }


    
    affche()


})

function affche() {
    
    todo.innerHTML = ''
    for (let i = 0; i < Ajouter.length; i++) {

        if (list[i] === 'TODO') {

            if (priority[i] === 'P2') {

          todo.innerHTML  +=`
        <div class="card-body border border-3  border-danger  ${colors[2]} m-2 ">
            <h5 class="card-title">${Ajouter[i]}</h5>
            <div>
              <button type="button" class="btn btn-primary">Edit</button>
              <button type="button" class="btn btn-danger">Delete</button>
            </div>
        </div>
                    `
            }
            else if (priority[i] === 'P1') {
                
                todo.innerHTML +=`
               <div class="card-body border border-3  border-danger  ${colors[1]} m-2 ">
                    <h5 class="card-title">${Ajouter[i]}</h5>
                    <div>
                      <button type="button" class="btn btn-primary">Edit</button>
                      <button type="button" class="btn btn-danger">Delete</button>
                    </div>
                </div>
                            `
            }
            else {
                todo.innerHTML  +=`
                <div class="card-body border border-3  border-danger  ${colors[0]} m-2 ">
                    <h5 class="card-title">${Ajouter[i]}</h5>
                    <div>
                      <button type="button" class="btn btn-primary">Edit</button>
                      <button type="button" class="btn btn-danger">Delete</button>
                    </div>
                </div>
                            `
            }

        } 
        else if (list[i] === "INPROGRESS") {

            if (priority[i] === 'P2') {

                progress.innerHTML  +=`
              <div class="card-body border border-3  border-danger  ${colors[2]} m-2 ">
                  <h5 class="card-title">${Ajouter[i]}</h5>
                  <div>
                    <button type="button" class="btn btn-primary">Edit</button>
                    <button type="button" class="btn btn-danger">Delete</button>
                  </div>
              </div>
                          `
                  }
                  else if (priority[i] === 'P1') {
                      
                    progress.innerHTML +=`
                     <div class="card-body border border-3  border-danger  ${colors[1]} m-2 ">
                          <h5 class="card-title">${Ajouter[i]}</h5>
                          <div>
                            <button type="button" class="btn btn-primary">Edit</button>
                            <button type="button" class="btn btn-danger">Delete</button>
                          </div>
                      </div>
                                  `
                  }
                  else {
                    progress.innerHTML  +=`
                      <div class="card-body border border-3  border-danger  ${colors[0]} m-2 ">
                          <h5 class="card-title">${Ajouter[i]}</h5>
                          <div>
                            <button type="button" class="btn btn-primary">Edit</button>
                            <button type="button" class="btn btn-danger">Delete</button>
                          </div>
                      </div>
                                  `
                  }

        } 
        else {
            
            if (priority[i] === 'P2') {

                Done.innerHTML  +=`
              <div class="card-body border border-3  border-danger  ${colors[2]} m-2 ">
                  <h5 class="card-title">${Ajouter[i]}</h5>
                  <div>
                    <button type="button" class="btn btn-primary">Edit</button>
                    <button type="button" class="btn btn-danger">Delete</button>
                  </div>
              </div>
                          `
                  }
                  else if (priority[i] === 'P1') {
                      
                      Done.innerHTML +=`
                     <div class="card-body border border-3  border-danger  ${colors[1]} m-2 ">
                          <h5 class="card-title">${Ajouter[i]}</h5>
                          <div>
                            <button type="button" class="btn btn-primary">Edit</button>
                            <button type="button" class="btn btn-danger">Delete</button>
                          </div>
                      </div>
                                  `
                  }
                  else {
                      Done.innerHTML  +=`
                      <div class="card-body border border-3  border-danger  ${colors[0]} m-2 ">
                          <h5 class="card-title">${Ajouter[i]}</h5>
                          <div>
                            <button type="button" class="btn btn-primary">Edit</button>
                            <button type="button" class="btn btn-danger">Delete</button>
                          </div>
                      </div>
                                  `
                  }
                        
        }

    }
}

// afiche de parti
document.getElementById("Task").addEventListener('click', function () {
    let Active = document.getElementById("Active");
    if (x === 0) {
        Active.style.display = "flex";
        x = 1

    }
    else {
        Active.style.display = 'none';
        x = 0
    }
});


function Delete() {
    
}



