import type { V2_MetaFunction } from "@remix-run/node";
import { Reorder } from 'framer-motion';
import Sidebar from '~/components/Sidebar';
import Navbar from '~/components/Navbar';
import Preview from "~/components/Preview";
import React from "react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Rainbow Station CRM" },
    { name: "description", content: "Welcome to Rainbow Station, grab a ticket!" },
  ];
};

export default function Index() {
  const [items, setItems] = React.useState(['1', '2', '3', '4', '5', '6', '7', '8', '9']);

  return (
    <div className="flex bg-black w-full min-h-full h-screen">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <Reorder.Group
          as="div"
          className="flex space-y-4 space-x-4 flex-wrap"
          onReorder={setItems}
          values={items}
        >
          {items.map((item) => (
            <Preview key={item} content={item} />
          ))}
        </Reorder.Group>
      </div>
    </div>
  );
}
