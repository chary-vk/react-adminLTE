import Layout from "../components/layout/Layout";
import {Link} from "react-router-dom";
const Home =()=>{
        return (
            <>
                <Layout>
                    <h1 className="text-danger">Home</h1>
                   <Link to="/test">Hello</Link>
                    <button className="btn btn-success">Hello</button>    
                </Layout>
            </>
    );
};      

export default Home;