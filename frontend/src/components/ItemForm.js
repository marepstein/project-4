import React, { useState} from 'react'

const categories = ['all', 'dresses', 'knitwear', 'jackets & coats', 'blouses & shirts', 'tops & t-shirts', 'trousers', 'jeans', 'skirts', 'jumpsuits & playsuits', 'sets & suits', 'footwear', 'accessories', 'jewellery', 'bags']

const ItemForm = ({ data, handleSubmit, handleChange, errors }) => {
	
  // const [categorySelected, setCategory] = useState([])
	
  // const categorySelect = (e) => {
  //   e.preventDefault()
  //   setCategory({ ...categorySelected, [e.target.name]: e.target.value })
  // }
	
  return <form action="" className="form" onSubmit={handleSubmit}>
    {/* We use bulma field, label and control classes for nice forms */}
    <div className="field">
      <label htmlFor="" className="label">
        Image
      </label>
      <div className="control">
        <input
          onChange={handleChange}
          type="text"
          name="image"
          className="input"
          value={data.image}
        />
      </div>
      {errors.image && <small className="help is-danger">
        {errors.image}
      </small>}
    </div>
    <div className="field">
      <label htmlFor="" className="label">
        Title
      </label>
      <div className="control">
        <input
          onChange={handleChange}
          type="text"
          name="title"
          className="input"
          value={data.title}
        />
      </div>
      {errors.title && <small className="help is-danger">
        {errors.title}
      </small>}
    </div>
    <div className="field">
      <label htmlFor="" className="label">
        Description
      </label>
      <div className="control">
        <input
          onChange={handleChange}
          type="text"
          name="description"
          className="input"
          value={data.description}
        />
      </div>
      {errors.description && <small className="help is-danger">
        {errors.description}
      </small>}
    </div>
    <div className="field">
      <label htmlFor="" className="label">
        Size
      </label>
      <div className="control">
        <input
          onChange={handleChange}
          type="text"
          name="size"
          className="input"
          value={data.size}
        />
      </div>
      {errors.size && <small className="help is-danger">
        {errors.size}
      </small>}
    </div>
    <div className="field">
      <label htmlFor="" className="label">
        Original Price
      </label>
      <div className="control">
        <input
          onChange={handleChange}
          type="text"
          name="original_price"
          className="input"
          value={data.original_price}
        />
      </div>
      {errors.original_price && <small className="help is-danger">
        {errors.original_price}
      </small>}
    </div>
    <div className='field'>
      <div className='control filters'>
        <label className='label'>Pick a Category:</label>
        <div className='select'>
          <select onChange={handleChange}>
            {categories.map((elem, i) => {
              return <option key={i} value={elem}>{elem}</option>
            })}
          </select>
        </div>
      </div>
    </div>
    <button className="button is-black">
      Create Item
    </button>
  </form>
}


export default ItemForm





