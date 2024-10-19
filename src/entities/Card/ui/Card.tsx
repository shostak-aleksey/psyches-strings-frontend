import styled from 'styled-components';
import { AlignSelf, JustifySelf } from '@/shared/const/flex';
import { Link } from 'react-router-dom';

export enum CardVariant {
  MARATHON = 'marathon',
  VIDEO = 'video',
  BOOKS = 'books',
  TESTS = 'tests',
  GUIDE = 'guide',
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
  justifySelf?: JustifySelf;
  alignSelf?: AlignSelf;
}

const CardContainer = styled(Link)<{
  justifySelf?: JustifySelf;
  alignSelf?: AlignSelf;
}>`
  display: block;
  justify-self: ${(props) => props.justifySelf};
  align-self: ${(props) => props.alignSelf};
`;

const CardVideo = styled.div<{ width?: number; backgroundColor?: string }>`
  background: #ffffff;
  border-radius: 8px;
  border: 3px solid #ffffff;
  box-shadow: 6px 4px 10px rgba(0, 0, 0, 0.315);
  overflow: hidden;
  text-align: start;
  max-width: 500px;
  min-width: 250px;
  transition: transform 0.3s;
  width: ${(props) => props.width}px;
  background-color: ${(props) => props.backgroundColor};

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  max-height: 250px;
  object-fit: fill;
  width: 100%;
  height: auto;
`;

const Content = styled.div`
  padding: 18px;
  background: #ffffff;

  .popular {
    color: #363636;
    font-size: 18px;
    text-align: start;
  }

  .title {
    font-size: 30px;
    font-family: sans-serif;
    line-height: 1.1;
    margin: 8px 0;
    text-align: start;
    color: #192231;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: aqua;
    }
  }

  .description {
    color: #6e6e6e;
    font-size: 18px;
    margin: 8px 0;
    text-align: start;
  }

  .priceContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .priceSection {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px 0;
  }

  .price {
    font-size: 26px;
    font-weight: 500;
    color: #192231;
  }

  .oldPrice {
    font-size: 16px;
    color: #707070;
    text-decoration: line-through;
    margin-left: 8px;
  }

  .link {
    color: #192231;
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    margin-top: 8px;
    display: inline-block;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: aqua;
    }
  }
`;

const CardGuide = styled(CardVideo)`
  display: flex;
  justify-self: center;
  align-items: center;
  height: 400px;
  width: 650px;

  .image {
    width: 40%;
    height: 400px;
  }

  .content {
    width: 60%;
    height: 400px;
    justify-content: space-between;
    align-self: center;
  }

  @media (min-width: 1400px) {
    .image {
      width: 35%;
    }

    .content {
      width: 65%;
    }
  }
`;

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
  justifySelf,
  alignSelf,
}: CardProps) => {
  return (
    <CardContainer justifySelf={justifySelf} alignSelf={alignSelf} to={link}>
      {cardVariant === CardVariant.VIDEO && (
        <CardVideo width={width} backgroundColor={backgroundColor}>
          <Image src={imageSrc} alt={title} loading="lazy" />
          <Content>
            {popular && <span className="popular">⭐ Популярный продукт</span>}
            <h3 className="title">{title}</h3>
            {description && <p className="description">{description}</p>}
            <div className="priceContainer">
              <div className="priceSection">
                <span className="price">{price}</span>
                {oldPrice && <span className="oldPrice">{oldPrice}</span>}
              </div>
              <span className="link">Подробнее →</span>
            </div>
          </Content>
        </CardVideo>
      )}
      {cardVariant === CardVariant.GUIDE && (
        <CardGuide width={width} backgroundColor={backgroundColor}>
          <Image src={imageSrc} alt={title} loading="lazy" />
          <Content>
            {popular && <span className="popular">⭐ Популярный продукт</span>}
            <h3 className="title">{title}</h3>
            {description && <p className="description">{description}</p>}
            <div className="priceContainer">
              <div className="priceSection">
                <span className="price">{price}</span>
                {oldPrice && <span className="oldPrice">{oldPrice}</span>}
              </div>
              <span className="link">Подробнее →</span>
            </div>
          </Content>
        </CardGuide>
      )}
    </CardContainer>
  );
};
