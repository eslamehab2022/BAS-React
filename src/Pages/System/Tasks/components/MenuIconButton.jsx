import { MenuPlansIcon } from "../../../../utiltis/Icons";

const MenuIconButton = ({ onClick }) => {
    return (
      <button onClick={onClick} aria-label="toggle" className="p-2">
        <MenuPlansIcon />
      </button>
    );
  };
  export default MenuIconButton;