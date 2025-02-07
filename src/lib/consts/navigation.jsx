import { GrAppsRounded, GrUser, GrArticle, GrSettingsOption, GrHelp, GrVend } from "react-icons/gr";

export const DASHBOARD_SIDEBAR_ITEMS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/dashboard',
    icon: <GrAppsRounded />
  },
  {
    key: 'inventory',
    label: 'Inventario',
    path: '/dashboard/inventory',
    icon: <GrVend />
  },
  {
    key: 'profile',
    label: 'Profile',
    path: '/dashboard/profile',
    icon: <GrUser />
  },
  {
    key: 'product',
    label: 'Product',
    path: '/dashboard/product',
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