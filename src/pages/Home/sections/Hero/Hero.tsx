{/*import { Box, Container, Grid, Typography, styled } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import capaMo from "../../../../assets/images/capaMo.jpg";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem 0",
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "80%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`, // Corrigido para "contrastText"
    maxWidth: "300px",
  }));

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          {/* Imagem */}
          {/*<Grid item xs={12} md={5} display="flex" justifyContent="center">
            <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                    <AnimatedBackground/>
                </Box>
                <Box>
                    <StyledImg src={capaMo} alt="Capa Monise" />
                </Box>
            </Box>
            
          </Grid>

          {/* Texto e Botões */}
          {/*<Grid item xs={12} md={7}>
            <Typography color="primary" variant="h3" textAlign="center">
              Monise Da Silva
            </Typography>
            <Typography color="primary" variant="h5" textAlign="center" gutterBottom>
              Desenvolvedora Back-End
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {/* Botão Baixar CV */}
              {/*<Grid item xs={12} sm={6} display="flex" justifyContent="center">
                <StyledButton>
                  <DownloadIcon />
                  <Typography>Baixar CV</Typography>
                </StyledButton>
              </Grid>
              {/* Botão Entre em Contato */}
              {/*<Grid item xs={12} sm={6} display="flex" justifyContent="center">
                <StyledButton>
                  <MailOutlineIcon />
                  <Typography>Entre em Contato!</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;*/}

import { Box, Container, Grid, Typography, styled } from "@mui/material"
import capaMo from "../../../../assets/images/capaMo.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "100px",

        },
        [theme.breakpoints.up('md')]: { // >=mobile
            paddingTop: "0",
        }
    }))

    const StyledImg = styled("img")(({ theme }) => ({
        width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative">
                                <Box position="absolute" width={"150%"} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign="center">
                                    <StyledImg src={capaMo} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Monise Da Silva</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center" >Desenvolvedora Back-End</Typography>
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <DownloadIcon />
                                        <Typography>
                                            Baixar CV
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <MailOutlineIcon />
                                        <Typography>
                                            Entre em Contato!
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero
