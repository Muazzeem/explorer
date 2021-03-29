import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Dashboard',
        icon: 'layout',
        link: '/pages/dashboard',
        home: true,
    },
    {
        title: 'FEATURES',
        group: true,
    },
    {
        title: 'Companies',
        icon: 'grid',
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
];
