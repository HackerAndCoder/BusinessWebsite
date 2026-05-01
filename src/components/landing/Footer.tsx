export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="font-semibold text-white text-base">
          WebCraft<span className="text-blue-400">Studio</span>
        </p>
        <div className="flex gap-6">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="mailto:hello@webcraftstudio.com" className="hover:text-white transition-colors">
            Contact
          </a>
          <a href="/login" className="hover:text-white transition-colors">Client Login</a>
        </div>
        <p>&copy; {new Date().getFullYear()} WebCraftStudio. All rights reserved.</p>
      </div>
    </footer>
  );
}
