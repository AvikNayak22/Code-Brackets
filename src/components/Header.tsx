import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Braces } from "lucide-react";
import { setCurrentWidth } from "@/redux/slices/compilerSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleResize = () => {
    dispatch(setCurrentWidth(window.innerWidth));
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <nav className="w-full h-[60px] bg-[#111111] text-white p-3 flex justify-between items-center">
      <Link to="/">
        <h2 className="font-bold text-xl select-none flex flex-row justify-center gap-1">
          <Braces /> Code Brackets
        </h2>
      </Link>
      <ul className="flex gap-2">
        <li>
          <Link to="/compiler">
            <Button className="font-bold text-md" variant="secondary">
              Try out
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
