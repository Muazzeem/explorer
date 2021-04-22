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
        icon: 'list-outline',
        children: [
            {
                title: 'Companies List',
                link: '/pages/layout/companies-list',
            },
            {
                title: 'Recommend Companies',
                link: '/pages/layout/recommend-companies',
            },
        ],
    },
    {
        title: 'Add Company',
        icon: {icon: 'plus-outline'},
        link: '/pages/new-job-post',
    },
    {
        title: 'Privacy Policy',
        icon: {icon: 'checkmark-outline', pack: 'eva'},
        link: '/pages/policy',
    },
];
