import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Braces } from "lucide-react";

const Header = () => {
  return (
    <nav className="w-full h-[60px] bg-[#111111] text-white p-3 flex justify-between items-center">
      <Link to="/">
        <h2 className="font-bold select-none flex flex-row gap-1">
          <Braces /> Code Brackets
        </h2>
      </Link>
      <ul className="flex gap-2">
        <li>
          <Link to="/compiler">
            <Button variant="secondary">Try out</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
