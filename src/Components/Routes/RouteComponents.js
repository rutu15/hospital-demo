import Add from "../AddData/add";
import List from "../Listing/List";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";

export const RoutesPath = [
    {
        path: '/list',
        component: List,
        private: true
    },
    {
        path: '/add',
        component:Add,
        private:true
    },
    {
        path: '/signup',
        component:Signup,
        private:false
    },
    {
        path: '/',
        component:Login,
        private:false
    }
]