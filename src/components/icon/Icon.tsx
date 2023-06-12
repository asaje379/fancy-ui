type IconProps = {
  name: string;
  size?: number;
};

export const Icon = ({ name = 'search', size = 18 }: IconProps) => {
  return (
    <span
      className="material-symbols-outlined"
      style={{ fontSize: `${size}px` }}>
      {name}
    </span>
  );
};
