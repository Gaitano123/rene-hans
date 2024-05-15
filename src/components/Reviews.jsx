import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'

import img1 from './justice/pexels-brett-sayles-1000740.jpg'
import img2 from './justice/pexels-mate-67502523-8287770.jpg'
import img3 from './justice/pexels-ekaterina-bolovtsova-6077181.jpg'


function Reviews(){

    const navigate = useNavigate()
    const [reviews, setReview] = useState([])

    useEffect(() => {

        fetch('http://localhost:3000/reviews')
        .then((res) => res.json())
        .then((data) => setReview(data))
    }, [])

    const review = reviews.map((review) =>(
        <div className="review3" key={review.id}>
            <div  className='review3_1'>
                <h3>{review.fullnames}</h3>
            </div>
            <div className='review3_2'>
                {/* Mapping the stars based on the ratings */}
                {review.ratings && !isNaN(parseInt(review.ratings)) && [...Array(parseInt(review.ratings))].map((_, index) => (
                    <i key={index} className="fa-solid fa-star"></i>
                ))}
            </div>

            <div className='review3_3'>
                <i className="fa-solid fa-quote-left p1"></i>
                <p>{review.review}</p>
                <i className="fa-solid fa-quote-right p2"></i>
            </div>
        </div>
    ))
    

    return(
        <div className='review_main'>
            <div className='h-80 rev1'>
                <div id="carouselExampleCaptions" class="carousel slide">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={img1} className="d-block w-100 crsl" alt="..."/>
                      <div class="carousel-caption d-none d-md-block">
                        <h5 className='review1'>Why Choose Us: Client Benefits</h5>
                        <p className='review1'>Experience personalized service and exceptional results tailored to your needs</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src={img2} className="d-block w-100 crsl" alt="..."/>
                      <div class="carousel-caption d-none d-md-block">
                        <h5 className='review1'>Reliable Support & Guidance</h5>
                        <p className='review1'>Gain peace of mind with our dedicated support team guiding you every step of the way.</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src={img3} className="d-block w-100 crsl" alt="..."/>
                      <div class="carousel-caption d-none d-md-block">
                        <h5 className='review1'>Value-Driven Solutions</h5>
                        <p className='review1'>Maximize your returns with cost-effective solutions designed to add tangible value to your business.</p>
                      </div>
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
            </div>
            <div className='review2'>
                <button className='review-button' onClick={() => {navigate("/review-form");window.scrollTo(0, 0);}}><i class="fa-solid fa-plus"></i> add review</button>
                <div>
                    {review}
                </div>
            </div>
        </div>
    )
}

export default Reviews


                {/* <div className='review3'>
                    <div className='review3_1'>
                        <h3>Abel Mutua</h3>
                    </div>
                    <div className='review3_2'>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <div className='review3_3'>
                        <i className="fa-solid fa-quote-left p1"></i>
                        <p>Absolutely thrilled with the exceptional service provided by this firm! From the initial consultation to the successful resolution of my case, every step was handled with utmost professionalism and care. The team's expertise and dedication truly exceeded my expectations. Communication was prompt and clear, ensuring I was informed at every stage of the process. I felt supported and confident throughout, knowing my legal matters were in capable hands. With gratitude, I highly recommend their services to anyone seeking reliable and effective representation. Thank you for your outstanding work and commitment to achieving the best outcomes for your clients.</p>
                        <i className="fa-solid fa-quote-right p2"></i>
                    </div>
                    <div className='review3_4'>
                        <span>3/05/2024</span>
                    </div>
                </div>
                <div className='review3'>
                    <div className='review3_1'>
                        <h3>Abel Mutua</h3>
                    </div>
                    <div className='review3_2'>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <div className='review3_3'>
                        <i className="fa-solid fa-quote-left p1"></i>
                        <p>Absolutely thrilled with the exceptional service provided by this firm! From the initial consultation to the successful resolution of my case, every step was handled with utmost professionalism and care. The team's expertise and dedication truly exceeded my expectations. Communication was prompt and clear, ensuring I was informed at every stage of the process. I felt supported and confident throughout, knowing my legal matters were in capable hands. With gratitude, I highly recommend their services to anyone seeking reliable and effective representation. Thank you for your outstanding work and commitment to achieving the best outcomes for your clients.</p>
                        <i className="fa-solid fa-quote-right p2"></i>
                    </div>
                    <div className='review3_4'>
                        <span>3/05/2024</span>
                    </div>
                </div>
                <div className='review3'>
                    <div className='review3_1'>
                        <h3>Abel Mutua</h3>
                    </div>
                    <div className='review3_2'>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <div className='review3_3'>
                        <i className="fa-solid fa-quote-left p1"></i>
                        <p>Absolutely thrilled with the exceptional service provided by this firm! From the initial consultation to the successful resolution of my case, every step was handled with utmost professionalism and care. The team's expertise and dedication truly exceeded my expectations. Communication was prompt and clear, ensuring I was informed at every stage of the process. I felt supported and confident throughout, knowing my legal matters were in capable hands. With gratitude, I highly recommend their services to anyone seeking reliable and effective representation. Thank you for your outstanding work and commitment to achieving the best outcomes for your clients.</p>
                        <i className="fa-solid fa-quote-right p2"></i>
                    </div>
                    <div className='review3_4'>
                        <span>3/05/2024</span>
                    </div>
                </div>
                <div className='review3'>
                    <div className='review3_1'>
                        <h3>Abel Mutua</h3>
                    </div>
                    <div className='review3_2'>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <div className='review3_3'>
                        <i className="fa-solid fa-quote-left p1"></i>
                        <p>Absolutely thrilled with the exceptional service provided by this firm! From the initial consultation to the successful resolution of my case, every step was handled with utmost professionalism and care. The team's expertise and dedication truly exceeded my expectations. Communication was prompt and clear, ensuring I was informed at every stage of the process. I felt supported and confident throughout, knowing my legal matters were in capable hands. With gratitude, I highly recommend their services to anyone seeking reliable and effective representation. Thank you for your outstanding work and commitment to achieving the best outcomes for your clients.</p>
                        <i className="fa-solid fa-quote-right p2"></i>
                    </div>
                    <div className='review3_4'>
                        <span>3/05/2024</span>
                    </div>
                </div>
                <div className='review3'>
                    <div className='review3_1'>
                        <h3>Abel Mutua</h3>
                    </div>
                    <div className='review3_2'>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <div className='review3_3'>
                        <i className="fa-solid fa-quote-left p1"></i>
                        <p>Absolutely thrilled with the exceptional service provided by this firm! From the initial consultation to the successful resolution of my case, every step was handled with utmost professionalism and care. The team's expertise and dedication truly exceeded my expectations. Communication was prompt and clear, ensuring I was informed at every stage of the process. I felt supported and confident throughout, knowing my legal matters were in capable hands. With gratitude, I highly recommend their services to anyone seeking reliable and effective representation. Thank you for your outstanding work and commitment to achieving the best outcomes for your clients.</p>
                        <i className="fa-solid fa-quote-right p2"></i>
                    </div>
                    <div className='review3_4'>
                        <span>3/05/2024</span>
                    </div>
                </div> */}
