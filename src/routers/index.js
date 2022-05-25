import { HeaderOnly } from '~/components/Layouts';
import { Home, Following, Profile, Upload, Search } from '~/pages';
import routesConfig from '~/config/routes';

// Public Routers
const publicRouters = [
    {
        path: routesConfig.home,
        component: Home,
    },
    {
        path: routesConfig.following,
        component: Following,
    },
    {
        path: routesConfig.profile,
        component: Profile,
    },
    {
        path: routesConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: routesConfig.search,
        component: Search,
        layout: null,
    },
];

// private Routers
const privateRouters = [];

export { publicRouters, privateRouters };
