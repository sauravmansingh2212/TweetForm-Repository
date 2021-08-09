const twitter=document.querySelector("#tweeter")
const basket=document.querySelector("#container")
twitter.addEventListener("submit",function(e){
    const name=twitter.Elements.username.value;
    const password=twitter.Elements.password.value;
    const li=document.createElement(li);
    const bTag=document.createElement(b);
    bTag.append(name);
    li.append(bTag);
    li.append(`-${password}`);
    basket.append(li);
    e.preventDefault();
})
basket.addEventListener("click",function(e){
    e.target.remove();
})