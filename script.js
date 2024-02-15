function newElement() {
    var inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        var li = document.createElement("li");
        li.textContent = inputValue;
        document.getElementById("myUL").appendChild(li);
        document.getElementById("myInput").value = "";

        li.addEventListener("click", function() {
            this.classList.toggle("checked");
        });
    }
}
