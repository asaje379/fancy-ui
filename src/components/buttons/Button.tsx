import { ButtonHTMLAttributes } from 'react';
import { getClassesByAttr, getStylesByAttr } from '../../utils/colors';
import { Theme } from '../../utils/colors/config';
import { Icon } from '../icon/Icon';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Set the button theme variant
   */
  theme?: Theme;

  /**
   * Set a custom background color
   */
  bgColor?: string;

  /**
   * Set a custom text color
   */
  textColor?: string;

  /**
   * Outlined the button when setted to true
   */
  outlined?: boolean;

  /**
   * Display a full width button when setted to true
   */
  expand?: boolean;
}

export const Button = ({
  theme = 'primary',
  bgColor,
  textColor,
  outlined = false,
  expand = false,
  disabled = false,
  className = '',
  style = {},
  children,
  ...props
}: ButtonProps) => {
  const themeClasses = getClassesByAttr({ theme, outlined, expand, disabled });

  return (
    <button
      className={[
        'flex items-center justify-center gap-2 px-4 py-2 rounded border-3',
        themeClasses,
        className,
      ].join(' ')}
      style={getStylesByAttr(bgColor, textColor, style)}
      disabled={disabled}
      {...props}>
      {/* <Icon name="search" /> */}
      <>{children}</>
    </button>
  );
};
