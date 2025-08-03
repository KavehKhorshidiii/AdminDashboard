import './productTable.css'

export default function ProductTable() {


  return (
    <>
      <table className='table-products'>
        <thead>
            <tr className='table-header'>
                <th className="table-product-header">img</th>
                <th className="table-product-header">name</th>
                <th className="table-product-header">price</th>
                <th className="table-product-header">counter</th>
            </tr>
        </thead>
        <tbody>
         
            <tr className='table-body'>
                <td className='table-body-items'><img className='table-img' src="./profile.jpg" alt="" /></td>
                <td className='table-body-items'>iphone15</td>
                <td className='table-body-items'>3000,000</td>
                <td className='table-body-items'>5</td>
                <td className='table-body-items'>
                    <button className='table-product-btns'>Edit</button>
                    <button className='table-product-btns'>Delete</button>
                    <button className='table-product-btns'>info</button>
                </td>
            </tr>
        </tbody>
        
      </table>
    </>
  )
}
