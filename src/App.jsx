import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";

const App=()=>{
    return(
        <>
        {/* <h1>This is Header page</h1> */}
        <BrowserRouter>
         <MainLayout/>
        </BrowserRouter>
        </>
    )
}

export default App;