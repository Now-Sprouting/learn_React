import Home from '../pages/home';
import AboutRouterConfig, { AboutHisotry, AboutCulture, AboutContact, AboutJoin } from '../pages/about-router-config';
import Profile from '../pages/profile';
import User from '../pages/user';

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/about",
    component: AboutRouterConfig,
    routes: [
      {
        path: "/about",
        exact: true,
        component: AboutHisotry
      },
      {
        path: "/about/culture",
        component: AboutCulture
      },
      {
        path: "/about/contact",
        component: AboutContact
      },
      {
        path: "/about/join",
        component: AboutJoin
      },
    ]
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/user",
    component: User
  }
]

export default routes;