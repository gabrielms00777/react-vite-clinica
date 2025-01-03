import { Outlet, NavLink } from "react-router";

export const SiteLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4">
        <nav className="container mx-auto flex justify-between">
          <NavLink to="/" className="text-xl font-bold">Clínica Médica</NavLink>
          <div className="space-x-4">
            <NavLink to="/" className="hover:underline">Home</NavLink>
            <NavLink to="/services" className="hover:underline">Serviços</NavLink>
            <NavLink to="/contact" className="hover:underline">Contato</NavLink>
            <NavLink to="/login" className="hover:underline">Login</NavLink>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-blue-500 text-white text-center p-4">
        © {new Date().getFullYear()} Clínica Médica. Todos os direitos reservados.
      </footer>
    </div>
  );
};
