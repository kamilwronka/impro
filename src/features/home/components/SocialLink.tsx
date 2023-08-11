type Props = {
  label: string;
  icon?: React.ReactNode;
  href?: string;
};

const Button: React.FC<Props> = ({ label, icon, href = "/" }) => {
  return (
    <a
      className="p-4 rounded-xl w-full text-white font-bold flex flex-row justify-center gap-x-3"
      href={href}
    >
      <div className="text-2xl">{icon}</div>
      <div>{label}</div>
    </a>
  );
};

export default Button;
