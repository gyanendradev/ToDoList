const new_entry = document.querySelector(`.upcoming`);
const add_btn = document.querySelector(`.add`);
var edit_btn = document.querySelectorAll(`.edit`);
var del_btns = document.querySelectorAll(`.del`);
const tasks = document.querySelector(`.tasks`);
var all_tasks = document.querySelectorAll(`.task`);
const form = document.querySelector(`.form`);

update_all();

form.addEventListener("submit",e => add_entry(e));

function update_all(){
    edit_btn = document.querySelectorAll(`.edit`);
    del_btns = document.querySelectorAll(`.del`);
    all_tasks = document.querySelectorAll(`.task`);

    del_btns.forEach(val => val.addEventListener("click",del_entry));
    edit_btn.forEach( btn => btn.addEventListener("click",edit_record));
}

function add_entry(e){
    e.preventDefault();
    let entry = new_entry.value;
    if (! entry){
        new_entry.placeholder="Please add some valid Task";
        new_entry.classList.add("error");
    }
    else{
        let new_task = document.createElement(`div`);
        new_task.classList.add("task");
        new_task.innerHTML=`
            <div class="content">
            <input type="text" class="added" value="${entry}">
            </div>
            <div class="actions">
                <button class="edit ultra_colour">EDIT</button>
                <button class="del">DELETE</button>
            </div>`
        tasks.appendChild(new_task);
        new_entry.value="";
        new_entry.placeholder="What do you have planned ?";
        new_entry.classList.remove("error");
        update_all();
    }
}
function del_entry(e){
    all_tasks.forEach( value =>{
        if (e.target === value.children[1].children[1]){
            console.log(value);
            value.remove();
        }
    });
    update_all();
}
function edit_record(e){
    all_tasks.forEach( value =>{
        if (e.target === value.children[1].children[0]){
            if (value.children[0].children[0].readOnly == false){
                value.children[1].children[0].innerHTML = "EDIT";
                value.children[0].children[0].readOnly = true;
                value.children[0].children[0].classList.remove("editing");
            }else{
                value.children[1].children[0].innerHTML = "SAVE";
                value.children[0].children[0].readOnly = false;
                value.children[0].children[0].focus();
                value.children[0].children[0].classList.add("editing");
            }
        }
    });
}