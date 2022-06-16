import * as React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Autoplay} from 'swiper';
import CardProduct from '../CardProduct/CardProduct.js';
import {booksData} from '../../../../assets/data/books.js';
import {bookCoverData} from '../../../../assets/data/bookcover';
import 'swiper/css';
import 'swiper/css/navigation';

class Slider extends React.Component {
    render() {
        return (
            <Swiper
                spaceBetween={this.props.spaceBetween}
                slidesPerView={this.props.slidesPerView}
                navigation={this.props.navigation}
                loop={this.props.loop}
                modules={[Autoplay, Navigation]}
                autoplay={this.props.autoPlay}
            >
                {booksData.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <CardProduct
                                productImage={bookCoverData[item.image]}
                                productName={item.name}
                                productAuthor={item.author}
                                productDiscountPrice={item.discount_price}
                                productFinalPrice={item.final_price}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        )
    }
}

export default Slider;
