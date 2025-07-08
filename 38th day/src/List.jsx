function List() {
  const fruit = ["apple", "orange", "banana","coconut","grapes"];

  const listItems = fruit
    .filter(fruit => fruit.includes("a"))
    .map((fruit, index) => <li key={index}>{fruit}</li>);

  return <ul>{listItems}</ul>;
}

export default List;
