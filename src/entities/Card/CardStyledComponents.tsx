import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const CardContainer = styled.div<{ width?: string }>`
  width: ${({ width }) => width || '300px'};
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  .image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .content {
    padding: 16px;
  }

  .popular {
    color: #ff9800;
    font-size: 0.9rem;
  }

  .title {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 8px 0;
  }

  .description {
    color: #666;
    font-size: 0.9rem;
  }

  .priceContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
  }

  .price {
    font-size: 1.1rem;
    font-weight: bold;
    color: #333;
  }

  .oldPrice {
    font-size: 0.9rem;
    color: #999;
    text-decoration: line-through;
  }

  .link {
    color: #007bff;
    text-decoration: none;
  }
`;

export const CardStyledComponents = ({
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
      <CardContainer width={width}>
        <img src={imageSrc} alt={title} className="image" loading="lazy" />
        <div className="content">
          {popular && <span className="popular">⭐ Популярный продукт</span>}
          <h3 className="title">{title}</h3>
          {description && <p className="description">{description}</p>}
          <div className="priceContainer">
            <span className="price">{price}</span>
            {oldPrice && <span className="oldPrice">{oldPrice}</span>}
            <span className="link">Подробнее →</span>
          </div>
        </div>
      </CardContainer>
    </Link>
  );
};
