import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateCodeValue } from "@/redux/slices/compilerSlice";

import CodeMirror from "@uiw/react-codemirror";
import { tags as t } from "@lezer/highlight";
import { sublimeInit } from "@uiw/codemirror-theme-sublime";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";

const CodeEditor = () => {
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );
  const dispatch = useDispatch();

  const onChange = useCallback((value: string) => {
    dispatch(updateCodeValue(value));
  }, []);

  return (
    <CodeMirror
      value={fullCode[currentLanguage]}
      height="calc(100vh - 60px - 50px)"
      className="code-editor"
      extensions={[loadLanguage(currentLanguage)!]}
      onChange={onChange}
      theme={sublimeInit({
        settings: {
          caret: "#c6c6c6",
          fontFamily: "monospace",
        },
        styles: [{ tag: t.comment, color: "#6272a4" }],
      })}
    />
  );
};

export default CodeEditor;
