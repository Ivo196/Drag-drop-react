import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { User } from "./User.jsx";

function App() {
  const [people, setPeople] = useState([
    { name: "john", id: 1 },
    { name: "Peter", id: 2 },
    { name: "Sue", id: 3 },
  ]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    const oldIndex = people.findIndex((person) => person.id === active.id);
    const newIndex = people.findIndex((person) => person.id === over.id);

    const newOrder = arrayMove(people, oldIndex, newIndex);
    setPeople(newOrder);
  };
  return (
    <div className="flex  items-center justify-center ">
      <div className="w-3/6">
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <h1 className="text-2xl font-bold">User List</h1>
          <SortableContext
            items={people}
            strategy={verticalListSortingStrategy}
          >
            {people.map((user) => (
              <User key={user.id} user={user} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}

export default App;
