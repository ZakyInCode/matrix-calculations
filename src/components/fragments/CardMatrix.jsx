import SubmitButtton from "../elements/SubmitButtton";
import SettingOrdoComponent from "./SettingOrdoComponent";

const CardMatrix = ({ children }) => {
  return (
    <div className="border border-blue-800 rounded bg-slate-200">
      {children}
    </div>
  );
};

const Header = ({ children }) => {
  return (
    <p className="px-5 text-3xl text-center text-white bg-slate-800">
      {children}
    </p>
  );
};

const SettingOrdo = ({ handleSettingOrdo, row, col, title }) => {
  return (
    <div className="mb-4">
      <SettingOrdoComponent
        handleSettingOrdo={handleSettingOrdo}
        row={row}
        col={col}
        title={title}
      />
    </div>
  );
};

const SetMatrix = ({ handleSetMatrix, title, children }) => {
  return (
    <form onSubmit={handleSetMatrix} className="flex-col">
      {children}
      <SubmitButtton
        label="submit"
        title={title}
        layout="w-full px-3 py-0.5 mt-4"
      />
    </form>
  );
};

CardMatrix.Header = Header;
CardMatrix.SettingOrdo = SettingOrdo;
CardMatrix.SetMatrix = SetMatrix;

export default CardMatrix;
