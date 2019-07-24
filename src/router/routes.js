import Categorys from '../pages/Categorys/Categorys.vue'
import Home from '../pages/Home/Home.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Things from '../pages/Things/Things.vue'
import Login from '../pages/Login/Login.vue'
import LoginPhone from '../pages/Login/LoginPhone/LoginPhone.vue'
import LoginMail from '../pages/Login/LoginMail/LoginMail.vue'
import LoginHome from '../pages/Login/LoginHome/LoginHome.vue'



// 配置路由路径
export default[
  {
    path:'/home',
    component:Home,
    meta: {
      isShow:true,
     }
  },

  {
    path:'/login',
    component:Login,
    meta:{
      isShow:true
    },
    children:[
      {
        path:'/login/loginphone',
        component:LoginPhone
      },
      {
        path:'/login/loginmail',
        component:LoginMail
      },
      {
        path:'/login/loginhome',
        component:LoginHome
      },
    ]
  },
  {
    path:'/categorys',
    component:Categorys,
    meta: {
      isShow:true
     },

  },
  {
    path:'/shopcart',
    component:ShopCart,
    meta: {
      isShow:true
     }
  },
  {
    path:'/things',
    component:Things,
    meta: {
      isShow:true
     }
  },
  // 路由根路径
  {
    path:'/',
    redirect:'/home'
  }
]
