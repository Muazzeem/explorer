import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Dashboard',
        icon: 'shopping-cart-outline',
        link: '/pages/dashboard',
        home: true,
    },
    {
        title: 'FEATURES',
        group: true,
    },
    {
        title: 'Companies',
        icon: 'layout-outline',
        children: [
            {
                title: 'Companies List',
                link: '/pages/layout/infinite-list',
            },
            {
                title: 'Recommend Companies',
                link: '/pages/layout/recommend',
            },
        ],
    },
    {
        title: 'Profile',
        icon: 'layout-outline',
        link: '/pages/profile',
    },
];
