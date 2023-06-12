import { CSSProperties } from 'react';
import { COLORS_MAPPING, Theme } from './config';

export type ClassesByAttrArgs = {
  theme?: Theme;
  outlined?: boolean;
  expand?: boolean;
  disabled?: boolean;
};

export function getClassesByAttr({
  theme = 'primary',
  outlined = false,
  expand = false,
  disabled = false,
}: ClassesByAttrArgs) {
  const defaultClasses = [];

  if (expand) {
    defaultClasses.push('w-full');
  }

  if (disabled) {
    return 'bg-gray-100 text-gray-500';
  }

  if (!outlined) {
    return [
      ...defaultClasses,
      ...Object.values(COLORS_MAPPING[theme].default),
    ].join(' ');
  }
  return [
    ...defaultClasses,
    ...Object.values(COLORS_MAPPING[theme].outlined),
  ].join(' ');
}

export function getStylesByAttr(
  bgColor?: string,
  textColor?: string,
  styles?: CSSProperties,
) {
  const style: Record<string, string> = {};

  if (bgColor) {
    style.backgroundColor = bgColor;
  }

  if (textColor) {
    style.color = textColor;
  }

  return { ...style, ...styles };
}
