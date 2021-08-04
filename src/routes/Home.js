import React, { useState } from "react";
import { connect } from "react-redux";

import { add } from "../store";

import ToDo from "../components/ToDo";

const Home = ({ toDos, addToDo }) => {
  const [text, setText] = useState("");
  const onChange = (event) => setText(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    addToDo(text);
    setText("");
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => ({ toDos: state });

const mapDispatchToProps = (dispatch) => ({
  addToDo: (text) => dispatch(add(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
