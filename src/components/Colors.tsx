import { useState } from "react";
import { ChromePicker } from "react-color";

interface ColorsPorps {
  handleStates: HandleStates;
  color: Color;
}

export const Colors = ({ handleStates, color }: ColorsPorps) => {
  // Part of code wich generates ChromePicker
  const [isPickerShown, setIsPickerShown] = useState<boolean>(false);

  const picker = isPickerShown && (
    <div className="chrome-color-picker">
      <ChromePicker
        color={color}
        onChange={(color) => {
          handleStates(color.hex);
        }}
      />
    </div>
  );

  // Creating a line with colors
  const colorList = [
    "red",
    "blue",
    "green",
    "yellow",
    "pink",
    "black",
    "white",
    "brown",
    "purple",
    "gray",
    "orange",
  ];

  const colorFiller = colorList.map((color) => {
    return (
      <button
        onClick={() => handleStates(color)}
        key={color}
        className="color"
        style={{ backgroundColor: `${color}` }}
      ></button>
    );
  });

  return (
    <>
      <div className="color-container">
        <button
          className="picker-button"
          onClick={() => {
            setIsPickerShown(!isPickerShown);
          }}
        >
          🎨
        </button>
        {colorFiller}
      </div>
      {picker}
    </>
  );
};
