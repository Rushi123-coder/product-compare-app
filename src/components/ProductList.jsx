import React, { useState, useMemo, useCallback } from "react";
import {
  Typography,
  Container,
  Grid,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ProductCard from "./ProductCard";
import products from "../data/Products";

const ProductList = React.memo(({ compareList, onToggleCompare }) => {
  const [search, setSearch] = useState("");

  // ✅ Memoized filtering
  const filtered = useMemo(() => {
    const lower = search.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(lower) ||
        p.brand.toLowerCase().includes(lower)
    );
  }, [search]);

  // ✅ Memoized handler
  const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Product List
      </Typography>

      {/* Search Bar */}
      <TextField
        placeholder="Search by name or brand..."
        variant="outlined"
        fullWidth
        size="small"
        value={search}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 3 }}
      />

      {filtered.length > 0 ? (
         <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 1, sm: 8, md: 12 }}>
          {filtered.map((p) => (
            <Grid key={p.id} size={{ xs: 2, sm: 4, md: 4 }}>
              <ProductCard
                product={p}
                compareList={compareList}
                onToggleCompare={onToggleCompare}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1" color="text.secondary">
          No products found.
        </Typography>
      )}
    </Container>
  );
});

export default ProductList;