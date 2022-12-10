import React from 'react';
import { clsxm } from '../../utils';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid';

interface IAlertKitProps {
  variant?: 'success' | 'info' | 'error' | 'warning';
  title?: React.ReactNode;
  description?: React.ReactNode;
  extraAction?: React.ReactNode;
  onClose?: () => void;
  withAccentBorder?: boolean;
  classes?: Partial<
    Record<'root' | 'icon' | 'title' | 'description' | 'withAccentBorder' | 'closeIcon', string>
  >;
  icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  className?: string;
}

const AlertKit: React.FC<IAlertKitProps> = (props) => {
  const {
    variant = 'success',
    description,
    title,
    extraAction,
    onClose,
    withAccentBorder,
    icon,
    classes: outerClasses,
    className,
  } = props;

  const classes = {
    variant: {
      root: clsxm(className, outerClasses?.root, 'rounded-md p-4', {
        ['bg-green-50']: variant === 'success',
        ['bg-blue-50']: variant === 'info',
        ['bg-red-50']: variant === 'error',
        ['bg-yellow-50']: variant === 'warning',
      }),
      icon: clsxm(outerClasses?.icon, 'h-5 w-5', {
        ['text-green-400']: variant === 'success',
        ['text-blue-400']: variant === 'info',
        ['text-red-400']: variant === 'error',
        ['text-yellow-400']: variant === 'warning',
      }),
      title: clsxm(outerClasses?.title, 'text-sm font-medium', {
        ['text-green-800']: variant === 'success',
        ['text-blue-800']: variant === 'info',
        ['text-red-800']: variant === 'error',
        ['text-yellow-800']: variant === 'warning',
      }),
      description: clsxm(outerClasses?.description, 'text-sm', {
        ['text-green-700']: variant === 'success',
        ['text-blue-700']: variant === 'info',
        ['text-red-700']: variant === 'error',
        ['text-yellow-700']: variant === 'warning',
        ['mt-2']: title,
      }),
    },
    withAccentBorder: clsxm(outerClasses?.withAccentBorder, {
      ['border-green-400']: withAccentBorder && variant === 'success',
      ['border-blue-400']: withAccentBorder && variant === 'info',
      ['border-red-400']: withAccentBorder && variant === 'error',
      ['border-yellow-400']: withAccentBorder && variant === 'warning',
      ['border-l-4 rounded-none']: withAccentBorder,
    }),
    closeIcon: clsxm(
      outerClasses?.closeIcon,
      'transition-all inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2',
      {
        ['bg-green-50 text-green-500 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50']:
          onClose && variant === 'success',
        ['bg-blue-50 text-blue-500 hover:bg-blue-100 focus:ring-blue-600 focus:ring-offset-blue-50']:
          onClose && variant === 'info',
        ['bg-red-50 text-red-500 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50']:
          onClose && variant === 'error',
        ['bg-yellow-50 text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-600 focus:ring-offset-yellow-50']:
          onClose && variant === 'warning',
      }
    ),
  };

  let Icon: ((props: React.SVGProps<SVGSVGElement>) => JSX.Element) | null = null;

  switch (variant) {
    case 'success':
      Icon = CheckCircleIcon;
      break;
    case 'info':
      Icon = InformationCircleIcon;
      break;
    case 'error':
      Icon = XCircleIcon;
      break;
    case 'warning':
      Icon = ExclamationTriangleIcon;
      break;
    default:
      break;
  }

  const AlteredIcon = icon || Icon;

  return (
    <div className={clsxm(classes.variant.root, classes.withAccentBorder)}>
      <div className="flex">
        <div className="flex-shrink-0">
          {AlteredIcon && <AlteredIcon className={classes.variant.icon} aria-hidden="true" />}
        </div>
        <div
          className={clsxm('ml-3 flex-1 md:flex md:justify-between', {
            ['flex-col']: !(extraAction || onClose),
          })}
        >
          {title && <h3 className={classes.variant.title}>{title}</h3>}
          {description && <div className={classes.variant.description}>{description}</div>}
          {extraAction}
          {onClose && (
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <button type="button" className={classes.closeIcon}>
                  <span className="sr-only">Dismiss</span>
                  <XCircleIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlertKit;
