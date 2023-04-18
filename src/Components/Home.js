import React from 'react'

function Home(props) {
    console.log("props",props)
  return (
    <div>
     <h1> Samsung Store </h1>
     <div className='card-wrapper'>
        <div className='img-wrapper item'>
          <img src='https://images.samsung.com/is/image/samsung/p6pim/in/sm-e146bzggins/gallery/in-galaxy-f14-5g-sm-e146bzggins-536008228?$720_576_PNG$'/>
        </div>
        <div className='text-wrapper item'>
          <span>
            Samsung F14
          </span>
          <span>
            Price : 14500.rs
          </span>
        </div>
        <div className='btn-wrapper item'>
          <button onClick={()=>props.addToCartHandler({name:"samsung F14",price:"14500"})}>Add To Cart</button>     
              </div>
     </div>
    </div>
  )
}

export default Home