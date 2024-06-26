import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CodeEditor from "@/components/CodeEditor";
import HelperHeader from "@/components/HelperHeader";
import RenderCode from "@/components/RenderCode";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { handleError } from "@/utils/handleError";
import { useDispatch, useSelector } from "react-redux";
import { updateFullCode } from "@/redux/slices/compilerSlice";
import { toast } from "sonner";
import { RootState } from "@/redux/store";
import { pb } from "@/utils/pocketbase";

const Compiler = () => {
  const windowWidth = useSelector(
    (state: RootState) => state.compilerSlice.currentWidth
  );
  const { urlId } = useParams();
  const dispatch = useDispatch();

  const loadCode = async () => {
    try {
      pb.autoCancellation(false);
      if (urlId) {
        const existingCode = await pb.collection("Codes").getOne(urlId);
        dispatch(updateFullCode(existingCode.fullCode));
      }
    } catch (error) {
      toast("Invalid URL, Default Code Loaded");
      handleError(Error);
    }
  };

  useEffect(() => {
    loadCode();
  }, [urlId]);

  return (
    <ResizablePanelGroup
      direction={windowWidth > 768 ? "horizontal" : "vertical"}
      className="!h-[calc(100vh-60px)]"
    >
      <ResizablePanel
        className={`${windowWidth > 768 ? "h-[600px]" : "h-[500px]"}`}
        defaultSize={50}
      >
        <HelperHeader />
        <CodeEditor />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        className="h-[calc(100vh-60px)] min-w-[350px]"
        defaultSize={50}
      >
        <RenderCode />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Compiler;
