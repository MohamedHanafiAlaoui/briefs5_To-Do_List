let todo = document.getElementById("todo");
let progress = document.getElementById("progress");
let Done = document.getElementById("Done");
let Ajouter_title = document.getElementById("Ajouter_title")
let date__debut = document.getElementById("date_debut")
let date__limite = document.getElementById("date_limite")
let Priority = document.getElementById("Priority")
let LIST = document.getElementById("LIST")
let Descriptions = document.getElementById("Descriptions")
let savedt = document.getElementById("savedt")
let save = document.getElementById("save")
let  Titletext = document.getElementById("Title")
let date = document.getElementById("date")
let datefin = document.getElementById("datefin")
let Descr = document.getElementById("Descr")
let Ajouter = []
let Description = []
let priority = []
let date_debut = []
let date_limite = []
let list = []
let colors = ["leftr", "leftj", "leftg"]
let to_do 
let done_do 
let INPROGRESS_do 



save.addEventListener("click", function (e) {
    e.preventDefault()

    if (Ajouter_title.value.trim() != '' && date__debut.value.trim() != "" && Descriptions.value.trim() != "" && date__limite.value.trim() != "" && LIST.value != "") 
      {
        Ajouter[Ajouter.length] = Ajouter_title.value;
        Description[Description.length] = Descriptions.value;
        priority[priority.length] = Priority.value;
        date_debut[date_debut.length] = date__debut.value;
        date_limite[date_limite.length] = date__limite.value;
        list[list.length] = LIST.value;
        let Active = document.getElementById("Active");     
         Active.style.display = 'none';
        
    }

    if (Ajouter_title.value.trim() != '' ) 
      {
          Titletext.style.display ="none"
  
      }else
      {
          Titletext.style.display ="flex"
  
      }
  
      if ( date__debut.value.trim() != "" ) 
      {
          date.style.display ="none"
  
      }
      else
      {
          date.style.display ="flex"
  
      }
      if (Descriptions.value.trim() != "" ) 
      {
          Descr.style.display ="none"
  
      }
      else
      {
          Descr.style.display ="flex"
  
      }
  
      if ( date__debut.value.trim() != "")
          {
              datefin.style.display ="none"
  
          } 
          else
          {
              datefin.style.display ="flex"
  
          }
    
    affche()


})



