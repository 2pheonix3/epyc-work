import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Image5 from './image5';

const DragAndDrop = ({ arr, setarr }) => {
  const handleOnDragEnd = (result) => {
    if (!result.destination) return; // If dropped outside

    const items = Array.from(arr);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setarr(items); // Update the state in the parent
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {arr.map((item, index) => (
              <Draggable key={index} draggableId={String(index)} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className="flex justify-between items-center border p-2 my-2"
                  >
                    {/* Drag handle using Image5 */}
                    <div {...provided.dragHandleProps}>
                      <Image5 />
                    </div>
                    <div>{item}</div>
                    <button onClick={() => console.log(`Remove ${item}`)}>Remove</button>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragAndDrop;
