import './App.css'
import Home from './Components/Home/Home.jsx';

function App() {
  let fbPosts = [
    {
      img: 'https://modernelectronics.pk/cdn/shop/files/Vivo-Y19s-Pearl-Silver-1.png?v=1744108869',
      caption: 'MOBILE VIVO',
    },
    {
      img: 'https://modernelectronics.pk/cdn/shop/files/Vivo-Y19s-Pearl-Silver-1.png?v=1744108869',
      caption: 'MOBILE NOKIA',
    },
    {
      img: 'https://modernelectronics.pk/cdn/shop/files/Vivo-Y19s-Pearl-Silver-1.png?v=1744108869',
      caption: 'MOBILE REDMI',
    },
  ];

  return (
    <>
      <Home p1i={fbPosts[0].img} p1c={fbPosts[0].caption} />
      <Home p2i={fbPosts[1].img} p2c={fbPosts[1].caption} />
      <Home p3i={fbPosts[2].img} p3c={fbPosts[2].caption} />
    </> 
  );
}

export default App;