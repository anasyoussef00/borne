export default class Utils {
  static parseDate(date: Date, locales: string = 'fr'): string {
    return Intl.DateTimeFormat(locales, {
      dateStyle: 'full',
      timeStyle: 'medium',
      hour12: false,
    }).format(date);
  }
}
