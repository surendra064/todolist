const title=document.getElementById("title");
const description=document.getElementById("description");
const form=document.querySelector("form");
const container=document.querySelector(".container");
const tasks=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];

showalltasks();
function showalltasks()
{
    tasks.forEach((value,index) => {
        const div=document.createElement("div");
        div.setAttribute("class","tasks");
        const idiv=document.createElement("div");
        div.append(idiv);
        const p=document.createElement("p");
        p.innerText=value.title;
        idiv.append(p);
        const span=document.createElement("span");
        span.innerText=value.description;
        idiv.append(span);
        const btn=document.createElement("button");
        btn.setAttribute("class","deletebtn");
        btn.innerText="-";
        btn.addEventListener("click",()=>{
            removetasks();
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks));
            showalltasks();
        });
        div.append(btn);
        container.append(div);



        
    });
}
function removetasks(){
    tasks.forEach(()=>{
        const div=document.querySelector(".tasks");
        div.remove();
    });
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    removetasks();
    tasks.push({
        title: title.value,
        description:description.value});
        // console.log(tasks);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    showalltasks();
});
form.addEventListener("reset",(e)=>{
    e.preventDefault();
    removetasks();
    tasks.splice(0,tasks.length);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    

})