import { GrAppsRounded, GrUser, GrArticle, GrSettingsOption, GrHelp } from "react-icons/gr";

export const DASHBOARD_SIDEBAR_ITEMS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/',
    icon: <GrAppsRounded />
  },
  {
    key: 'profile',
    label: 'Profile',
    path: '/profile',
    icon: <GrUser />
  },
  {
    key: 'product',
    label: 'Product',
    path: '/product',
    icon: <GrArticle />
  }
];

export const DASHBOARD_SIDEBAR_FOOTER_ITEMS = [
  {
    key: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: <GrSettingsOption />
  },
  {
    key: 'support',
    label: 'Help & Support',
    path: '/support',
    icon: <GrHelp />
  }
]