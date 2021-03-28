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
        title: 'Modal & Overlays',
        icon: 'browser-outline',
        children: [
            {
                title: 'Dialog',
                link: '/pages/modal-overlays/dialog',
            },
            {
                title: 'Window',
                link: '/pages/modal-overlays/window',
            },
            {
                title: 'Popover',
                link: '/pages/modal-overlays/popover',
            },
            {
                title: 'Toastr',
                link: '/pages/modal-overlays/toastr',
            },
            {
                title: 'Tooltip',
                link: '/pages/modal-overlays/tooltip',
            },
        ],
    },
];
