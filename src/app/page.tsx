import Image from 'next/image';
import { FaBook } from 'react-icons/fa';
import { settings } from './settings';

import FeaturedBook from './components/FeaturedBook';
import { featuredBooks } from './settings';

export default function Home() {
  const categories = ['Fiction', 'Business', 'Children', 'Science Fiction', 'Mystery'];

  return (
    <div className="container mx-auto px-4">
      <section className="py-12">
        <div className="text-center">
          <Image
            src={settings.logo}
            alt="Bookstore Logo"
            width={150}
            height={100}
            style={{ width: "auto", height: "auto" }}
            className="mx-auto"
          />
          <h1 className="text-4xl font-bold mb-4">{settings.name}</h1>
          <p className="text-lg mb-8">
  Find your favorite books here
  <Image
    src="/globe.svg"
    alt="Feature Icon"
    width={20}
    height={20}
    className="inline-block ml-2"
  />
</p>
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            View Books
            <FaBook className="inline-block ml-2" />
          </a>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Featured Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredBooks.map((book) => (
            <FeaturedBook key={book.id} book={book} />
          ))}
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <ul className="flex flex-wrap gap-4">
          {categories.map((category, index) => (
            <li key={index} className="bg-gray-200 rounded-full px-4 py-2">
              {category}
            </li>
          ))}
        </ul>
      </section>

      <footer className="bg-[#D32F2F] text-white text-center py-4">
        <p>{settings.footer}</p>
      </footer>
    </div>
  );
}
