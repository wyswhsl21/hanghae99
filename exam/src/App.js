import React from "react";
import "./App.css";
const List = ({ value, setValue }) => {
  return (
    <div className="list-container">
      {value.map((item) => (
        <div className="list-wrapper">
          <div className="todo-container">
            <h1 className="todo-title">{item.content}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};
const Form = ({ value, setValue }) => {
  const [content, setContent] = React.useState("");
  const handleContentChange = (e) => {
    e.preventDefault();
    setContent(e.target.value);
    console.log(content);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setValue([...value, { content }]);
    console.log(value);
  };
  return (
    <form>
      <input
        value={content}
        type="text"
        name="content"
        placeholder="자바스크립트를 배워봅시다"
        onChange={handleContentChange}
      ></input>
      <button onClick={handleFormSubmit}>추가하기</button>
    </form>
  );
};
const Todo = () => {
  return <div className="todo">Todo List</div>;
};
const App = () => {
  const [value, setValue] = React.useState([]);
  return (
    <div>
      <Form value={value} setValue={setValue} />
      <Todo />
      <List value={value} setValue={setValue} />
    </div>
  );
};

export default App;
