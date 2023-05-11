import { useState } from 'react';

function ToggleSwitch() {
  const [position, setPosition] = useState('right');

  function handleToggle() {
    setPosition(position === 'right' ? 'left' : 'right');
  }

  return (
    <div className="toggle-switch" onClick={handleToggle}>
      <div className={`toggle-switch-handle ${position}`}></div>
    </div>
  );
}
export default ToggleSwitch