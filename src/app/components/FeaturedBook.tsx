import Image from 'next/image';

interface FeaturedBookProps {
  book: {
    id: number;
    title: string;
    author: string;
    image: string;
  };
}

const FeaturedBook: React.FC<FeaturedBookProps> = ({ book }) => {
  return (
    <div className="border rounded p-4">
      <Image
        src={book.image}
        alt={book.title}
        width={150}
        height={200}
        className="mx-auto"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <h3 className="text-lg font-bold mt-2">{book.title}</h3>
      <p className="text-gray-600">{book.author}</p>
    </div>
  );
};

export default FeaturedBook;
