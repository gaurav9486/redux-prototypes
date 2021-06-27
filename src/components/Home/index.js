import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteProduct } from '../../actions'

export class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home Component - {this.props.username}</h1>
                {this.props.products.length && this.props.products.map((item) => <>
                <h3>{item.name}</h3>
                <button onClick={(id) => this.props.removeProduct(id)}>DELETE</button>
                </>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    username: state.username,
    products: state.products
})

const mapDispatchToProps = (dispatch) => ({
    removeProduct: (id) => dispatch(deleteProduct(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);