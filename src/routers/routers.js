import { HeaderOnly } from '~/layouts';
import { Home, Following, Profile, Upload, Search } from '~/pages';

import config from '~/config';

// Public Routers
const publicRouters = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.search,
        component: Search,
        layout: null,
    },
];

// private Routers
const privateRouters = [];

export { publicRouters, privateRouters };
