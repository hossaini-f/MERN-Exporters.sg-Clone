import React, { useState } from 'react';
import './statics/style.css';


const SearchProduct = () => {
    const [currentSlide, SetCurrentSlide] = useState(1);
    
    const nextSlide = () => {
        SetCurrentSlide(currentSlide === 2 ? 1 : 1)
    }
    const prevSlide = () => {
        SetCurrentSlide(currentSlide === 1 ? 2 : 2)
    }
    return(
        <div class="product-search-wrapper">
                <div class="p-s-title-cat">Top categories for <b>Apple</b></div>

            <div class="product-search-container">
                <div class="product-search-options">
                    <div class="search-product-arrow-left" onClick={nextSlide}>
                        
                    </div>
                        <div class={ currentSlide === 1 ? "slide-container slide-active x-show" : " x-hide"} >
                            <div class="product-search-single-p">
                                #1
                            </div>
                            <div class="product-search-single-p">
                                #2
                            </div>
                            <div class="product-search-single-p">
                                #3
                            </div>
                            <div class="product-search-single-p">
                                #4
                            </div>
                            <div class="product-search-single-p">
                                #5
                            </div>
                        </div>
                        <div class={ currentSlide === 2 ? "slide-container slide-active x-show" : " x-hide"} >
                            <div class="product-search-single-p">
                                #6
                            </div>
                            <div class="product-search-single-p">
                                #7
                            </div>
                            <div class="product-search-single-p">
                                #8
                            </div>
                            <div class="product-search-single-p">
                                #9
                            </div>
                            <div class="product-search-single-p">
                                #10
                            </div>
                        </div>
                    
                    <div class="search-product-arrow-right" onClick={prevSlide}></div>
                </div>
            </div>
            <div class="search-prod-brand">Brands in <b>Portable Audio and Accessories</b><br/>
                <span>Apple</span><span>Apple</span><span>Apple</span>
            </div>
            
        </div>
    )
}
export default SearchProduct;