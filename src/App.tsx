import './App.css'
import {Button, CssBaseline, Container, Stack, Slider, styled, type SliderProps, ThemeProvider, createTheme} from '@mui/material'
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import {AddAlarm} from '@mui/icons-material'

  // For the dynamic overrride of the Slider in CustomSlider also with shouldForwardProps, a type alias or interface can be used, mui doc sticks to interface 
  // type CustomSliderProps = SliderProps & {error? : boolean}
  interface CustomSliderPropsInterface extends SliderProps{
    error? : boolean
  }
  const CustomSlider = styled(Slider, {
    shouldForwardProp : (prop) => prop !== "error"
  })<CustomSliderPropsInterface>(({theme, error}) => ({
    width : theme.spacing(20),
    color : theme.palette.primary.main,
    ...(error && {backgroundColor : theme.palette.error.main})
  }))

  const appTheme = createTheme({
    typography : {
      fontSize : 15,

    },
    components : {
    },
    palette : {

    }
  })
function App() {

  return (
    <ThemeProvider theme={appTheme}>
          <Container maxWidth="md">
      <Stack spacing={3}>
        <Button startIcon={
        <AddAlarm color='success' fontSize='large'/>} variant='contained'>Hi Everyone</Button>
    {/* renders the entire page back to default */}
        <CssBaseline/>
        <Button variant="contained">Hello world</Button>
        <AddAlarmIcon color='warning' fontSize='medium'/>
        {/* Rather than raw CSS, we can use styling properties from either the application defined theme of MUI default theme */}
        <Slider sx={(theme)=>({
          width : theme.spacing(10)
        })}/>
        <CustomSlider error/>
      </Stack>
    </Container>
    </ThemeProvider>
  )
}

export default App











        {/* <Slider disabled={true} sx={{
          color : "success.dark",
          ".MuiSlider-rail" : {
            backgroundColor : "error.light"
          },
          ".MuiSlider-thumb" : {
            backgroundColor : 'secondary.main'
          },
          ".MuiSlider-track" : {
            backgroundColor : "warning.dark"
          },
          "&:hover" : {
            backgroundColor : "success.light"
          },
          "&.Mui-disabled .MuiSlider-thumb" : {
            backgroundColor : "warning.light"
          },
          "&.Mui-disabled .MuiSlider-track" : {
            backgroundColor : "warning.dark"
          },
        }}/> */}
