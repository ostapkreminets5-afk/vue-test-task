export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

const baseClasses = 'btn'

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
}

export function buttonVariants(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
): string {
  return [baseClasses, variantClasses[variant], sizeClasses[size]].join(' ')
}
