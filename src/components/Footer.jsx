"use client";
import React from "react";
// import "./#header.css";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";

const Footer = () => {
  const year = new Date();
  return (
    <section id="sectionlast">
      <Box
        sx={{ background: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)" }}
      >
        <Container maxWidth={"xl"} sx={{ pt: "10vh" }}>
          <Grid container spacing={2.5} sx={{ py: 2 }}>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Typography variant="h5" sx={{marginBottom:2}}>IEACT</Typography>

              <Typography variant="body1" sx={{ lineHeight: 2 }}>
                SKP of unique skill building experiences including leadership,
                social, communication, computers and basic life skills.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <Typography variant="h5" sx={{marginBottom:2}}>Quik Links</Typography>
              <Stack direction={"column"} sx={{ lineHeight: 2 }}>
                <Link href={"/"}>Home </Link>
                <Link href={"/aboutus"}>About-Us </Link>
                <Link href={"/contactform/contact"}>Contact-Us </Link>
                <Link href={"/courses/assitantElect/Electrician"}>Courses </Link>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={5}>
            <Typography variant="h5" sx={{marginBottom:2}}>Contact Us</Typography>
              <Stack direction={"row"} spacing={2}>
                <Stack direction={"column"} sx={{ lineHeight: 2 }}>
                  
                  <Typography variant="h6">Admin Office</Typography>
                  <Typography variant="body1" sx={{ lineHeight: 2 }}>
                    Phone : 93630 55707,9597690707
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 2 }}>
                    Email : ieact23@gamil.com
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 2 }}>
                    Address : 3rd Floor, Sathriya Tower, Maruti Nagar bus stop,
                    No.1 Tollgate, Trichy
                  </Typography>
                </Stack>
                <Stack direction={"column"} sx={{ lineHeight: 2 }}>
                  <Typography variant="h6">Registered Office</Typography>

                  <Typography variant="body1" sx={{ lineHeight: 2 }}>
                    Address : No.1 Vasudeva Konar Complex,
                    Kajapettai,Trichy-620001
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            {/* <Grid item xs={12} sm={6} md={4} lg={2}></Grid> */}
            <Grid item xs={12} sm={12} md={12} lg={12} justifyContent={"center"}>
              <Typography variant="h5" sx={{marginBottom:2}}>Follow Us</Typography>
              <Stack direction="row" spacing={2} sx={{ lineHeight: 2 }}>
                <TwitterIcon sx={{ borderRadius: "50%" }}></TwitterIcon>
                <FacebookIcon></FacebookIcon>
                <br />
                <InstagramIcon></InstagramIcon>
                <YouTubeIcon></YouTubeIcon>
              </Stack>
            </Grid>
            <Divider />
            <Grid xs={12} height={4}>
              {/* <Container> */}
              <Box sx={{ textAlign: "center", py: 2, lineHeight: 2 }}>
                <footer>
                  Copyright &copy; {year.getFullYear()} Indra Educational &
                  Charitable Trust. All Rights Reserved
                </footer>
              </Box>
              {/* </Container> */}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default Footer;
