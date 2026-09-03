import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const pillVariants = cva(
  'inline-flex shrink-0 items-center justify-center px-6 py-2.5 text-sm font-medium uppercase tracking-widest transition-colors whitespace-nowrap',
  {
    variants: {
      variant: {
        green: 'bg-brand-green text-brand-off-white hover:bg-brand-green/90',
        ink: 'bg-brand-ink text-brand-off-white hover:bg-brand-ink/90',
        disabled: 'bg-brand-grey text-brand-ink/50 pointer-events-none',
      },
    },
    defaultVariants: {
      variant: 'green',
    },
  }
)

interface PillButtonProps extends VariantProps<typeof pillVariants> {
  href?: string
  onClick?: () => void
  className?: string
  children: React.ReactNode
  external?: boolean
  ariaLabel?: string
}

export function PillButton({ href, onClick, variant, className, children, external, ariaLabel }: PillButtonProps) {
  if (href && variant !== 'disabled') {
    return (
      <Link
        href={href}
        onClick={onClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
        className={cn(pillVariants({ variant }), className)}
      >
        {children}
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className={cn(pillVariants({ variant }), className)}>
      {children}
    </button>
  )
}
