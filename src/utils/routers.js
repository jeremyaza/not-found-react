import React from 'react';
const Home = React.lazy(()=> import('../components/home/Home'));
const NotFound = React.lazy(()=> import('../components/not_found/NotFound'));

export const routers = [
    {
        path:"/",
        name:"home",
        exact:true,
        component: Home,
    },
    {
        path:"*",
        name:"NotFound",
        exact:false,
        component: NotFound,
    }
]
