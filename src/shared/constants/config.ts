// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { LocaleValue, LocaleConfig } from '../types';

const SITE_TITLE = '银湖软件开发小组';
const SITE_DESCRIPTION = '为富阳银湖在地超级个体/工作室、商家、企业提供专业服务的软件研发团队。';

const SITE_URL_MAP = {
  projects: '/projects',
  about: '/about',
};

const I18N_DEFAULT_LOCALE = 'zh';

const I18N_CONFIG: LocaleValue<LocaleConfig> = {
  zh: {
    site: {
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
    },
    navs: {
      projects: '项目',
      about: '关于',
    },
  },
};

const OFFICIAL_WEBSITE_URL = 'https://yinhufreedom.com';

export {
  SITE_TITLE, SITE_DESCRIPTION, SITE_URL_MAP,
  I18N_DEFAULT_LOCALE, I18N_CONFIG,
  OFFICIAL_WEBSITE_URL,
};
