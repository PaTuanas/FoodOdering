import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from '../CarouselImage/CarouselImage';
import pic1 from '../CarouselImage/VNO_Pho1.jpg';
import pic2 from '../CarouselImage/bd4aea842dba436583ba436a4f77e401.jpg'
import pic3 from '../CarouselImage/main-qimg-53b73b6700183a2fcdc1c1e25e900eef-lq.jpg'

export default function Slider() {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <CarouselImage text="First slide" imageSrc={pic1}/>
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <CarouselImage text="Second slide" imageSrc={pic2}/>
                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <CarouselImage text="Third slide" imageSrc={pic3}/>
                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
