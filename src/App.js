import { useState } from 'react';
import Rating from "./components/Rating/Rating";
//style
import './App.css';
import './style/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
//assets
import Donut from './img/doughnut.svg';
import Pizza from './img/pizza.svg';
import Cake from './img/cake.svg';
import Kebab from './img/kebab.svg';
import Salmon from './img/salmon.svg';
import Prev from './img/Prev.svg';
import Next from './img/Next.svg';
import Pic1 from './img/pic-1.png';
import Pic2 from './img/pic-2.png';
import Pic3 from './img/pic-3.png';
import Pic4 from './img/pic-4.png';
import Pic5 from './img/pic-5.png';
import Pic6 from './img/pic-6.png';
import Pic7 from './img/pic-7.png';
import Pic8 from './img/pic-8.png';
import menu from './img/menu.svg';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const categories = [
    {
      src: Cake,
      title: "Cupcake",
      items: 22
    },
    {
      src: Pizza,
      title: "Pizza",
      items: 24
    },
    {
      src: Kebab,
      title: "Kebab",
      items: 24
    },
    {
      src: Salmon,
      title: "Salmon",
      items: 22
    },
    {
      src: Donut,
      title: "Doughnut",
      items: 11
    },
    {
      src: Cake,
      title: "Cupcake",
      items: 22
    }
  ]

  const trending = [
    {
      name: "Pizza Paperoni",
      type: "Pizza",
      rate: 4,
      src: Pic1
    },
    {
      name: "Pizza Meat",
      type: "Pizza",
      rate: 3,
      src: Pic2
    },
    {
      name: "Doner Kebab",
      type: "Kebab",
      rate: 5,
      src: Pic3
    },
    {
      name: "Salmon Roll",
      type: "Salmon",
      rate: 4,
      src: Pic4
    },
    {
      name: "Cupcake Choco",
      type: "Cupcake",
      rate: 4,
      src: Pic5
    },
    {
      name: "Doughnut Milk",
      type: "Doughnut",
      rate: 5,
      src: Pic6
    },
    {
      name: "Doughnut Unicorn",
      type: "Doughnut",
      rate: 4,
      src: Pic7
    },
    {
      name: "Khati Kebab",
      type: "Kebab",
      rate: 4,
      src: Pic8
    },
  ]


  function Header() {
    return (
      <div className="header-wrapper">
        <Navbar />
        <Hero />
      </div>
    )
  }

  //categories
  function handleBtnNext() {
    setSelectedItem(selectedItem + 1 === categories.length ? selectedItem : selectedItem + 1);
    const total = 538 + selectedItem * 538;
    const element = document.getElementById("category-wrapper");
    element.scrollTo(total, 0)
  }

  function handleBtnPrev() {
    setSelectedItem(selectedItem !== 0 && selectedItem + 1 <= categories.length ? selectedItem - 1 : selectedItem);
    const total = (selectedItem - 1) * 538;
    const element = document.getElementById("category-wrapper");
    element.scrollTo(total, 0)
  }

  function Category() {
    return (
      <div className="section-container">
        <div className="section-heading">
          Browser Our Category <br /><span id="heading__primary">Receipt</span>
        </div>
        <div className="category-wrapper" id="category-wrapper">
          {
            categories.map((item, i) => {
              return (
                <CategoryItem
                  src={item.src}
                  title={item.title}
                  items={item.items}
                  key={i}
                  onSelect={() => setSelectedItem(i)}
                  active={i === selectedItem ? true : false}
                />
              )
            })
          }
        </div>
        <div className="control-btn-wrapper section-hide">
          <img src={Prev} alt="Previous" onClick={handleBtnPrev} />
          <img src={Next} alt="Next" onClick={handleBtnNext} />
        </div>
      </div>
    )
  }

  function CategoryItem(props) {
    return (
      <div className={props.active ? "category__item active" : "category__item"}
        id={props.title.toLowerCase() === "cupcake" ? "bg1"
          : props.title.toLowerCase() === "pizza" ? "bg2"
            : props.title.toLowerCase() === "kebab" ? "bg3"
              : props.title.toLowerCase() === "salmon" ? "bg4"
                : props.title.toLowerCase() === "doughnut" ? "bg5"
                  : "bg2"}
        onClick={props.onSelect}>
        <img src={props.src} alt="icon" />
        <div className="title">{props.title}</div>
        <div className="sub-title">{props.items} Items</div>
      </div>
    )
  }

  function Trending() {
    return (
      <div className="section-container">
        <div className="section-heading">
          Browser Our Trending <br /><span id="heading__primary">Receipt</span>
        </div>
        <div className="trending-wrapper">
          {
            trending.map((item, i) => {
              return (
                <TrendingCard
                  src={item.src}
                  name={item.name}
                  type={item.type}
                  rating={item.rate}
                  key={item.type + i}
                />
              )
            })
          }
        </div>
        <div className="trending-btn-container">
          <div className="btn-app btn__primary">
            All Receipt
          </div>
        </div>
      </div>
    )
  }

  function TrendingCard(props) {
    return (
      <div className={props.active ? "trending-card active" : "trending-card"}
        id={props.type.toLowerCase() === "cupcake" ? "bg1"
          : props.type.toLowerCase() === "pizza" ? "bg2"
            : props.type.toLowerCase() === "kebab" ? "bg3"
              : props.type.toLowerCase() === "salmon" ? "bg4"
                : props.type.toLowerCase() === "doughnut" ? "bg5"
                  : "bg2"}>
        <img src={props.src} alt="image" id="pic" />
        <h5 id="title">{props.name}
          <span id="sub">{props.type}</span>
        </h5>
        <Rating rating={props.rating} />
      </div>
    )
  }

  function BottomMenu() {
    return (
      <div className="bottom-menu bottom-menu-hide">
        <div className="bottom-menu__nav">
          <img src={menu} alt="icon" />
          Home
        </div>
        <div className="bottom-menu__nav">
          <img src={menu} alt="icon" />
          Promotions
        </div>
        <div className="bottom-menu__nav">
          <img src={menu} alt="icon" />
          Other
        </div>
      </div>

    )
  }

  return (
    <>
      {Header()}
      {Category()}
      {Trending()}
      <Footer />
      {BottomMenu()}
    </>
  );
}

export default App;
