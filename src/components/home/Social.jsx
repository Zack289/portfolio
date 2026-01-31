import { Instagram, Linkedin, Github } from 'lucide-react';

function Social() {
  return (
    <div className=" left-4 top-1/3 flex lg:flex-col items-center justify-center gap-4 z-50 p-2 sm:flex-3">
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-circle btn-sm btn-outline text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300"
      >
        <Instagram className="w-5 h-5" />
      </a>

      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-circle btn-sm btn-outline text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300"
      >
        <Linkedin className="w-5 h-5" />
      </a>

      <a
        href="https://www.github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-circle btn-sm btn-outline text-gray-500 hover:bg-gray-800 hover:text-white transition-all duration-300"
      >
        <Github className="w-5 h-5" />
      </a>
    </div>
  );
}

export default Social;
