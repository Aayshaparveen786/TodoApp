/* eslint-disable react/prop-types */
import { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";

const TodoItem = (props) => {
  const { item, removeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  return (
    <li key={item.id} className="card">
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        // onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <AiFillEdit onClick={() => changeFocus()} />
        {item.completed === false && <IoCheckmarkDoneSharp />}

        <IoClose onClick={() => removeTodo(item.id)} />
      </div>
      {item.completed && <span className="completed">done</span>}
    </li>
  );
};

export default TodoItem;
