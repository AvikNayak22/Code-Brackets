import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CompilerSliceStateType {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };

  currentLanguage: "html" | "css" | "javascript";

  currentWidth: number;
}

const initialState: CompilerSliceStateType = {
  fullCode: {
    html: `
    <html lang="en">
      <body>
        <h1 class="bouncing-letters" style="letter-spacing:0.3px;"> 
          <span>G</span> 
          <span>e</span> 
          <span>e</span> 
          <span>k</span> 
          <span>s</span> 
          <span>F</span> 
          <span>o</span> 
          <span>r</span> 
          <span>G</span> 
          <span>e</span> 
          <span>e</span> 
          <span>k</span> 
          <span>s</span> 
        </h1> 
      <script src="script.js"></script>
      </body>
    </html>
        `,
    css: `
      body { 
        background-color: rgba(175, 224, 175, 255); 
      } 

    h1 { 
      font-family: sans-serif; 
      font-size: 50px; 
      text-align: center; 
      color: #318D45; 
      margin-top: 100px; 
    } 

    .bounce { 
      animation-name: bounce; 
    } 

    .bouncing-letters span { 
      animation-timing-function: linear; 
      animation-duration: 1s; 
      animation-iteration-count: 1; 
      display: inline-block; 
    } 

    .bouncing-letters span:hover { 
      color: whitesmoke; 
    } 

    @keyframes bounce { 

      20%, 
      50%, 
      80%, 
      to { 
          transform: scale(1, 1); 
      } 

      40% { 
          transform: scale(1.75, 0.65); 
      } 

      45% { 
          transform: scale(1.75, 0.65); 
      } 

      70% { 
          transform: scale(1.25, 0.75); 
      } 

      90% { 
          transform: scale(1.15, 0.85); 
      } 
    }  
      `,
    javascript: `
    document.querySelectorAll(".bouncing-letters>span") 
    .forEach((element) => { 
      element.addEventListener("mouseover",(e) => bounce(e.target)); 
    }); 

    function bounce(letter) { 
        if (!letter.classList.contains("bounce")) { 
            letter.classList.add("bounce"); 
            setTimeout( 
                function () { 
                    letter.classList.remove("bounce"); 
                }, 
                1000 
            ); 
        } 
    } 
    `,
  },
  currentLanguage: "html",
  currentWidth: window.innerWidth,
};

const compilerSlice = createSlice({
  name: "compilerSlice",
  initialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<CompilerSliceStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },
    updateCodeValue: (state, action: PayloadAction<string>) => {
      state.fullCode[state.currentLanguage] = action.payload;
    },
    updateFullCode: (
      state,
      action: PayloadAction<CompilerSliceStateType["fullCode"]>
    ) => {
      state.fullCode = action.payload;
    },
    setCurrentWidth: (state, action: PayloadAction<number>) => {
      state.currentWidth = action.payload;
    },
  },
});

export default compilerSlice.reducer;
export const {
  updateCurrentLanguage,
  updateCodeValue,
  updateFullCode,
  setCurrentWidth,
} = compilerSlice.actions;
