import {NbMenuItem} from '@nebular/theme';
import {animate, style} from '@angular/animations';

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
                link: '/pages/company/companies-list',
            },
            {
                title: 'Recommend Companies',
                link: '/pages/company/recommend-companies',
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
    {
        title: 'Feedback',
        icon: {icon: 'heart-outline', pack: 'eva'},
        link: '/pages/forms/feedback',
    },
];
