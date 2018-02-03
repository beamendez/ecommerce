import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'

import * as productActions from '../actions/productActions'

class ProductAddContainer extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit (event) {
    event.preventDefault()
    const product = {
      name: this.nameInput.value,
      description: this.descriptionInput.value,
      image: this.imageInput.value,
      price: this.priceInput.value,
      deliveryStimate: this.deliveryInput.value,
      category: this.categoryInput.value
    }

    await this.props.actions.saveProduct(product)
    browserHistory.push('/')
  }

  render () {
    return (
      <section className='container'>
        <form className='offset-lg-3 col-lg-6' onSubmit={this.handleSubmit}>
          <legend>Añade un nuevo producto</legend>
          <div className='form-group'>
            <label htmlFor='name'>Nombre: </label>
            <input className='form-control' name='name' type='text' ref={node => this.nameInput = node} />
          </div>
          <br />
          <div className='form-group'>
            <label htmlFor='description'>Descripción: </label>
            <input className='form-control' name='description' type='text' ref={node => this.descriptionInput = node} />
          </div>
          <br />
          <div className='form-group'>
            <label htmlFor='image'>Imagen: </label>
            <input className='form-control' name='image' type='text' ref={node => this.imageInput = node} />
          </div>
          <br />
          <div className='form-group'>
            <label htmlFor='price'>Precio: </label>
            <input className='form-control' name='price' type='number' ref={node => this.priceInput = node} />
          </div>
          <br />
          <div className='form-group'>
            <label htmlFor='deliveryStimate'>TIempo de entrega: </label>
            <input className='form-control' name='deliveryStimate' type='text' ref={node => this.deliveryInput = node} />
          </div>
          <br />
          <div className='form-group'>
            <label htmlFor='category'>Categoría: </label>
            <input className='form-control' name='category' type='text' ref={node => this.categoryInput = node} />
          </div>
          <br />
          <div className='form-group'>
            <input className='btn btn-primary' type='submit' value='Guardar' />
          </div>
        </form>
      </section>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(ProductAddContainer)
