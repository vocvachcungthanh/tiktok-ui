import { HeaderOnly } from '~/components/Layouts';
import { Home, Following, Profile, Upload } from '~/pages';

// Public Routers
const publicRouters = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '@:nickname',
        component: Profile,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
];

// private Routers
const privateRouters = [];

export { publicRouters, privateRouters };
