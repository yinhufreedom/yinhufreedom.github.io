import type { SupportedLocale, LocaleValue } from '../types/locale';
import { I18N_DEFAULT_LOCALE } from '../constants/config';

const defaultLocale: SupportedLocale = I18N_DEFAULT_LOCALE;

let currentLocale: SupportedLocale = defaultLocale;

function getCurrentLocale(): SupportedLocale {
  return currentLocale;
}

function setCurrentLocale(locale: string = defaultLocale) {
  currentLocale = locale as SupportedLocale;
}

function getDefaultLocale(): SupportedLocale {
  return defaultLocale;
}

function unwrapLocalValue<VT = string>(data: LocaleValue<VT>, locale: SupportedLocale = currentLocale): VT {
  return data[locale] || data[I18N_DEFAULT_LOCALE];
}

export { getCurrentLocale, setCurrentLocale, getDefaultLocale, unwrapLocalValue };
