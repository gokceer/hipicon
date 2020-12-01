import React from 'react';
import './product.css';

function Product(props) {
    const btnStyle = {marginTop: "75px", background: "#ff9f1a", padding: "1.2em 1.5em", border: "none", textTransform: "UPPERCASE", 
    fontWeight: "bold", color: "#fff"};
    return(
        <div className="card">
                {props.productArray.map(item => (
                <div className="container-fluid" key={item.id}>
                    <div className="wrapper row">
                        <div className="preview col-md-6">
                            <div className="preview-pic tab-content">
                            <div className="tab-pane active" id="pic-1"><img src={item.imageURLs} alt="product"/></div>
                            </div>
                        </div>
                        <div className="details col-md-6">
                            <h2 className="product-title">{item.name}</h2>
                            <h2 className="product-brand">{item.brand}</h2>
                            <p className="product-description stock-code">{item.stockCode}</p>
                            <h3 className="price"><span>{item.displayPriceText}</span></h3>
                            <p className="product-description">{item.productStoryText}</p>
                            <p className="product-description sub-description">{item.deliveryDayText}</p>
                            
                            <div>
                                <button style={btnStyle} type="button">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Product;