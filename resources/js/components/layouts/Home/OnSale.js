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
                spaceBetween={16}
                slidesPerView={4}
                navigation={false}
                loop={true}
                modules={[Autoplay, Navigation]}
                autoPlay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                }}
            >
                {this.props.data.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <CardProduct
                                productId={item.id}
                                productImage={
                                    bookCoverData[item.book_cover_photo]
                                }
                                productName={item.book_title}
                                productAuthor={item.author_name}
                                productIsDiscount={item.is_discount}
                                productDiscountPrice={item.discount_price}
                                productBookPrice={item.book_price}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        );
    }
}

export default OnSale;
