interface Props {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <div>
      <h1>Hello Root Layout Shop</h1>
      {children}
    </div>
  );
}
