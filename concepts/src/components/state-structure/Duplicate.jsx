import { useState } from 'react';
import PropTypes from 'prop-types';

const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

export default function Menu({items}) {
    // Avoid deeply nested state objects as well. use flat state structure
  // const [items, setItems] = useState(initialItems);

  // this state stores one of the same value which is already stored in the items array. Instead you can store the selectedId
 // const [selectedItem, setSelectedItem] = useState(items[0]);
 const [selectedId, setSelectedId] = useState(0);

  return (
    <>
      <h2>What&apos;s your travel snack?</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.title}
            {' '}
            <button onClick={() => {
              setSelectedId(item.id);
            }}>Choose</button>
          </li>
        ))}
      </ul>
      <p>You picked {items[selectedId].title}.</p>
    </>
  );
}

Menu.defaultProps = {
    items: initialItems
};
Menu.propTypes = {  
    items: PropTypes.array
};