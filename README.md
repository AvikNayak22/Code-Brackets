# Code Brackets

Code Brackets is a web-based code editor application that provides a seamless environment for writing and previewing HTML, CSS, and JavaScript code snippets.

## Screenshots
1. Home page:
   
   ![image](https://github.com/AvikNayak22/Code-Brackets/assets/110925067/43d7a7a9-645a-47e8-95c0-b7eb9d344e29)

2. Compiler page:
   
   ![image](https://github.com/AvikNayak22/Code-Brackets/assets/110925067/9a04130a-f833-48d3-8252-96f0840685fe)



## Features

1. **Code Editing**: Supports editing and syntax highlighting for HTML, CSS, and JavaScript within a single interface.
   
2. **Live Preview**: Real-time preview of code changes rendered in an embedded iframe.

3. **Save and Share**: Users can save and share their code snippets via unique URLs.

5. **Responsive Design**: Easily adapts to different screen sizes and orientations.

## Technologies Used

- **Frontend**: React, React Router, Redux Toolkit, Tailwind CSS, Shadcn UI 
  
- **Backend**: PocketBase for managing and storing code snippets.
  
- **Other Libraries**: CodeMirror, Axios, Lucide icons

## Installation

1. Clone the repository:
   
   ```
    git clone https://github.com/AvikNayak22/Code-Brackets.git
   ```
2. Change into the project directory: 
   ```
   cd Code-Brackets
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory of the project with the following content:
   ```
   VITE_POCKETBASE_URL=your-pocketbase-url
   ```
5. Start the development server:
   ```
   npm run dev
   ```

## Contributors
- Avik Nayak (@AvikNayak22)
