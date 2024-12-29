import React from 'react'
import "./Banner.css"
import img4 from '../../assets/logo4.png'
import img5 from '../../assets/logo5.png'
import img6 from '../../assets/logo6.png'
import img7 from '../../assets/logo7.png'
import img8 from '../../assets/logo8.png'
import img9 from '../../assets/logo9.png'
import img10 from '../../assets/logo10.png'
import stars from '../../assets/stars1.png'
import starss from '../../assets/stars2.png'
import image from '../../assets/image.png'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.png'
import group1 from '../../assets/Group1.png'
import group2 from '../../assets/Group2.png'
import group3 from '../../assets/Group3.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import event1 from '../../assets/event1.png'
import event2 from '../../assets/event2.png'
import event3 from '../../assets/event3.png'
import event4 from '../../assets/event4.png'

function Banner() {
  return (
    <div>
      <div className="banner__all container case">
        {/* first */}
        <div className="banner">
          <div className="banner__first">
            <img className='bannerFirst__logo' src={img4} alt="" />
            <h1 className=" bannerFirst__title">The Basics Of Healthy Food</h1>
            <p className="bannerFirst__text">In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint ea aliquip aliquip consectetur <br /> voluptate est. Eu minim dolore laboris enim mollit voluptate irure esse aliquip.</p>
            <img className='bannerFirst__img' src={img5} alt="" />
        </div>
        </div>
        {/* second */}
        <div className="banner__second">
            <img className='bannerSecond__img' src={img6} alt="" />
            <div className="bannerSecond__divs">
                <div className="bannerSecond__div1">
                  <h3 className="bannerSecond__title1">Pick meals</h3>
                  <hr className='banner__hr1' />
                  <p className="bannerSecond__text1">Choose your meals from our <br /> diverse weekly menu. Find gluten <br /> or dairy free, low carb & veggie <br /> options.</p>
                </div>
                <div className="bannerSecond__div">
                  <h3 className="bannerSecond__title">Choose how often</h3>
                  <hr className='banner__hr' />
                  <p className="bannerSecond__text">Our team of chefs do the prep work <br /> - no more chopping, measuring, or <br /> sink full of dishes!</p>
                </div>
                <div className="bannerSecond__div">
                  <h3 className="bannerSecond__title">Fast Deliveries</h3>
                  <hr className='banner__hr' />
                  <p className="bannerSecond__text">Your freshly prepped 15-min dinner <br /> kits arrive on your doorstep in a <br /> refrigerated box.</p>
                </div>
                <div className="bannerSecond__div">
                  <h3 className="bannerSecond__title">Tasty Meals</h3>
                  <hr className='banner__hr' />
                  <p className="bannerSecond__text">Gobble makes cooking fast, so you <br /> have more time to unwind and be <br /> with family.</p>
                </div>
            </div>
        </div>
        {/* third */}
        <div className="banner__third">
          <img className='third__img' src={img7} alt="" />
          <div className="banner__blyuda">
          <div className="blyudalar">
              {/* blyudo 1 */}
            <div className="blyudo">
              <img src={image} alt="" />
              <h3 className="blyudo-title">Featured Meal</h3>
              <p className="blyudoFirst__text">Served with french fries + drink</p>
              <p className="blyudoSecond__text">Choice of: Coke, Fanta, Sprite, Upgrade to large <br /> fries, Add whopper patty, Add Tender crisp patty <br /> and more...</p>
              <div className="stars">
                <img src={stars} alt="" />
                <button className="blyudo__btn">ORDER</button>
              </div>
            </div>
            {/* blyudo 1 */}
            
            {/* blyudo 1 */}
            <div className="blyudo">
              <img src={image1} alt="" />
              <h3 className="blyudo-title">Featured Meal</h3>
              <p className="blyudoFirst__text">Served with french fries + drink</p>
              <p className="blyudoSecond__text">Choice of: Coke, Fanta, Sprite, Upgrade to large <br /> fries, Add whopper patty, Add Tender crisp patty <br /> and more...</p>
              <div className="stars">
                <img src={starss} alt="" />
                <button className="blyudo__btn">ORDER</button>
              </div>
            </div>
            {/* blyudo 1 */}
            {/* blyudo 1 */}
            <div className="blyudo">
              <img src={image2} alt="" />
              <h3 className="blyudo-title">Featured Meal</h3>
              <p className="blyudoFirst__text">Served with french fries + drink</p>
              <p className="blyudoSecond__text">Choice of: Coke, Fanta, Sprite, Upgrade to large <br /> fries, Add whopper patty, Add Tender crisp patty <br /> and more...</p>
              <div className="stars">
                <img src={starss} alt="" />
                <button className="blyudo__btn">ORDER</button>
              </div>
            </div>
            {/* blyudo 1 */}
            </div>

              <div className="blyudalar">
              {/* blyudo 1 */}
            <div className="blyudo">
              <img src={image3} alt="" />
              <h3 className="blyudo-title">Featured Meal</h3>
              <p className="blyudoFirst__text">Served with french fries + drink</p>
              <p className="blyudoSecond__text">Choice of: Coke, Fanta, Sprite, Upgrade to large <br /> fries, Add whopper patty, Add Tender crisp patty <br /> and more...</p>
              <div className="stars">
                <img src={starss} alt="" />
                <button className="blyudo__btn">ORDER</button>
              </div>
            </div>
            {/* blyudo 1 */}
            
            {/* blyudo 1 */}
            <div className="blyudo">
              <img src={image4} alt="" />
              <h3 className="blyudo-title">Featured Meal</h3>
              <p className="blyudoFirst__text">Served with french fries + drink</p>
              <p className="blyudoSecond__text">Choice of: Coke, Fanta, Sprite, Upgrade to large <br /> fries, Add whopper patty, Add Tender crisp patty <br /> and more...</p>
              <div className="stars">
                <img src={starss} alt="" />
                <button className="blyudo__btn">ORDER</button>
              </div>
            </div>
            {/* blyudo 1 */}
            {/* blyudo 1 */}
            <div className="blyudo">
              <img src={image5} alt="" />
              <h3 className="blyudo-title">Featured Meal</h3>
              <p className="blyudoFirst__text">Served with french fries + drink</p>
              <p className="blyudoSecond__text">Choice of: Coke, Fanta, Sprite, Upgrade to large <br /> fries, Add whopper patty, Add Tender crisp patty <br /> and more...</p>
              <div className="stars">
                <img src={stars} alt="" />
                <button className="blyudo__btn">ORDER</button>
              </div>
            </div>
            {/* blyudo 1 */}
            </div>
          </div>
        </div>
        {/* fourth */}
        <div className="banner__fourth container">
            <img className='fourth__img' src={img8} alt="" />
            <div className="groups">
              <img src={group1} alt="" className="group" />
              <img src={group2} alt="" className="group" />
              <img src={group3} alt="" className="group" />
            </div>
        </div>
        {/* fifth */}
          <div className="banner__fifth">
            <img className='fifth__img' src={img9} alt="" />
            <div className="fifth__div">
              <div className="fifthDiv__first">
                <img src={event1} alt="" />
              </div>
              <div className="fifthDiv__second">
                <img src={event2} alt="" />
                <img style={{marginBottom: '20px', marginTop: '20px'}} src={event3} alt="" />
                <img src={event4} alt="" />
              </div>
            </div>
          </div>
          {/* sixth */}
          <div className="six__banner">
            <img className='six__img' src={img10} alt="" />
            <div className="six__div">
              <img src={twitter} alt="" />
              <img src={instagram} alt="" />
              <img src={facebook} alt="" />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Banner