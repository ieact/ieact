import Head from "next/head";
import Image from "next/image";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import {
  Button,
  Card,
  Container,
  Grid,
  Hidden,
  Paper,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import ContactForm from "./contactform/contact";



export default function Home() {
  const choose = [
    {
      id: 1,
      title: "CSR Projects",
      description:
        " A host of content services at your doorstep and Development",
    },
    {
      id: 2,
      title: "Corporate Alliance",
      description:
        " Recruitment and Staffing solutions for a wide range of JDs invarious sectors",
    },
    {
      id: 3,
      title: "Campus",
      description:
        " Helping school students in nurturing their Vocational skill sets for a brighter future.",
    },
    {
      id: 4,
      title: "Career Counselling",
      description:
        "Implementing placement linked Skill Career Development and Project.",
    },
    {
      id: 5,
      title: "Government Projects",
      description:
        "Implementing placement linked Skill Development Projects for various Central.",
    },
    {
      id: 6,
      title: "Infrastructure",
      description:
        " We have well equipped and good infrastructure for All Training Sectors",
    },
  ];
  const jobs = [
    {
      id: 1,
      imageUrl: "/bg/interview.svg",
      title: "Interview Scheduled Mission",
      alt: "",
      description:
        "To provide life-changing apprenticeships to youth in underserved communities across India and uplift their livelihood",
    },
    {
      id: 2,
      imageUrl: "/bg/educ.svg",
      title: "Skill Development & Training",
      alt: "",
      description:
        "Provide Quality Education to all the category of the people of rural especially to the underprivileged weakers sections of the society.",
    },
    {
      id: 3,
      imageUrl: "/bg/inter.svg",
      title: "Kaushal Melas",
      alt: "",
      description:
        "Indira Skills arranged many events for Awareness programs & Job Melas and has a success rates of Recruitment and Placements",
    },
  ];
  const data = [
    {
      id: 1,
      imageUrl: "/courses/ithelp.svg",
      description: "Domestic IT Help Desk Assistant",
      link: "/courses/ithelp/Ithelp",
      alt: "Domestic IT Help Desk Assistant image",
    },
    {
      id: 2,
      imageUrl: "/courses/electri.svg",
      description: "Assitant Electrician",
      link: "//courses/assistantElect/Electrician",
      alt: "Assitant Electrician image",
    },
    {
      id: 3,
      imageUrl: "/courses/laptop.svg",
      description: "Handset  Repair Engineering",
      link: "/courses/handset/HandsetRepair",
      alt: "Assitant Electrician image",
    },
    {
      id: 4,
      imageUrl: "/courses/general.svg",
      description: "General Duty Assistant",
      link: "/courses/generalDuty/Generalduty",
      alt: "Assitant Electrician image",
    },
  ];

  const sscImg = [
    {
      id: 1,
      imageUrl: "/ssc/Apparel logo.png",
      description: "Apparel made -ups & Home Furnishing Sector Skill Council",
      alt: "Apparel made -ups & Home Furnishing Sector Skill Council logo",
      link: "https://sscamh.com/",
    },
    {
      id: 2,
      imageUrl: "/ssc/thsc.jpg",
      description: "Tourism & Hospitality Skill Council",
      alt: "Tourism & Hospitality Skill Council logo",
      link: "https://thsc.in/",
    },
    {
      id: 3,
      imageUrl: "/ssc/nasscom.png",
      description: "IT- ITeS SSC NASSCOM",
      alt: "IT- ITeS SSC NASSCOM logo",
      link: "https://www.sscnasscom.com/",
    },
    {
      id: 4,
      imageUrl: "ssc\essci1.png",
      description: " Electronics Sector Skills Council of India",
      alt: "Image 1",
      link: "https://www.essc-india.org/",
    },
    {
      id: 5,
      imageUrl: "/ssc/DWSSC.png",
      description: "Domestic Workers Sector Skill Council",
      alt: "Domestic Workers Sector Skill Council logo",
      link: "http://dwsscindia.com/",
    },
    {
      id: 6,
      imageUrl: "/ssc/healthcare.png",
      description: "Healthcare Sector Skill Council",
      alt: "Healthcare Sector Skill Council logo",
      link: "https://healthcare-eskilling.com/#:~:text=HSSC%20is%20a%20NCVET%20recognized%20awarding%20body%20under,diagnostics%2C%20and%20associations%20from%20both%20public%20%26%20private.",
    },
    {
      id: 7,
      imageUrl: "/ssc/csdc.jpeg",
      description: "Construction Skill Development Council OF India",
      alt: "Construction Skill Development Council OF India logo",
      link: "https://www.csdcindia.org/",
    },
    {
      id: 8,
      imageUrl: "/ssc/beauty.png",
      description: "Beauty & Wellness Sector Skill Council",
      alt: "Beauty & Wellness Sector Skill Council logo",
      link: "https://www.bwssc.in/",
    },
  ];

  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
        <Box
          // minHeight={789}
          width="100vw"
          display="flex"
          justifyContent="flex-end"
          sx={{
            // background: "linear-gradient(140deg, #f6d365 0%, #fda085 97%)",
            background: `url("/bg/herocover.png") center / cover`,
            minHeight: { xs: 1000, sm: 1000, md: 800, lg: 789 }, // Responsive height
          }}
        >
          <Box
          position="absolute"
          left="0"
          width="100vw"
          sx={{ height: { xs: 1000, sm: 1000, md: 600, lg: 789 } }}
          backgroundColor="rgba(0, 0, 0, 0.7)"
        >
          <Grid container>
          {/* <Hidden smDown >
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box
                sx={{
                  background: `url("/bg/herosvg.svg") center / cover`,
                  height: { xs: 300, sm: 500, md: 600, lg: 789 },
                }}
              ></Box>
            </Grid>
            </Hidden> */}
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box
                minHeight={300}
                // display="flex"
                flexDirection="column"
                color="white"
                maxWidth="100%"
                paddingRight={{ xs: 2, md: 1 }}
                textAlign={{ xs: "left", md: "left" }}
                sx={{
                  justifyContent: "center",
                  alignItems: "center", // Center the text vertically
                  p: 3,
                }}
              >
                <Typography variant="h2" sx={{ lineHeight: 1.5 }}>
                  Elevate Your <br /> {"Career with Our "}
                  <br />
                  Training
                </Typography>
                <Typography variant="h5" sx={{ lineHeight: 2 }}>
                  A description of your hero section. Lorem ipsum dolor sit
                  amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam diam
                  voluptua.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    background: "#f50057",
                    color: "warm.main",
                    lineHeight: 2,
                    width: "30", // Button width on all screen sizes
                    ":hover": {
                      background: "primary.main",
                      color: "warm.main",
                    },
                  }}
                >
                  Join Course
                </Button>
              </Box>
            </Grid>
          </Grid>{" "}
        </Box>
        </Box>
        

        <Box
          width="100vw"
          display="flex"
          justifyContent="center"
          alignItems={"center"}
          sx={{
            background: " linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
            height: { xs: 1500, sm: 1200, md: 800, lg: 789 },
          }}
        >
          <Container>
            <Grid
              container
              spacing={3}
              // sx={{
              //   justifyContent: "center",
              //   alignItems: "center",
              //   display: "column",
              // }}
            >
              <Grid item xs={12}>
                <Typography variant="h3" sx={{ textAlign: "center" }}>
                  Why Should Choose IEACT
                </Typography>
              </Grid>
              {jobs.map((item) => (
                <Grid
                  item
                  key={item.id}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  sx={{ p: 2 }}
                >
                  <Box
                    sx={{
                      height: "300",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "column",
                    }}
                  >
                    <img
                      src={item.imageUrl}
                      alt={`Image ${item.description}`}
                      style={{ height: 120 }}
                    />
                    <Typography variant="h5" sx={{ lineHeight: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 2 }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box
          width="100vw"
          display="flex"
          justifyContent="center"
          alignItems={"center"}
          sx={{
            background: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
            height: { xs: 1800, sm: 1200, md: 800, lg: 789 },
          }}
        >
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography
                  variant="h3"
                  sx={{ color: "primary.main", textAlign: "center" }}
                >
                  Why Choose Us?
                </Typography>
              </Grid>
              {choose.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4} lg={4}>
                  <Box
                    className={styles.choose}
                    sx={{
                      p: 3,
                      textAlign: "center",
                      minHeight: 200,
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="h5" sx={{ lineHeight: 1.2 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: 2 }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box
          width="100vw"
          display="flex"
          justifyContent="center"
          alignItems={"center"}
          sx={{
            // background: " linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
            height: { xs: 2500, sm: 1500, md: 1100, lg: 1000 },
          }}
        >
          <Container>
            <Grid container>
              <Grid item xs={12}>
                <Typography
                  variant="h3"
                  sx={{
                    color: "primary.main",
                    textAlign: "center",
                    transition: "color 0.3s",
                  }}
                >
                  Sector Skill Council (SSC)
                </Typography>
              </Grid>
              {sscImg.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                  <Box
                    className={styles.box}
                    sx={{
                      p: 3,
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "column",
                      height: { xs: 300, sm: 300, md: 300, lg: 370 },
                    }}
                  >
                    <Box sx={{height:70}}>
                    <img
                      src={item.imageUrl}
                      alt={`Image ${item.alt}`}
                      style={{ height: 70 }}
                    />
                    </Box>
                    <Box sx={{height:180}}>
                    <Typography variant="h6">{item.description}</Typography>
                    </Box>
                    <a href={item.link}>
                      <Button variant="contained" sx={{alignContent:'end'}}>View</Button>
                    </a>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box
          width="100vw"
          display="flex"
          justifyContent="center"
          alignItems={"center"}
          sx={{
            background: " linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
            height: { xs: 1700, sm: 1200, md: 1000, lg: 789 },
          }}
        >
          <Container>
            <Grid
              container
              spacing={2}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Grid item xs={12} >
                <Typography
                  variant="h3"
                  sx={{
                    textAlign: "center",
                    color: "primary.main",
                    lineHeight: 1.5,
                  }}
                >
                  Courses We Offer
                </Typography>
                {/* <Typography
                  variant="h4"
                  sx={{
                    textAlign: "center",
                    lineHeight: 2,
                  }}
                >
                  Expand Your Career Opportunity <br /> {"with Our Courses"}
                </Typography> */}
              </Grid>

              {data.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                  <Box
                    className={styles.box}
                    sx={{
                      p: 3,
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "column",
                    }}
                  >
                    {/* <Card sx={{minHeight:"250"}}> */}
                    <img
                      src={item.imageUrl}
                      alt={`Image ${item.description}`}
                      style={{ height: 120 }}
                    />
                    <Typography variant="h6" sx={{ lineHeight: 2 }}>
                      {item.description}
                    </Typography>
                    <a href={item.link}>
                      <Button variant="contained" sx={{ lineHeight: 1.5 }}>
                        View Details
                      </Button>
                    </a>
                    {/* </Card> */}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* <Box
          width="100vw"
          display="flex"
          justifyContent="center"
          alignItems={"center"}
          sx={{
            // background: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
            height: { xs: 1700, sm: 1200, md: 800, lg: 789 },
          }}
        >
         
        </Box> */}
      {/* </ThemeProvider> */}
    </>
  );
}
