function newwifu() {
    for (let i = 0; i < 20; i++){
    let element = document.createElement('img');
    fetch("https://api.waifu.pics/nsfw/waifu")
      .then(res => res.json())
      .then(data => element.src = data["url"])
    element.style.width = "100%";
    document.body.appendChild(element);
  }
  let button = document.createElement("button");
  button.setAttribute("onClick", "newwifu()")
  button.innerText = "gimme"
  document.body.appendChild(button);
}
