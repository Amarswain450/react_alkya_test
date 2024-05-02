import React from 'react'
import "./HomeSlider.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import img1 from "../../../assets/img1.png"
import img2 from "../../../assets/img2.png"
import img3 from "../../../assets/img3.png"
import img4 from "../../../assets/img4.png"


const datas = [
    {
        id: 1,
        image: img1,
        name: "img1"
    },
    {
        id: 2,
        image: img2,
        name: "img2"
    },
    {
        id: 3,
        image: img3,
        name: "img3"
    },
    {
        id: 4,
        image: img4,
        name: "img4"
    },
    {
        id: 5,
        image: img1,
        name: "img5"
    },
    {
        id: 6,
        image: img2,
        name: "img6"
    }
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 1
    }
};

const HomeSlider = () => {

    return (
        <>
            <div className="home-main-component">
                <div className="home-slider-container">
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        responsive={responsive}
                        showDots={true}
                        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                    >
                        {
                            datas.map((data) => {
                                return (
                                    <>
                                        <div className='slider-img-div' key={data?.id}>
                                            <img
                                                src={data?.image}
                                                alt={data?.name}
                                            />
                                        </div>
                                    </>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default HomeSlider