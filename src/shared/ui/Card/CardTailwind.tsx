import { Link } from 'react-router-dom';

export enum CardVariant {
  DEFAULT = 'default',
  CLEAR = 'clear',
  NEW = 'new',
  DISCOUNT = 'discount',
  BESTSELLER = 'bestseller',
}
interface CardProps {
  imageSrc: string;
  title: string;
  description?: string;
  width?: string;
  price: string;
  oldPrice?: string;
  link: string;
  cardVariant: CardVariant;
  popular?: boolean;
}

export const CardTailwind = ({
  imageSrc,
  title,
  description,
  width,
  price,
  oldPrice,
  link,
  cardVariant,
  popular = false,
}: CardProps) => {
  return (
    <Link to={link}>
      <div
        className={`bg-white shadow-md rounded-lg overflow-hidden ${width ? `w-${width}` : 'w-full'}`}
      >
        <img
          src={imageSrc}
          alt={title}
          className={`w-full h-48 object-cover`}
          loading="lazy"
        />
        <div className="p-4">
          {popular && (
            <span className="text-sm text-yellow-500">
              ⭐ Популярный продукт
            </span>
          )}
          <h3 className="text-lg font-semibold">{title}</h3>
          {description && <p className="text-gray-600">{description}</p>}
          <div className="flex justify-between items-center mt-4">
            <div>
              <span className="text-xl font-bold text-gray-800">{price}</span>
              {oldPrice && (
                <span className="text-sm line-through text-gray-500 ml-2">
                  {oldPrice}
                </span>
              )}
            </div>
            <span className="text-blue-500">Подробнее →</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
