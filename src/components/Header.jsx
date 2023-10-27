import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Link from "next/link";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import Drawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight"; // Import Drawer for the side menu
import { Divider, Stack } from "@mui/material";
import ProjectHover from "@/pages/projects/ProjectHover";
import CoursesHover from "@/pages/courses/CoursesHover";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const handleDrawerClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <AppBar
        position=""
        sx={{
          background: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
          color: "primary.dark",
          boxShadow: "none",
        }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Link href="/" component="div">
              <Image src="/logo.jpg" alt="My Image" width={160} height={160} />
            </Link>
          </Grid>

          <Grid item>
            <Toolbar>
              <Hidden mdUp>
                {/* Show menu icon and open side menu on small screens */}
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer anchor="left" open={menuOpen} onClose={toggleMenu}>
                  {/* Side menu items for small screens */}
                  <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                      {" "}
                      <ChevronLeftIcon />
                      {/* // {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon/>} */}
                    </IconButton>
                  </DrawerHeader>
                  <Divider />
                  <div
                    style={{
                      width: "250px",
                    }}
                  >
                    <Stack direction={"column"}>
                      <Link href="/">
                        <Button onClick={toggleMenu}>Home</Button>
                      </Link>

                      <Link href="/aboutus">
                        <Button onClick={toggleMenu}>About us</Button>
                      </Link>
                      <Link href="/aboutus">
                        <Button onClick={toggleMenu}>Courses</Button>{" "}
                      </Link>
                      <Link href="/aboutus">
                        <Button onClick={toggleMenu}>Affiliation-PIA</Button>{" "}
                      </Link>
                      <Link href="/contactform/contact">
                        <Button onClick={toggleMenu}>Contact Us</Button>
                      </Link>
                    </Stack>
                  </div>
                </Drawer>
              </Hidden>

              <Hidden smDown mdDown>
                <Stack direction={"row"} spacing={2}>
                  <Link href="/">
                    <Button
                      sx={{
                        fontSize: "1.2rem",
                        color: "warning.dark",
                        "&:hover": { color: "secondary.dark" },
                      }}
                    >
                      Home
                    </Button>
                  </Link>

                  <Link href="/aboutus">
                    <Button
                      sx={{
                        fontSize: "1.2rem",
                        color: "warning.dark",
                        "&:hover": { color: "secondary.dark" },
                      }}
                    >
                      About-Us
                    </Button>
                  </Link>
                  <ProjectHover />
                  <CoursesHover />
                  <Button
                    sx={{
                      fontSize: "1.2rem",
                      color: "warning.dark",
                      "&:hover": { color: "secondary.dark" },
                    }}
                  >
                    Affiliation-PIA
                  </Button>

                  <Link href="/contactform/contact">
                    <Button
                      sx={{
                        fontSize: "1.2rem",
                        color: "warning.dark",
                        "&:hover": { color: "secondary.dark" },
                      }}
                    >
                      Contact-Us
                    </Button>
                  </Link>
                </Stack>
              </Hidden>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
}
