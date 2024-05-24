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
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateFullCode } from "@/redux/slices/compilerSlice";
import { toast } from "sonner";
import { serverUrl } from "@/utils/Constants";
import { RootState } from "@/redux/store";

const Compiler = () => {
  const { urlId } = useParams();
  const windowWidth = useSelector(
    (state: RootState) => state.compilerSlice.currentWidth
  );
  const dispatch = useDispatch();

  const loadCode = async () => {
    try {
      const response = await axios.post(`${serverUrl}/compiler/load`, {
        urlId: urlId,
      });
      dispatch(updateFullCode(response.data.fullCode));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error?.response?.status === 500) {
          toast("Invalid URL, Default Code Loaded");
        }
      }
      handleError(error);
    }
  };

  useEffect(() => {
    if (urlId) {
      loadCode();
    }
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
