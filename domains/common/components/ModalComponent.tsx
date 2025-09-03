'use client';

import clsx from 'clsx';
import Button from './Button';
import { ReactNode } from 'react';

type Align = 'left' | 'center';

export interface ModalProps {
  title?: ReactNode;
  content?: ReactNode;
  align?: Align;
  onConfirm: () => void;
  onCancel?: () => void;
  className?: string;
}

export default function ModalComponent({
  title,
  content,
  align = 'center',
  onConfirm,
  onCancel,
  className,
}: ModalProps) {
  const alignBlock =
    align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <div className="fixed inset-0 z-[1000] grid place-items-center bg-Dim-Default">
      <div
        className={clsx(
          'w-80 p-6 bg-Static-White ds-rounded-m inline-flex flex-col justify-start items-center gap-xxl',
          className
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        aria-describedby={content ? 'modal-description' : undefined}
      >
        <div
          className={clsx(
            'flex w-full flex-col justify-start gap-s ',
            alignBlock
          )}
        >
          <div
            id="modal-title"
            className="justify-start title1-b text-Label-Subnormal"
          >
            {title}
          </div>
          {content && (
            <div
              id="modal-description"
              className="justify-start body1-sb text-Label-Assistive"
            >
              {content}
            </div>
          )}
        </div>
        <div className="self-stretch inline-flex justify-start items-center gap-3">
          <Button
            size="s"
            variant="main"
            fullWidth
            onClick={onConfirm}
          >
            확인하기
          </Button>
          {onCancel && (
            <Button
              size="s"
              variant="subtle"
              fullWidth
              onClick={onCancel}
            >
              취소하기
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
