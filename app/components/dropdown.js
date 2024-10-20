import { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select an option');

  const options = ['github', 'Youtube', 'Linkedin','Facebook'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div  className="border border-[#633CFF] text-[#633CFF] rounded-md " >
      <button className="px-96 py-3 max-w-screen-xl"onClick={toggleDropdown} style={{ width:'100%' , height:'100%' , cursor: 'pointer' }}>
        {selectedOption}
      </button>
      {isOpen && (
        <ul style={{
          position: 'absolute',
          backgroundColor: 'white',
          border: '1px solid #ccc',
          margin: '0',
          padding: '0',
          listStyleType: 'none',
          width: '100%',
          zIndex: 1
        }}>
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionClick(option)} style={{
              padding: '10px',
              cursor: 'pointer',
              '&:hover': { backgroundColor: '#f0f0f0' }
            }}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
