type Props = {
  children: React.ReactNode;
};

const Page: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default Page;
