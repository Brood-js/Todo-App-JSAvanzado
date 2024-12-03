"use client";

import { useState } from "react";
import Button from "../button/Button";
import { MdEdit } from "react-icons/md";
import { Form } from "../form/Form";
import { Input } from "../input/Input";
import { todoProps } from "@/types";
import * as actions from "@/actions";

const EditTodo = ({ todo }: { todo: todoProps }) => {
  const [editTodoState, setEditTodoState] = useState(false);
  const handleEdit = () => {
    if (todo.isCompleted) {
      return;
    }
    setEditTodoState(!editTodoState);
  };

  const handleSubmit = () => {
    setEditTodoState(false);
  };

  return (
    <div className="flex gap-5 items-center">
      <Button onClick={handleEdit} text={<MdEdit />} actionButton />
      {editTodoState ? (
        <Form action={actions.EditTodo} onSubmit={handleSubmit}>
          <Input name="inputId" value={todo.id} type="hidden"></Input>
          <div className="flex gap-4 justify-center items-center">
            <Input
              name="newTittle"
              placeholder="Editar la Tarea..."
              type="text"
            ></Input>
            <Button type="submit" text="Guardar" bgColor="bg-blue-600"></Button>
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodo;