export function formatDate(date: Date, locale = 'uk-UA'): string {
  return new Intl.DateTimeFormat(locale).format(date)
}

export function generateId(): string {
  return crypto.randomUUID()
}

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
