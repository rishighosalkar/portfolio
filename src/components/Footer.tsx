export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="font-mono text-sm text-gray-600">
          &lt;/&gt; Designed & Built by{" "}
          <span className="text-gray-400">Rushikesh Ghosalkar</span> &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
