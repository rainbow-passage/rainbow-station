import type { V2_MetaFunction } from "@remix-run/node";
import { motion } from 'framer-motion';
import Sidebar from '~/components/Sidebar';
import Navbar from '~/components/Navbar';

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Rainbow Station CRM" },
    { name: "description", content: "Welcome to Rainbow Station, grab a ticket!" },
  ];
};

export default function Index() {
  return (
    <div className="flex bg-black w-full h-full">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <motion.div
          className="flex flex-wrap p-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Your other components */}
        </motion.div>
      </div>
    </div>
  );
}
