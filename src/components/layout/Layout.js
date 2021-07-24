import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout=({children})=>{
    return(
    <>
        <div className="wrapper">
            <Navbar/>
            <Sidebar/>
            <div className="content-wrapper">
                <div>
                    {children}
                </div>   
            </div>
            <Footer/>
        </div>
    </>
);
}

export default Layout;