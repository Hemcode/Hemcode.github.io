const viewProjects = () => {
    ul = document.createElement("ul");

    li1 = document.createElement("li");
    li2 = document.createElement("li");

    body = document.querySelector('body').append(li1);
    body.append(li2);

    li1.innerHTML = "HKIY";
    li1.style.fontSize = "22px";
}