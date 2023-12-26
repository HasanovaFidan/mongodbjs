import Basket from "../Page/Basket/Basket";
import Detail from "../Page/Detail/Detail";
import Home from "../Page/Home/Home";
import SiteRoot from "../Page/Home/SiteRoot";



const ROOT=[
    {
path:"/",
element:<SiteRoot/>,
children:[
{
path:"",
element:<Home/>
},
{
    path:"",
    element:<Detail/>
},
{
    path:"basket",
    element:<Basket/>
}
]
}]
export default ROOT