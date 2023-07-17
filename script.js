const listElement = document.getElementById("list");
console.log(listElement);
const btn = document.getElementById("btn");
const inputName = document.getElementById("input-name");
const inputComent = document.getElementById("input-coment");

btn.addEventListener("click", () => {
  // валидация имени и комментарий
  inputName.classList.remove("error");
  if (inputName.value === "") {
    inputName.classList.add("error");
  }
  inputComent.classList.remove("error");
  if (inputComent.value === "") {
    inputComent.classList.add("error");
    return;
  }

  const oldListHtml = listElement.innerHTML;
  listElement.innerHTML =
    oldListHtml +
    ` <li class="comment">
<div class="comment-header">
  <div>${inputName.value}</div>
  <div>${
    new Date().toLocaleDateString().slice(0, 6) +
    new Date().toLocaleDateString().slice(8, 10) +
    " " +
    new Date().toLocaleTimeString().slice(0, -3)
  }</div>
</div>
<div class="comment-body">
  <div class="comment-text">
    ${inputComent.value}
  </div>
</div>
<div class="comment-footer">
  <div class="likes">
    <span class="likes-counter">0</span>
    <button class="like-button"></button>
  </div>
</div>
</li>`;

// Очистка полей ввода
  inputName.value = "";
  inputComent.value = "";
});
