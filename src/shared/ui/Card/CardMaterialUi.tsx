import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Link as MuiLink,
} from '@mui/material';
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

export const CardMaterialUi = ({
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
    <MuiLink href={link} underline="none">
      <MuiCard sx={{ maxWidth: width || 345 }}>
        <CardMedia component="img" height="140" image={imageSrc} alt={title} />
        <CardContent>
          {popular && (
            <Typography variant="body2" color="textSecondary">
              ⭐ Популярный продукт
            </Typography>
          )}
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          {description && (
            <Typography variant="body2" color="textSecondary">
              {description}
            </Typography>
          )}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
          >
            <Box>
              <Typography variant="h6" color="textPrimary">
                {price}
              </Typography>
              {oldPrice && (
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ textDecoration: 'line-through' }}
                >
                  {oldPrice}
                </Typography>
              )}
            </Box>
            <Typography variant="body2" color="primary">
              Подробнее →
            </Typography>
          </Box>
        </CardContent>
      </MuiCard>
    </MuiLink>
  );
};
