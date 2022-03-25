import Main from './components/MenClothings/Main';
import data from './data';
import data2 from './data2';
import data3 from './data3';
import BannerHero from "./components/BannerSection/Banner";
import Footer from "./components/FooterSection/Footer";
import Category from "./components/CategorySection/Category";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container} from 'react-bootstrap';
import Logo from "./components/casualclosetlogo.png"
import Offcanvas from 'react-bootstrap/Offcanvas'
import Basket from './components/Basket';
import { useState } from 'react';
import Women from './components/WomenClothings/Women';
import Kids from './components/KidsClothing/Kids'



function App() {
  const { products } = data;
  const { fproducts } = data2;
  const { kproducts } = data3
  const [cartItems, setCartItems] = useState([]);
  const countCartItems  = cartItems.length
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
      <div className='app'> 

  <div className='navbar'>
    <Navbar collapseOnSelect expand="lg" bg="white" text="black" fixed="top" className="navbar-bootstrap">
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#home" className="nav-a" id="navBlog">Home</Nav.Link>
      <Nav.Link href="#men" className="nav-a" id="navBlog">Shop Men</Nav.Link>
      <Nav.Link href="#women" className="nav-a" id="navBlog">Shop Women</Nav.Link>
      <Nav.Link href="#kids" className="nav-a" id="navBlog">Shop Kids</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link className="nav-a" onClick={handleShow} id="badge">   
          Cart{' '}
          {countCartItems ? (
            <p className="badge">{countCartItems}</p>
          ) : (
            ''
          )}        
        </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

  <Offcanvas show={show} onHide={handleClose}  placement='end' className="cart-container">
        <Offcanvas.Header closeButton className="cartHeader">
          <Offcanvas.Title className="cartName">CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

    <div>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
  </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
        <BannerHero/>
        <Category/>
        <div id="men">
        <Main products={products} onAdd={onAdd}></Main>
        </div>
        <div id="women">
        <Women products={fproducts} onAdd={onAdd}></Women>
        </div>
        <div id="kids">
        <Kids products={kproducts} onAdd={onAdd} id="kids"></Kids>
        </div>
        <Footer/>
      </div>
 

  );
}

export default App;