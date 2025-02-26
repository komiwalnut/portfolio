import Link from 'next/link';
import { FaTwitter, FaDiscord, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold dark:text-white">Contact</h2>

      {/* GitHub */}
      <div className="flex items-center gap-2 dark:text-gray-300">
        <FaGithub className="h-5 w-5" />
        <Link 
          href="https://github.com/komiwalnut" 
          target="_blank"
          className="hover:underline"
        >
          komiwalnut
        </Link>
      </div>

      {/* Twitter */}
      <div className="flex items-center gap-2 dark:text-gray-300">
        <FaTwitter className="h-5 w-5 text-blue-400" />
        <Link 
          href="https://twitter.com/komiwalnut" 
          target="_blank"
          className="hover:underline"
        >
          @komiwalnut
        </Link>
      </div>

      {/* Discord */}
      <div className="flex items-center gap-2 dark:text-gray-300">
        <FaDiscord className="h-5 w-5 text-indigo-400" />
        <span>komiwalnut</span>
      </div>
    </div>
  );
}