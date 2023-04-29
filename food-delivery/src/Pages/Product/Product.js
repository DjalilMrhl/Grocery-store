import "./Product.scss";
import React, { useContext, useState, useEffect} from "react";
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { TiStarFullOutline } from 'react-icons/ti'
import ReactStars from "react-rating-stars-component";
import { BiShow } from "react-icons/bi";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { addToCart } from '../../Redux/Slices/cartSlice'
import { useGetAllProductsQuery, useGetProductQuery } from '../../Redux/API/ProductsAPI'
import { Color } from "../../Context/context";


function Product() {

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  const reviews = localStorage.getItem('reviews')?JSON.parse(localStorage.getItem('reviews')): [ { id: 1, name: 'John Marston', date: '29-3-2023', review: `harum in. Laborum ratione, voluptas a accusamus sapiente reprehenderit pariatur sit! Magni facilis incidunt eaque vero! Quasi`, rating: 4 }, { id: 2, name: 'Adam Smith', date: '01-5-2023', review: `maiores provident voluptates quam dolorem accusantium itaque fugit blanditiis modi perspiciatis officia commodi totam adipisci`, rating: 5 }, { id: 3, name: 'John Doe', date: '02-4-2023', review: `nderit, cum nihil dolor aperiam accusamus eos ea voluptatibus. Repellat, repudiandae!Eius veritatis accusamus iusto ducimus harum in. Laborum ratione, voluptas a accusamus sapiente reprehenderit pariatur sit! Magni facilis incidunt eaque vero! Quasi repatione`, rating: 1 }, { id: 4, name: 'Marshall', date: '02-5-2023', review: `itaque fugit blanditiis modi perspiciatis officia commodi totam adipisci optio magni exercitationem voluptatibus natus. Earum?epudiandae!Eius veritatis accusamus iusto ducimus harum in. Laborum ratione`, rating: 4 }, { id: 5, name: 'Harry Potter', date: '12-4-2023', review: `ui, voluptatem deleniti temporibus hic? Adipisci nobis temporibus ducimus, minus doloribus provident, rem modi consequuntur est architecto aspernatur magni.Alias, distinctio molestias eligen`, rating: 3},{ id: 6, name: 'Jack daniel', date: '12-4-2023', review: `llat, repudiandae!Eius veritatis accusamus iusto ducimus harum in. Laborum ratione, voluptas a accusamus sapiente reprehenderit pariatur sit! Magni facilis incidunt eaque vero! Quasi repellendus alias dicta`, rating: 5}]
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 2000, min: 900 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 900, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 600, min: 400 },
      items: 2
    },
    smallMobile: {
      breakpoint: { max: 400, min: 0 },
      items: 1
    }
  };

  useEffect(() => {
    window.scrollTo(0,0)
    setActive(1)
  }, [])
  

  const {id} = useParams()
  const [Show, setShow] = useState(false);
  const [active, setActive] = useState(true)
  const [newReview, setNewReview] = useState({
    id: reviews.length+1,
    name: '',
    email: '',
    review: '',
    date: currentDate,
    rating: 0,
  })
  const ratingChanged = (newRating) => {
    setNewReview(prev=> {
      return {...prev, rating: newRating}
    });
  };
  
  const dispatch = useDispatch()

  const {data = {}} = useGetAllProductsQuery()
  const {data: products = []} = data
  const {data: productData = {}} = useGetProductQuery(id)
  const {data: product = {}} = productData
  console.log("🚀 ~ file: Product?.js:71 ~ Product ~ product:", product)
  const category = products.filter(item=> item.attributes?.category === product?.attributes?.category)
  
  const handleChange = (e)=> {
    setNewReview(prev=> {
      return {...prev, [e.target.name]: e.target.value}
    })
  }
  const handleSubmit = (e)=> {
    if(newReview.rating !==0) {
      reviews.unshift(newReview)
      localStorage.setItem('reviews', JSON.stringify(reviews))
    } else {
      e.preventDefault()
    }
  }
  
  const handleClick1 = ()=> {
    setShow(false)
    setActive(1)
  }
  const handleClick2 = ()=> {
    setShow(true)
    setActive(2)
  }

  const navigate = useNavigate()
  const {setActive: setActiveL} = useContext(Color)
  const handleAddToCart = () => {
    dispatch(addToCart(product))
    setActiveL(1)
    navigate('/cart')
  }
  const handleBuyNow = () => {
    dispatch(addToCart(product))
    setActiveL(2)
    navigate('/cart/shipping')
    window.scrollTo(0,250)
  }

  return (
    <section className="product" id="product">
      <button onClick={()=> navigate('/')}>&#8592; Go Back</button>
      <div className="product--container">
        <div className="product--content">
          <img src={`http://localhost:1337${product?.attributes?.image?.data?.attributes?.formats?.small?.url}`} alt="" />
          <div className="details">
            <h2>{product?.attributes?.title}</h2>
            <p>$ {product?.attributes?.price}</p>
            <div className="cta">
              <button onClick={handleAddToCart}>Add to cart</button>
              <button onClick={handleBuyNow}>Buy now</button>
            </div>
          </div>
        </div>
        <div className="product--desc">
          <div className="titles">
            <button className={active===1?'color': undefined} onClick={handleClick1}>Description</button>
            <button className={active===2?'color': undefined} onClick={handleClick2}>Reviews</button>
          </div>
          {!Show ? (
            <p>{product?.attributes?.description}</p>
          ) : (
            <div className="review-section">
              <form onSubmit={handleSubmit}>
                  <input name="name" type="text" placeholder="Name . . ."  onChange={handleChange} required/>
                  <input name="email" type="email" placeholder="Email . . ."  onChange={handleChange} required/>
                  <textarea name="review" placeholder="Your review . . ." cols="30" rows="10" minLength={10} maxLength={100} style={{ resize: 'none' }} onChange={handleChange} required></textarea>
                  <div className="rating">
                    <ReactStars onChange={ratingChanged} count={5} size={24} activeColor="#ffd700"/>
                  </div>
                  <button>Submit</button>
                </form>
                <div className="reviews">
                    <h3>People reviews</h3>
                    <div className="list">
                      {reviews.map(item => <div className="review" key={item.id}>
                        <h5>{item.name}</h5>
                        <span>{item.date}</span>
                        <span className="stars">{item.rating === 1?<TiStarFullOutline/>:item.rating === 2?<><TiStarFullOutline /><TiStarFullOutline /></>:item.rating === 3?<><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /></>:item.rating === 4?<><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /></>:item.rating === 5?<><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /></>:null}</span>
                        <p>{item.review}</p>
                      </div>)}
                    </div>
                  </div>
            </div>
          )}
            <div className="realted-products">
              <h2>Related Products</h2>
              <Carousel responsive={responsive} autoPlay={true}>
              {category.map(item =>
                <div className="product" key={item.id}>
                    <img src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.small?.url}`} alt="" onClick={()=>{window.scrollTo(0,0)
                    navigate(`/products/${item.id}`)}}/>
                    <h5>{item.attributes?.title}</h5>
                    <span>$ {item.attributes?.price}</span>
                    <p>{item.attributes?.description}</p>
                    <p>{item.attributes?.category}</p>
                    <BiShow className="icon" onClick={()=>{
                      window.scrollTo(0,0)
                       navigate(`/products/${item.id}`)}}/>
                </div>)}
              </Carousel>
            </div>
            <div className="realted-products">
              <h2>Explore more</h2>
              <Carousel responsive={responsive} autoPlay={true}>
              {products.map(item =>
                <div className="product" key={item.id}>
                    <img src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.small?.url}`} alt="" onClick={()=>{ window.scrollTo(0,0)
                       navigate(`/products/${item.id}`)}}/>
                    <h5>{item.attributes?.title}</h5>
                    <span>$ {item.attributes?.price}</span>
                    <p>{item.attributes?.description}</p>
                    <p>{item.attributes?.category}</p>
                    <BiShow className="icon" onClick={()=>{
                      window.scrollTo(0,0)
                       navigate(`/products/${item.id}`)}}/>
                </div>)}
              </Carousel>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
