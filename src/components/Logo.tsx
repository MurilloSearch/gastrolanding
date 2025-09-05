const Logo = () => {
  return (
    <a
      href="#home"
      className="flex items-center gap-2 text-xl font-bold font-headline text-foreground"
    >
      <img
        src="/favicon.ico"
        alt="Logo"
        className="h-6 w-6"
      />
      Dr. Sergio Murillo
    </a>
  );
};
export default Logo;