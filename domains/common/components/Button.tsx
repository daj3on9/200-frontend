'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';

const buttonVariants = cva(
  'relative select-none transition-colors cursor-pointer focus-visible:outline-none disabled:cursor-not-allowed',
  {
    variants: {
      size: {
        s: 'h-[37px] p-m title3-sb ds-rounded-m [&_svg]:w-[18px] [&_svg]:h-[18px]',
        m: 'h-[56px] p-xl title2-sb ds-rounded-m [&_svg]:w-[24px] [&_svg]:h-[24px]',
      },
      variant: {
        main: 'bg-Primary-Normal text-Static-White [&_svg]:fill-Static-White hover:bg-Primary-Strong active:bg-Primary-Heavy',
        subtle: 'bg-Fill-99 text-Label-Subnormal [&_svg]:fill-Fill-30',
        subtlest: 'bg-Static-White text-Label-Subnormal [&_svg]:fill-Fill-30',
        outlineMain:
          'border-Line-Subtle border-m text-Label-Subnormal [&_svg]:fill-Fill-30',
        outlineSubtle:
          'border-Line-Subtle border-m text-Label-Assistive [&_svg]:fill-Fill-60',
        outlineSubtlest:
          'border-Line-Subtler border-m text-Label-Subtler [&_svg]:fill-Fill-98',
      },
      iconLayout: {
        inline: 'flex justify-center items-center gap-m flex-1',
        edge: 'flex justify-between items-center flex-1',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      size: 'm',
      variant: 'main',
      iconLayout: 'inline',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
  iconSide?: 'left' | 'right';
}

export default function Button({
  size,
  variant,
  iconLayout,
  fullWidth,
  icon,
  iconSide = 'right',
  className,
  children,
  ...props
}: ButtonProps) {
  const hasIcon = !!icon;

  return (
    <button
      {...props}
      className={clsx(
        buttonVariants({
          size,
          variant,
          iconLayout,
          fullWidth,
        }),
        className
      )}
    >
      {iconLayout === 'inline' ? (
        <>
          {icon && iconSide === 'left' && <span>{icon}</span>}
          <span>{children}</span>
          {icon && iconSide === 'right' && <span>{icon}</span>}
        </>
      ) : (
        <>
          {hasIcon && iconSide === 'left' && (
            <span className="flex-shrink-0">{icon}</span>
          )}
          <span className="flex-1 text-center">{children}</span>
          {hasIcon && iconSide === 'right' && (
            <span className="flex-shrink-0">{icon}</span>
          )}
        </>
      )}
    </button>
  );
}