function affche() {

    Ajouter_title.value = '';
  Descriptions.value = '';
 date__debut.value = '';
 date__limite.value = '';
    todo.innerHTML = ''
    progress.innerHTML = ''
    Done.innerHTML = ''

 

    to_do = 0
    INPROGRESS_do=0
    done_do=0
    for (let i = 0; i < Ajouter.length; i++) {
     
        if (list[i] === 'TODO') {
          to_do++
            if (priority[i] === 'P2') {
              
          todo.innerHTML  +=`
        <div class="card-body border border-3  border-danger  chang_list ${colors[2]} m-2 " draggable="true" >
            <h5 class="card-title">${(Ajouter[i])}</h5>
            <div>
              <button type="button" class="btn btn-primary" onclick="Edit(${i})">Edit</button>
              <button type="button" class="btn btn-danger" onclick ="Delete(${i})">Delete</button>
            </div>
        </div>
                    `
            }
            else if (priority[i] === 'P1') {
                
                todo.innerHTML +=`
               <div class="card-body border border-3  border-danger  chang_list ${colors[1]} m-2 " draggable="true" >
                    <h5 class="card-title">${Ajouter[i]}</h5>
                    <div>
                      <button type="button" class="btn btn-primary" onclick="Edit(${i})">Edit</button>
                      <button type="button" class="btn btn-danger" onclick ="Delete(${i})">Delete</button>
                    </div>
                </div>
                            `
            }
            else  if (priority[i] === 'P3'){


                todo.innerHTML  +=`
                <div class="card-body border border-3  border-danger  chang_list ${colors[0]} m-2 " draggable="true" >
                    <h5 class="card-title">${Ajouter[i]}</h5>
                    <div>
                      <button type="button" class="btn btn-primary " onclick="Edit(${i})">Edit</button>
                      <button type="button" class="btn btn-danger" onclick ="Delete(${i})">Delete</button>
                    </div>
                </div>
                            `
            }

        } 
        else if (list[i] === "INPROGRESS") {
          INPROGRESS_do++
            if (priority[i] === 'P2') {

                progress.innerHTML  +=`
              <div class="card-body border border-3  border-danger  chang_list ${colors[2]} m-2 " draggable="true" >
                  <h5 class="card-title">${Ajouter[i]}</h5>
                  <div>
                    <button type="button" class="btn btn-primary" onclick="Edit(${i})">Edit</button>
                    <button type="button" class="btn btn-danger" onclick="Delete(${i})">Delete</button>
                  </div>
              </div>
                          `
                  }
                  else if (priority[i] === 'P1') {
                      
                    progress.innerHTML +=`
                     <div class="card-body border border-3  border-danger  chang_list ${colors[1]} m-2 " draggable="true" >
                          <h5 class="card-title">${Ajouter[i]}</h5>
                          <div>
                            <button type="button" class="btn btn-primary" onclick="Edit(${i})">Edit</button>
                            <button type="button" class="btn btn-danger" onclick="Delete(${i})">Delete</button>
                          </div>
                      </div>
                                  `
                  }
                  else {
                    progress.innerHTML  +=`
                      <div class="card-body border border-3  border-danger  chang_list ${colors[0]} m-2 " draggable="true" >
                          <h5 class="card-title">${Ajouter[i]}</h5>
                          <div>
                            <button type="button" class="btn btn-primary" onclick="Edit(${i})">Edit</button>
                            <button type="button" class="btn btn-danger" onclick ="Delete(${i})">Delete</button>
                          </div>
                      </div>
                                  `
                  }

        } 
        else if (list[i] === "DONE") {
          done_do++
            if (priority[i] === 'P2') {

                Done.innerHTML  +=`
              <div class="card-body border border-3  border-danger  chang_list ${colors[2]} m-2 " draggable="true" >
                  <h5 class="card-title">${Ajouter[i]}</h5>
                  <div>
                    <button type="button" class="btn btn-primary"  onclick="Edit(${i})">Edit</button>
                    <button type="button" class="btn btn-danger " onclick ="Delete(${i})">Delete</button>
                  </div>
              </div>
                          `
                  }
                  else if (priority[i] === 'P1') {
                      
                      Done.innerHTML +=`
                     <div class="card-body border border-3  border-danger  chang_list ${colors[1]} m-2 " draggable="true" >
                          <h5 class="card-title">${Ajouter[i]}</h5>
                          <div>
                            <button type="button" class="btn btn-primary"  onclick="Edit(${i})">Edit</button>
                            <button type="button" class="btn btn-danger" onclick ="Delete(${i})">Delete</button>
                          </div>
                      </div>
                                  `
                  }
                  else {
                    
                      Done.innerHTML  +=`
                      <div class="card-body border border-3  border-danger  chang_list ${colors[0]} m-2 " draggable="true" >
                          <h5 class="card-title">${Ajouter[i]}</h5>
                          <div>
                            <button type="button" class="btn btn-primary"  onclick="Edit(${i})">Edit</button>
                            <button type="button" class="btn btn-danger" onclick ="Delete(${i})">Delete</button>
                          </div>
                      </div>
                                  `
                  }
                        
        }

    }

    document.getElementById("contetode").textContent = to_do
    document.getElementById("conteprogress").textContent = INPROGRESS_do
    document.getElementById("conteDone").textContent = done_do

}


document.getElementById("Task").addEventListener('click', function () {

        Active.style.display = "flex";
});
document.getElementById("fermer").addEventListener('click', function (e) {
  e.preventDefault()
    let Active = document.getElementById("Active");

        Active.style.display = 'none';

});



function Delete(N) {
    Ajouter.splice(N,1)
    Description.splice(N,1)
    priority.splice(N,1)
    date_debut.splice(N,1)
    date_limite.splice(N,1)
    list.splice(N,1)

    affche()
}



function Edit(N) {
    let Active = document.getElementById("Active");
        Active.style.display = "flex";
        savedt.style.display = "flex";
        save.style.display = "none";
        
        Ajouter_title.value = Ajouter[N]
        Descriptions.value =Description[N];
        Priority.value = priority[N];
       date__debut.value = date_debut[N];
       date__limite.value =date_limite[N];
       LIST.value = list[N];

       savedt.addEventListener("click", function (e) {
        e.preventDefault()
    
        if (Ajouter_title.value.trim() != '' && date__debut.value.trim() != "" && Descriptions.value.trim() != "" && date__debut.value.trim() != "") {
            Ajouter[N] = Ajouter_title.value;
            Description[N] = Descriptions.value;
            priority[N] = Priority.value;
            date_debut[N] = date__debut.value;
            date_limite[N] = date__limite.value;
            list[N] = LIST.value;

        Active.style.display = "none";
        savedt.style.display = "none";
        save.style.display = "flex";

        }
        else {
          document.querySelector("input").style.color ="red"
        } 

        affche()


    })
}






