import type { V2_MetaFunction } from "@remix-run/node";
import { Reorder } from 'framer-motion';
import Sidebar from '~/components/Sidebar';
import Navbar from '~/components/Navbar';
import { useState } from "react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Task List" },
    { name: "description", content: "Create or accept a task here" },
  ];
};

export default function Index() {
  const [tasks, setTasks] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
  const [focused, setFocused] = useState<number | null>(null);

  return (
    <div className="flex bg-black w-full min-h-full h-screen">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <Reorder.Group
          className="flex-col space-y-1 space-x-4 flex-wrap"
          onReorder={setTasks}
          values={tasks}

        >
          {tasks.map((task, index) => (
            <Reorder.Item
              drag
              key={task}
              value={task}
              onDrag={() => setFocused(index)}
              onDragEnd={() => setFocused(null)}
              className={index === focused ? "bg-cyan-300 rounded-lg cursor-grabbing p-4" : "bg-white rounded-lg cursor-grab p-4"}
            >
              {task}
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
    </div>
  );
}
