import React from 'react';
import { connect } from 'react-redux';

import ProductList from '../../components/productlist';
import { addProduct, getProducts } from '../../actions/products';
import ComponentStatesHandler from '../../components/common/hoc/component-states-handler';
import ContentLoader from "react-content-loader"
import PrivateRoute from '../../components/common/hoc/private-route';


class ProductCon extends React.Component {

    constructor() {
        super();
        this.state = {
            loading: false
        }
    }

    async componentDidMount() {
        const { getProducts } = this.props;
        this.setState({
            loading: true
        })
        await getProducts();
        this.setState({
            loading: false
        })
    }

    preloader() {
        return (
            <div style={{
                marginTop: '1em'
            }}>
                <ContentLoader
                    speed={2}
                    width={1000}
                    height={575}
                    viewBox="0 0 800 575"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="12" y="0" rx="2" ry="2" width="150" height="150" />
                    <rect x="35" y="165" rx="2" ry="2" width="100" height="10" />
                    <rect x="45" y="185" rx="2" ry="2" width="80" height="10" />
                    <rect x="220" y="0" rx="2" ry="2" width="150" height="150" />
                    <rect x="243" y="165" rx="2" ry="2" width="100" height="10" />
                    <rect x="253" y="185" rx="2" ry="2" width="80" height="10" />
                    <rect x="428" y="0" rx="2" ry="2" width="150" height="150" />
                    <rect x="453" y="165" rx="2" ry="2" width="100" height="10" />
                    <rect x="463" y="185" rx="2" ry="2" width="80" height="10" />
                    <rect x="640" y="0" rx="2" ry="2" width="150" height="150" />
                    <rect x="663" y="165" rx="2" ry="2" width="100" height="10" />
                    <rect x="673" y="185" rx="2" ry="2" width="80" height="10" />
                    <rect x="12" y="220" rx="2" ry="2" width="150" height="150" />
                    <rect x="34" y="385" rx="2" ry="2" width="100" height="10" />
                    <rect x="45" y="405" rx="2" ry="2" width="80" height="10" />
                    <rect x="220" y="220" rx="2" ry="2" width="150" height="150" />
                    <rect x="243" y="385" rx="2" ry="2" width="100" height="10" />
                    <rect x="253" y="405" rx="2" ry="2" width="80" height="10" />
                    <rect x="428" y="220" rx="2" ry="2" width="150" height="150" />
                    <rect x="453" y="385" rx="2" ry="2" width="100" height="10" />
                    <rect x="463" y="405" rx="2" ry="2" width="80" height="10" />
                    <rect x="640" y="0220" rx="2" ry="2" width="150" height="150" />
                    <rect x="663" y="385" rx="2" ry="2" width="100" height="10" />
                    <rect x="673" y="405" rx="2" ry="2" width="80" height="10" />
                </ContentLoader>
            </div>

        )
    }

    render() {

        const { products, addProduct } = this.props
        return (
            <ComponentStatesHandler preloader={this.preloader()}
                isLoading={this.state.loading}>
                <ProductList products={products} addProduct={addProduct} />
            </ComponentStatesHandler>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state['products']['data'] && state['products']['data']['products'] || []
    }
}

export default PrivateRoute(connect(mapStateToProps, {
    addProduct,
    getProducts
})(ProductCon));