import React, { useMemo, useCallback } from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Paper,
  Button,
  Grid,
  Card,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import { useTheme } from "@mui/material/styles";

export default function CompareArea({ products, onToggleCompare, onClearAll }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (products.length < 2) return null;

  // Memoized comparisons
  const brandSame = useMemo(() => products.every((p) => p.brand === products[0].brand), [products]);
  const priceSame = useMemo(() => products.every((p) => p.price === products[0].price), [products]);
  const featuresSame = useMemo(
    () => products.every((p) => p.features.join(",") === products[0].features.join(",")),
    [products]
  );

  // Stable callback
  const handleRemove = useCallback(
    (p) => () => onToggleCompare(p),
    [onToggleCompare]
  );

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Compare Products
      </Typography>

      <Button
        variant="outlined"
        color="error"
        size="small"
        startIcon={<ClearAllIcon />}
        onClick={onClearAll}
        sx={{ mb: 2 }}
      >
        Clear All
      </Button>

      {/* Desktop Table View */}
      {!isMobile && (
        <Paper sx={{ overflowX: "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Feature
                  </Typography>
                </TableCell>
                {products.map((p) => (
                  <TableCell key={p.id} align="left">
                    <Typography variant="subtitle1" fontWeight="bold">
                      {p.name}
                    </Typography>
                    <IconButton size="small" onClick={handleRemove(p)} color="error">
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ bgcolor: brandSame ? "inherit" : "rgba(255,0,0,0.1)" }}>
                <TableCell>Brand</TableCell>
                {products.map((p) => (
                  <TableCell key={p.id}>{p.brand}</TableCell>
                ))}
              </TableRow>

              <TableRow sx={{ bgcolor: priceSame ? "inherit" : "rgba(0,128,0,0.1)" }}>
                <TableCell>Price</TableCell>
                {products.map((p) => (
                  <TableCell key={p.id}>₹ {p.price.toLocaleString()}</TableCell>
                ))}
              </TableRow>

              <TableRow sx={{ bgcolor: featuresSame ? "inherit" : "rgba(0,0,255,0.1)" }}>
                <TableCell>Features</TableCell>
                {products.map((p) => (
                  <TableCell key={p.id}>
                    {p.features.map((f, i) => (
                      <Typography variant="body2" key={i}>
                        • {f}
                      </Typography>
                    ))}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      )}

      {/* Mobile Card View */}
      {isMobile && (
        <Grid container spacing={{ xs: 2 }} columns={{ xs: 12}}>
          {products.map((p) => (
            <Grid key={p.id} size={{ xs: 12}}>
              <Card
                sx={{
                  border: "1px solid #ddd",
                  borderRadius: 2,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {p.name}
                    <IconButton
                      size="small"
                      onClick={handleRemove(p)}
                      color="error"
                      sx={{ ml: 1 }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      bgcolor: brandSame ? "inherit" : "rgba(255,0,0,0.1)",
                      p: 0.5,
                      borderRadius: 1,
                    }}
                  >
                    <strong>Brand:</strong> {p.brand}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      bgcolor: priceSame ? "inherit" : "rgba(0,128,0,0.1)",
                      p: 0.5,
                      borderRadius: 1,
                    }}
                  >
                    <strong>Price:</strong> ₹ {p.price.toLocaleString()}
                  </Typography>
                  <Typography
                   component="div"
                    variant="body2"
                    sx={{
                      bgcolor: featuresSame ? "inherit" : "rgba(0,0,255,0.1)",
                      p: 0.5,
                      borderRadius: 1,
                    }}
                  >
                    <strong>Features:</strong>
                    <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
                      {p.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
