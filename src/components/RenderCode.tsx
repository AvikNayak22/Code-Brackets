import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const RenderCode = () => {
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );
  const combinedCode = `<html><style>${fullCode.css}</style><body>${fullCode.html}</body><script>${fullCode.javascript}</script></html>`;

  const iframeCode = `data:text/html;charset=utf-8,${encodeURIComponent(
    combinedCode
  )}`;

  return (
    <div className="mt-2 md:mt-0 bg-white h-[calc(100vh-60px)]">
      <iframe className="w-full h-full" src={iframeCode} />
    </div>
  );
};

export default RenderCode;
