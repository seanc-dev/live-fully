import React from "react";
<<<<<<< ours
import styled from "@emotion/styled";
=======
import styled from "styled-components";
>>>>>>> theirs
import RawAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

<<<<<<< ours
const AppBar = styled((props) => <RawAppBar {...props} />)`
=======
const AppBar = styled(RawAppBar)`
>>>>>>> theirs
  background: ${(props) => props.theme.colors.main};
`;

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
<<<<<<< ours
          ></IconButton>
=======
          >
            {/* <MenuIcon /> */}
          </IconButton>
>>>>>>> theirs
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
