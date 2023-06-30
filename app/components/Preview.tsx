// app/components/Preview.tsx
import {  Reorder } from 'framer-motion';

type PreviewProps = {
    content: string;
}

const Preview: React.FC<PreviewProps> = ({content}) => {
  
    
  return (
    <Reorder.Item 
        as="div" 
        className="h-300 w-400 bg-shad"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        value={content}
        drag
    >
      <div className="h-298 w-398 text-white text-6xl bg-backg">
        {content}
      </div>
    </Reorder.Item>
  );
};

export default Preview;
