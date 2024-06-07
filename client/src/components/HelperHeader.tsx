import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  CompilerSliceStateType,
  updateCurrentLanguage,
} from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/store";
import { Copy, LoaderCircle, Save, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { handleError } from "@/utils/handleError";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { serverUrl } from "@/utils/Constants";

const HelperHeader = () => {
  const [saveLoading, setSaveLoading] = useState<boolean>(false);
  const [shareBtn, setShareBtn] = useState<boolean>(false);
  const navigate = useNavigate();
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );

  const { urlId } = useParams();
  useEffect(() => {
    if (urlId) {
      setShareBtn(true);
    } else {
      setShareBtn(false);
    }
  }, [urlId]);

  const handleSaveCode = async () => {
    setSaveLoading(true);
    try {
      const response = await axios.post(`${serverUrl}/compiler/save`, {
        fullCode: fullCode,
      });
      navigate(`/compiler/${response.data.url}`, { replace: true });
    } catch (error) {
      handleError(error);
    } finally {
      setSaveLoading(false);
    }
  };
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );

  return (
    <div className="__helper_header h-[50px] bg-black text-white p-2 flex justify-between items-center">
      <div className="__btn_container flex gap-1">
        <Button
          onClick={handleSaveCode}
          className="flex justify-center items-center gap-1"
          variant="success"
          disabled={saveLoading}
        >
          {saveLoading ? (
            <>
              {" "}
              <LoaderCircle className="animate-spin" size={16} /> Saving...
            </>
          ) : (
            <>
              {" "}
              <Save size={20} /> Save
            </>
          )}
        </Button>
        {shareBtn && (
          <Dialog>
            <DialogTrigger
              className="whitespace-nowrap rounded-md text-sm font-medium
            transition-colors focus-visible:outline-none focus-visible:ring-1
            focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary
            text-secondary-foreground shadow-sm hover:bg-secondary/80 h-10 px-4 py-2 flex
            justify-center items-center gap-1"
            >
              {" "}
              <Share2 size={16} />
              Share
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex justify-center items-center text-bold">
                  Share Code
                </DialogTitle>
                <DialogDescription className="flex flex-col gap-2">
                  <div className="__url flex gap-1">
                    <input
                      type="text"
                      disabled
                      className="w-full px-2 py-2 rounded bg-slate-800 text-state-300 select-none"
                      value={window.location.href}
                    />
                    <Button
                      variant="outline"
                      onClick={() => {
                        window.navigator.clipboard.writeText(
                          window.location.href
                        );
                        toast("URL copied to your clipboard!");
                      }}
                    >
                      <Copy size={16} />
                    </Button>
                  </div>

                  <p className="text-center">Share your code with others!</p>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}
      </div>
      <div className="__tab_switcher flex justify-center items-center gap-1">
        <Select
          defaultValue={currentLanguage}
          onValueChange={(value) =>
            dispatch(
              updateCurrentLanguage(
                value as CompilerSliceStateType["currentLanguage"]
              )
            )
          }
        >
          <SelectTrigger className="w-[120px] bg-gray-800 outline-none focus:ring-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="javascript">Javascript</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default HelperHeader;
