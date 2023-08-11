type Props = {
  children: React.ReactNode;
};

const SectionContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full shadow-xl rounded-xl bg-button-blue">{children}</div>
  );
};

export default SectionContainer;
