import React, { useState } from 'react'

export const Addnewproduct = () => {

    const [product,setproduct]=useState({})
      
    

  
    return (
        <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">Add products</h2>
          <form onSubmit={submitHandle} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Item Heading</label>
              <input
                onChange={inputHandle}
                type="text"
                placeholder="Item Heading"
                value={form.heading}
                name="heading"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
    
            <div>
              <label className="block text-gray-700 font-medium">Description</label>
              <textarea
                onChange={inputHandle}
                placeholder="Item Description"
                value={form.discription}
                name="description"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
    
            <div>
              <label className="block text-gray-700 font-medium">Image URL</label>
              <input
                onChange={inputHandle}
                type="text"
                placeholder="Image URL"
                value={form.url}
                name="url"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
    
            <div>
              <label className="block text-gray-700 font-medium">Category</label>
              <input
                onChange={inputHandle}
                type="text"
                placeholder="Category"
                value={form.category}
                name="category"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
    
            <div>
              <label className="block text-gray-700 font-medium">Price</label>
              <input
                onChange={inputHandle}
                type="number"
                placeholder="Price"
                value={form.price}
                name="price"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
    
            <div>
              <label className="block text-gray-700 font-medium">Rating</label>
              <input
                onChange={inputHandle}
                type="number"
                placeholder="Rating (1-5)"
                value={form.rating}
                name="rating"
               
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
    
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-blue-700 transition duration-200"
              >
                Save
              </button>
             
            </div>
          </form>
        </div>
      );
}
