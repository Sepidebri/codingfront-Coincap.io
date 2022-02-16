import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import SinglePage from "./pages/singlePage";

export function MyRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/crypto/:id" element={<SinglePage/>}/>
                    <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default MyRoutes;