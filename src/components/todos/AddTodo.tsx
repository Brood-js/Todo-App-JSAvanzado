import * as actions from "@/actions";
import Button from "../button/Button";
import { Form } from "../form/Form";
import { Input } from "../input/Input";

const AddTodo = () => {
  return (
    <div>
      <Form action={actions.createTodo}>
        <div className="flex gap-4 items-center">
          <Input
            name="input"
            type="text"
            placeholder="Agrega aqui tus pendientes..."
          />
          <Button type="submit" text="Añadir" bgColor="bg-blue-600" />
        </div>
      </Form>
    </div>
  );
};

export default AddTodo;
