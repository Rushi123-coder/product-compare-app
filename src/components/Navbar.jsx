import React from "react";
import { AppBar, Toolbar, Typography, Switch } from "@mui/material";

// ✅ Memoized component for performance
const Navbar = React.memo(({ darkMode, onToggleTheme }) => {
  return (
    <AppBar position="sticky" color="primary" enableColorOnDark>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: "bold", letterSpacing: 1 }}
        >
          Product Compare App
        </Typography>

        {/* Accessible, controlled switch */}
        <Switch
          checked={darkMode}
          onChange={onToggleTheme}
          color="default"
        />
      </Toolbar>
    </AppBar>
  );
});

export default Navbar;
