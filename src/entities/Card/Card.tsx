// Card.tsx
import cls from './Card.module.scss';
import { Link } from 'react-router-dom';

export enum CardVariant {
  MARATHON = 'marathon',
  VIDEO = 'video',
  BOOKS = 'books',
  TESTS = 'tests',
}
interface CardProps {
  className?: string;
  imageSrc: string;
  title: string;
  description?: string;
  price: string;
  oldPrice?: string;
  link: string;
  popular?: boolean;
  width?: number;
  cardVariant: CardVariant;
  backgroundColor?: string;
}

export const Card = ({
  imageSrc,
  title,
  description,
  width,
  price,
  oldPrice,
  link,
  cardVariant,
  popular = false,
  backgroundColor,
}: CardProps) => {
  return (
    <Link to={link}>
      {cardVariant === CardVariant.VIDEO && (
        <div className={cls.card} style={{ width, backgroundColor }}>
          <div className={cls.imageContainer}>
            <img
              style={{ width }}
              loading="lazy"
              src={imageSrc}
              alt={title}
              className={cls.image}
            />
          </div>
          <div className={cls.content}>
            {popular && (
              <span className={cls.popular}>⭐ Популярный продукт</span>
            )}
            <h3 className={cls.title}>{title}</h3>
            {description && <p className={cls.description}>{description}</p>}
            <div className={cls.priceContainer}>
              <div className={cls.priceSection}>
                <span className={cls.price}>{price}</span>
                {oldPrice && <span className={cls.oldPrice}>{oldPrice}</span>}
              </div>
              <span className={cls.link}>Подробнее →</span>
            </div>
          </div>
        </div>
      )}

      {cardVariant === CardVariant.MARATHON && (
        <div className={cls.card} style={{ width, backgroundColor }}>
          <div className={cls.contentContainer}>
            <img
              style={{ width: '100%' }}
              loading="lazy"
              src={imageSrc}
              alt={title}
              className={cls.image}
            />
            <div className={cls.content}>
              {popular && (
                <span className={cls.popular}>⭐ Популярный продукт</span>
              )}
              <h3 className={cls.title}>{title}</h3>
              {description && <p className={cls.description}>{description}</p>}
              <div className={cls.priceContainer}>
                <div className={cls.priceSection}>
                  <span className={cls.price}>{price}</span>
                  {oldPrice && <span className={cls.oldPrice}>{oldPrice}</span>}
                </div>
                <span className={cls.link}>Подробнее →</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Link>
  );
};
