import Categorys from '../pages/Categorys/Categorys.vue'
import Home from '../pages/Home/Home.vue'
import Profile from '../pages/Profile/Profile.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Things from '../pages/Things/Things.vue'


// 配置路由路径
export default[
  {
    path:'/home',
    component:Home
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/categorys',
    component:Categorys
  },
  {
    path:'/shopcart',
    component:ShopCart
  },
  {
    path:'/things',
    component:Things
  },
  // 路由根路径
  {
    path:'/',
    redirect:'/home'
  }
]
