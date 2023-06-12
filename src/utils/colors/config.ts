export type Theme = 'primary' | 'danger' | 'warning' | 'success' | 'info';
export const COLORS_MAPPING = {
  primary: {
    default: {
      bg: 'bg-primary-default',
      border: 'border border-primary-border',
      hover: 'hover:bg-primary-hover',
      focus: 'focus:border-primary-focus',
      text: 'text-gray-100',
    },
    outlined: {
      bg: 'bg-primary-outlined',
      border: 'border border-primary-border',
      hover: 'hover:bg-primary-border',
      focus: 'focus:border-primary-focus',
      text: 'text-primary-default',
    },
  },
  danger: {
    default: {
      bg: 'bg-danger-default',
      border: 'border border-danger-border',
      hover: 'hover:bg-danger-hover',
      focus: 'focus:border-danger-focus',
      text: 'text-gray-100',
    },
    outlined: {
      bg: 'bg-danger-outlined',
      border: 'border border-danger-border',
      hover: 'hover:bg-danger-border',
      focus: 'focus:border-danger-focus',
      text: 'text-danger-default',
    },
  },
  warning: {
    default: {
      bg: 'bg-warning-default',
      border: 'border border-warning-border',
      hover: 'hover:bg-warning-hover',
      focus: 'focus:border-warning-focus',
      text: 'text-gray-100',
    },
    outlined: {
      bg: 'bg-warning-outlined',
      border: 'border border-warning-border',
      hover: 'hover:bg-warning-border',
      focus: 'focus:border-warning-focus',
      text: 'text-warning-default',
    },
  },
  success: {
    default: {
      bg: 'bg-success-default',
      border: 'border border-success-border',
      hover: 'hover:bg-success-hover',
      focus: 'focus:border-success-focus',
      text: 'text-gray-100',
    },
    outlined: {
      bg: 'bg-success-outlined',
      border: 'border border-success-border',
      hover: 'hover:bg-success-border',
      focus: 'focus:border-success-focus',
      text: 'text-success-default',
    },
  },
  info: {
    default: {
      bg: 'bg-info-default',
      border: 'border border-info-border',
      hover: 'hover:bg-info-hover',
      focus: 'focus:border-info-focus',
      text: 'text-gray-100',
    },
    outlined: {
      bg: 'bg-info-outlined',
      border: 'border info-border',
      hover: 'hover:bg-info-border',
      focus: 'focus:border-info-focus',
      text: 'text-info-default',
    },
  },
};
