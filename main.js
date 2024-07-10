let form = document.querySelector("form");
let input = document.querySelector(".input");
let text__box = document.querySelector(".text");

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let value = input.value.trim();
    
    if (!value) {
        alert("Please enter text.");
        return;
    }
    
    let newText = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";

    let span = document.createElement("span");
    span.className = "task-text";
    span.textContent = value;

    let buttons = document.createElement("div");
    buttons.className = "buttons";

    let editeBtn = document.createElement("button");
    editeBtn.className = "edite";
    editeBtn.textContent = "📝";

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.textContent = "❌";

    buttons.append(editeBtn, deleteBtn);
    newText.append(checkbox, span, buttons);
    
    text__box.appendChild(newText);

    input.value = "";

    deleteBtn.addEventListener("click", () => {
        newText.remove();
    });

    editeBtn.addEventListener("click", () => {
        let newTextValue = prompt("Enter new text:", span.textContent);
        if (newTextValue !== null && newTextValue.trim() !== "") {
            span.textContent = newTextValue.trim();
        }
    });

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            span.classList.add("completed");
        } else {
            span.classList.remove("completed");
        }
    });
});
