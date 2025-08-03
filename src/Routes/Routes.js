import Users from "../components/users/users";
import Product from "../components/product/product";
import Orders from "../components/orders/orders";
import Offs from "../components/offs/offs";
import Comment from "../components/comment/comment";


const allRoutes = [
    {path:'/' , element:<h1>Home</h1>},
    {path:'/product' , element:<Product></Product>},
    {path:'/comment' , element:<Comment></Comment>},
    {path:'/users' , element:<Users></Users>},
    {path:'/orders' , element:<Orders></Orders>},
    {path:'/offs' , element:<Offs></Offs>},
]

export default allRoutes