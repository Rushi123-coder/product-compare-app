import React, { useMemo } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const ProductCard = React.memo(({ product, compareList, onToggleCompare }) => {
  // ✅ useMemo to avoid recalculating on every render
  const isCompared = useMemo(
    () => compareList.some((p) => p.id === product.id),
    [compareList, product.id]
  );

  return (
    <Card
      sx={{ maxWidth: 345, mx: "auto", borderRadius: 3, boxShadow: 3 }}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") onToggleCompare(product);
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={product.image}
        alt={product.name}
        loading="lazy" // ✅ performance: lazy-load images
      />

      <CardContent>
        <Typography gutterBottom variant="h6" fontWeight="bold">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Brand: {product.brand}
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 1 }}>
          ₹ {product.price.toLocaleString()}
        </Typography>

        {/* Features List */}
        <List dense>
          {product.features.map((feature, index) => (
            <ListItem key={index} sx={{ py: 0 }}>
              <ListItemText primary={`• ${feature}`} />
            </ListItem>
          ))}
        </List>
      </CardContent>

      <CardActions>
        <Button
          size="large"
          fullWidth
          variant={isCompared ? "outlined" : "contained"}
          color="primary"
          onClick={() => onToggleCompare(product)}
        >
          {isCompared ? "Remove" : "Add to Compare"}
        </Button>
      </CardActions>
    </Card>
  );
});

export default ProductCard;
