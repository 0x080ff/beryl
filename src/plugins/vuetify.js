// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import scssVars from '@/styles/exports.module.scss';

import IconAbout from '@/components/icons/icon-about.vue';
import IconBalance from '@/components/icons/icon-balance.vue';
import IconChat from '@/components/icons/icon-chat.vue';
import IconClose from '@/components/icons/icon-close.vue';
import IconContract from '@/components/icons/icon-contract.vue';
import IconFaq from '@/components/icons/icon-faq.vue';
import IconMenu from '@/components/icons/icon-menu.vue';
import IconNews from '@/components/icons/icon-news.vue';
import IconNotifications from '@/components/icons/icon-notifications.vue';
import IconSecurity from '@/components/icons/icon-security.vue';
import IconServices from '@/components/icons/icon-services.vue';
import IconSettings from '@/components/icons/icon-settings.vue';
import IconStock from '@/components/icons/icon-stock.vue';

// Vuetify
import { createVuetify } from 'vuetify';

const lightTheme = {
  dark: false,
  colors: {
    primary: scssVars.primary,
    primaryDark: scssVars.primaryDark,
    secondary: scssVars.secondary,
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
};

export default createVuetify({
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme,
    },
  },

  icons: {
    aliases: {
      about: IconAbout,
      balance: IconBalance,
      chat: IconChat,
      close: IconClose,
      contract: IconContract,
      faq: IconFaq,
      menu: IconMenu,
      news: IconNews,
      notifications: IconNotifications,
      security: IconSecurity,
      services: IconServices,
      settings: IconSettings,
      stock: IconStock,
    },
  },
});
