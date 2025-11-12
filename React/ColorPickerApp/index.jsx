const { useState } = React;

export const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");

  const handleColor = (e) => {
    setColor(e.target.value);
  }

  return (
    <div id="color-picker-container" style={{backgroundColor: color}}>
      <input id="color-input" type="color" value={color} onChange={handleColor}></input>
    </div>
  );
};
