import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Navbar,
  Nav,
  Modal,
  ListGroup,
  Spinner
} from 'react-bootstrap';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch products:', err);
        setLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div>
      <Navbar expand="lg" className="custom-navbar">
        <Container fluid>
          <Navbar.Brand href="#" className="navbar-brand-text ps-3">
            My E-Commerce
          </Navbar.Brand>
          <Nav className="ms-auto pe-3">
            <Nav.Link href="#" onClick={() => setShowModal(true)} className="position-relative">
              <img
                src="https://cdn-icons-png.flaticon.com/512/126/126515.png" // White Cart Icon
                alt="cart"
                width="24"
                height="24"
              />
              {cart.length > 0 && (
                <Badge bg="danger" pill className="cart-badge">
                  {cart.length}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container fluid className="mt-4 px-4">
        {loading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
            <Spinner animation="border" variant="primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <Row className="g-4">
            {products.map(product => (
              <Col md={4} lg={3} key={product.id}>
                <Card className="product-card">
                  <div className="image-container">
                    <Card.Img
                      variant="top"
                      src={product.image}
                      className="product-image"
                      onError={(e) => (e.target.style.display = 'none')}
                    />
                  </div>
                  <Card.Body className="product-details">
                    <Card.Title className="product-title">{product.title}</Card.Title>
                    <Card.Text className="product-price">${product.price}</Card.Text>
                    <div className="d-grid">
                      <Button variant="primary" size="sm" onClick={() => addToCart(product)}>Add to Cart</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>

      {/* Cart Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ListGroup>
              {cart.map(item => (
                <ListGroup.Item className="d-flex justify-content-between align-items-center" key={item.id}>
                  <div>
                    {item.title} - ${item.price}
                  </div>
                  <Button size="sm" variant="danger" onClick={() => removeFromCart(item.id)}>&times;</Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Modal.Body>
        <Modal.Footer>
          <h5>Total: ${total}</h5>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
