import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const NSDC = () => {
  return (
    <Box>
      <Grid item xs={12}>
        <Box sx={{ height: "100" }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              justifyContent: "center",

              background: "linear-gradient(140deg, #f6d365 0%, #fda085 97%)",
            }}
          >
            NSDC
          </Typography>
        </Box>
      </Grid>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box sx={{ lineHeight: 2, justifyContent: "space-between" }}>
              <Typography variant="h4">Introduction</Typography>

              <Typography variant="body1" sx={{ lineHeight: 2 }}>
                National Skill Development Corporation (NSDC) is a
                not-for-profit public limited company incorporated on July 31,
                2008 under section 25 of the Companies Act, 1956 (corresponding
                to section 8 of the Companies Act, 2013). NSDC was set up by
                Ministry of Finance as Public Private Partnership (PPP) model.
                The Government of India through Ministry of Skill Development &
                Entrepreneurship (MSDE) holds 49% of the share capital of NSDC,
                while the private sector has the balance 51% of the share
                capital.
              </Typography>
              <br />
              <Typography variant="body1" sx={{ lineHeight: 2 }}>
                NSDC aims to promote skill development by catalyzing creation of
                large, quality and for-profit vocational institutions. Further,
                the organisation provides funding to build scalable and
                profitable vocational training initiatives. Its mandate is also
                to enable support system which focuses on quality assurance,
                information systems and train the trainer academies either
                directly or through partnerships. NSDC acts as a catalyst in
                skill development by providing funding to enterprises, companies
                and organizations that provide skill training. It also develops
                appropriate models to enhance, support and coordinate private
                sector initiatives. The differentiated focus on 21 sectors under
                NSDC's purview and its understanding of their viability will
                make every sector attractive to private investment.
                <br />
                NSDC operates under a Public Private Partnership (PPP) model.
                The Government of India through the Ministry of Skill
                Development & Entrepreneurship (MSDE) owns 49% of the share
                capital, while the private sector owns 51%. According to the
                NSDC's Board Report, the government is the largest shareholder
                and corporation controller, and the private holders are 10
                business associations or confederations including the
                Confederation of Indian Industry (CII), Federation of Indian
                Chambers of Commerce and Industry (FICCI) and National
                Association of Software & Service Companies (NASSCOM) each with
                5.1% share capital. Under the aegis of MSDE, NSDC has
                collaborated with central and state governments, industry,
                non-profit organisations and academia to synergise and
                accelerate the skilling efforts.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box>
              <Typography variant="h4" sx={{ lineHeight: 2 }}>
                PMKK-PMKVY
              </Typography>
              <Typography>Pradhan Mantri Kaushal Kendra</Typography>
              <Typography variant="body1" sx={{ lineHeight: 2 }}>
                Vocational training needs to be made aspirational to transform
                India into the skill capital of the world. In line with the
                same, Ministry of Skill Development and Entrepreneurship (MSDE)
                intends to establish visible and aspirational Model Training
                Centres (MTCS) in every district of the country. Jeyram
                Education Trust is the implementation agency for the project.
              </Typography>
            </Box>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h4" sx={{ lineHeight: 2 }}>
                Our training centers envisage to:
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 2 }}>
                ⚫ Create benchmark that demonstrate aspirational value for
                competency-based skill development training.
                <br />
                ⚫ Focus on elements of quality, sustainability and Connection
                with stakeholders in skills delivery process.
                <br />⚫ Transform from a Mandate-driven footloose model to a
                sustainable institutional model.
              </Typography>
              <Typography variant="h3" sx={{ lineHeight: 2 }}>
                Vision Statement:
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 2 }}>
                Our vision is to be recognized as a premier training institute
                known for its commitment to excellence, innovation, and holistic
                development.
                <br /> We aspire to:
                <br /> 1. **Leadership in Education:** Be a leader in the field
                of education and skill development, setting the standard for
                quality and innovation.
                <br /> 2. **Global Impact:** Extend our reach internationally,
                fostering partnerships and collaborations that benefit students
                on a global scale. <br />
                3. **Diversity and Inclusivity:** Create a diverse and inclusive
                community that celebrates differences and promotes a culture of
                respect and understanding.
                <br /> 4. **Lifelong Learning:** Encourage a culture of lifelong
                learning, inspiring students to continually pursue knowledge and
                growth.
                <br /> 5. **Alumni Success:** Measure our success by the
                accomplishments of our alumni, who make a positive impact on
                society and their chosen fields.
                <br /> 6. **Continuous Improvement:** Embrace a commitment to
                continuous improvement, constantly evolving to meet the changing
                needs of our students and the world.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NSDC;
