const button = document.getElementById('btn');
button.addEventListener('click', function () {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
    console.log("You clicked the button");
});

    const addButton = document.getElementById('addFruitBtn');
    const fruitInput = document.getElementById('fruitInput');
    const fruitList = document.getElementById('fruitList');

    addButton.addEventListener('click', function () {
      const fruitName = fruitInput.value.trim();

      if (fruitName !== "") {
        const newItem = document.createElement('li');
        newItem.textContent = fruitName;
        fruitList.appendChild(newItem);
        fruitInput.value = "";
      } else {
        alert("Please enter a fruit name!");
      }
    });