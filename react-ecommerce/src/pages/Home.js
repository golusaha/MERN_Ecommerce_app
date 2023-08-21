import NavBar from "../features/navbar/Navbar";
import ProductList from '../features/product/componens/ProductList'

function Home() {
    return (
        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
        </div>
    );
}

export default Home;