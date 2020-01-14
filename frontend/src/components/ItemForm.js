import React, { useState} from 'react'


const ItemForm = ({ data, handleSubmit, handleChange, errors }) => {
  
  console.log(data.category)

  // const categories = data.map((item) => {
  //   return item.category
  // })

  // console.log(categories)
	
	
  return <form action="" className="form" onSubmit={handleSubmit}>
    {/* We use bulma field, label and control classes for nice forms */}
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
      {errors.name && <small className="help is-danger">
        {errors.name}
      </small>}
    </div>
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
      {errors.origin && <small className="help is-danger">
        {errors.origin}
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
      {errors.image && <small className="help is-danger">
        {errors.image}
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
      {errors.tastingNotes && <small className="help is-danger">
        {errors.tastingNotes}
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
      {errors.name && <small className="help is-danger">
        {errors.name}
      </small>}
    </div>
    {/* <div className="field">
      <select options={categories} onChange={handleChange}>
      </select>
      <div className="control">
        <input
          onChange={handleChange}
          type="text"
          name="title"
          className="input"
          value={data.title}
        />
      </div>
      {errors.name && <small className="help is-danger">
        {errors.name}
      </small>}
    </div> */}
    <button className="button is-success">
      Create Item
    </button>
  </form>
}


export default ItemForm





