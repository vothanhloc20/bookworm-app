import "swiper/css";
import "swiper/css/navigation";

import * as React from "react";

import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import CardProduct from "../../../components/base/CardProduct/CardProduct.js";
import { bookCoverData } from "../../../../assets/data/bookcover.js";

class OnSale extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Swiper
                spaceBetween={30}
                slidesPerView={4}
                navigation={false}
                loop={true}
                modules={[Autoplay, Navigation]}
                autoPlay={{
                    delay: 500000,
                    disableOnInteraction: false,
                }}
            >
                {this.props.data.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <CardProduct
                                productImage={
                                    bookCoverData[item.book_cover_photo]
                                }
                                productName={item.book_title}
                                productAuthor={item.author_name}
                                productDiscountPrice={item.discount_price}
                                productFinalPrice={item.book_price}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        );
    }
}

export default OnSale;
