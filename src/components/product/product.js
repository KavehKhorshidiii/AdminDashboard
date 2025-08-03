import ErrorBox from '../errorBox/errorBox'
import AddNewProduct from '../addNewProduct/addNewProduct'
import ProductTable from '../productTable/productTable'

export default function product() {
  return (
    <div>
      <ErrorBox msg={"no product"}></ErrorBox>
      <AddNewProduct></AddNewProduct>
      <ProductTable></ProductTable>
    </div>
  )
}
