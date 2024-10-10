// Card.tsx
import cls from './Card.module.scss';
import { Link } from 'react-router-dom';

export enum CardVariant {
  DEFAULT = 'default',
  CLEAR = 'clear',
  NEW = 'new',
  DISCOUNT = 'discount',
  BESTSELLER = 'bestseller',
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
}: CardProps) => {
  return (
    <Link to={link}>
      {cardVariant === CardVariant.DEFAULT && (
        <div className={cls.card} style={{ width: width }}>
          <img
            style={{ width: width }}
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
      )}
      {cardVariant === CardVariant.CLEAR && (
        <div className={cls.card} style={{ width: width }}>
          <img
            style={{ width: width }}
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
      )}
    </Link>
  );
};
