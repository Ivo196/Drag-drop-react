import { useSortable } from "@dnd-kit/sortable"; //Es para que se pueda ordenar
import { CSS } from "@dnd-kit/utilities";
export function User({ user }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: user.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="bg-white rounded-lg p-4 shadow-md text-black my-2"
    >
      <h1>{user.name}</h1>
    </div>
  );
}

export default User;
