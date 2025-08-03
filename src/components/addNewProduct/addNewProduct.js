import React from 'react'
import './addNewProduct.css'
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { IoMdPricetag } from "react-icons/io";
import { IoMdPhotos } from "react-icons/io";
import { HiColorSwatch } from "react-icons/hi";
import { TbNumber123 } from "react-icons/tb";
import { FaChartBar } from "react-icons/fa";








export default function addNewProduct() {
  return (
        <div className='addNewProductComponent'>

          <h1 className='addNewProductTitle'>Add Product</h1>

            <div className='addNewProductContainer'>

                <div className="addNewProductContainerInputs">
                    <div className="addNewProductInputs">
                        <MdDriveFileRenameOutline className='addNewProduct-icon'></MdDriveFileRenameOutline>
                        <input className='addProductInput' type="text" placeholder='product name' />
                    </div>
                    <div className="addNewProductInputs">
                        <TbNumber123 className='addNewProduct-icon'></TbNumber123>
                        <input className='addProductInput' type="text" placeholder='product counter' />
                    </div>
                    <div className="addNewProductInputs">
                        <FaHeart className='addNewProduct-icon'></FaHeart>
                        <input className='addProductInput' type="text" placeholder='like' />
                    </div>
                    <div className="addNewProductInputs">
                        <HiColorSwatch className='addNewProduct-icon'></HiColorSwatch>
                        <input className='addProductInput' type="text" placeholder='colors' />
                    </div>
                    <div className="addNewProductInputs">
                        <IoMdPricetag className='addNewProduct-icon'></IoMdPricetag>
                        <input className='addProductInput' type="text" placeholder='price' />
                    </div>
                    <div className="addNewProductInputs">
                        <IoMdPhotos className='addNewProduct-icon'></IoMdPhotos>
                        <input className='addProductInput' type="text" placeholder='photo' />
                    </div>
                    <div className="addNewProductInputs">
                        <FaChartBar className='addNewProduct-icon'></FaChartBar>
                        <input className='addProductInput' type="text" placeholder='buys range' />
                    </div>
                </div>

                <div className='parentBtn'>
                    <button className='addNewProductBtn'>Add New Product</button>
                </div>

            </div>

        </div>
    )
}
