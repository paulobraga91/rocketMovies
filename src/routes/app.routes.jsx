import { Routes , Route } from "react-router-dom";

import { Create } from "../pages/Create"
import { Preview } from "../pages/Preview"
import { Profile } from "../pages/Profile"
import { Home } from "../pages/Home"


export function AppRoutes(){
    return(
    <Routes>

        <Route path="/" element={<Home />}/>
        
        <Route path="/create" element={<Create />}/>
        
        <Route path="/preview/:id" element={<Preview />}/>
        
        <Route path="/profile" element={<Profile />}/>


    </Routes>
    )
}