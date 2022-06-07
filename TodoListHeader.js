import { useEffect, useState } from "react";

const Header = ({ undone, checkUndone }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    checkUndone(checked);
  }, [checked]);

  const handlesubmit = () => {
    console.log(window.location.href);
  };

  return (
    <>
      <div className="header">
        <span>You have {undone} tasks left!</span>
        <form onSubmit={handlesubmit} action="withDone">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          Not finished only
        </form>
      </div>
    </>
  );
};

export default Header;
