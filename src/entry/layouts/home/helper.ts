import type { SupportedLocale, LocaleValue } from '@/types';
import { I18N_CONFIG } from '@/constants/config';

import type { HomeLocale } from './typing';

const locales: LocaleValue<HomeLocale> = {
  zh: {
    heading: I18N_CONFIG.zh.site.title,
    slogan: '为富阳银湖在地超级个体/工作室、商家、企业提供专业的软件研发服务',
    getStarted: '了解更多',
    highlights: '核心价值',
  },
};

function resolveLocale(locale: SupportedLocale): HomeLocale {
  return locales[locale];
}

export { resolveLocale };
