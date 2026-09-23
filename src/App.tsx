import './App.css'
import {Button, CssBaseline, Container, Stack, Slider, styled, type SliderProps, createTheme, ThemeProvider, type ButtonOwnProps, RadioGroup, FormControl, FormControlLabel, Radio, useColorScheme} from '@mui/material'
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import {AddAlarm} from '@mui/icons-material'
import {green, yellow} from "@mui/material/colors"

const appTheme = createTheme({
  colorSchemes : {light : true, dark : true},
  components : {
    MuiButton : {
      defaultProps : {
        variant : "contained",
        color : 'success',
        size : 'small',
        sx : {
          width : '200px'
        }
      },
      styleOverrides : {
        root : {
          backgroundColor : yellow[700],
          variants : [
            {
              props : {variant : 'italic'},
              style : {
                fontSize : '20px',
                fontStyle : 'Italic'
              }
            },
            {
              props : (props : ButtonOwnProps) => props.variant == 'size50',
              style : {
                color : green[600],
                fontSize : '50px',
                fontWeight : 'bolder',
                border : `10px dashed ${yellow[900]}`
              }
            }
          ]
        }
      }
    },
    MuiSlider : {
      defaultProps : {
        max : 40,
        min : 5,
        name : 'First Slider',
        onChange : (e:Event, value)=>{
          console.log(value);
          const targetName = e.target as HTMLInputElement
          console.log(targetName.name);
          console.log(targetName.value);
        },
        step : 10,
        valueLabelDisplay : 'auto'
      },
      styleOverrides : {
        root : {
          backgroundColor : green[500]
        },
        track : {
          variants : [
            {
              props : {
                valueLabelDisplay : 'auto'
              },
              style : {
                color : yellow[500],
                fontSize : '200px'
              }
            }
          ]
        },
        rail : {

        },
        thumb : {

        }
      }
    }
  },
  typography : {

  },
  palette : {

  },
  spacing :2
})

const ThemeToggler = () => {
  const {mode, setMode} = useColorScheme()
  if(!mode)return null;
  return(
    <RadioGroup value={mode} onChange={(e) => {setMode(e.target.value as 'light'| 'system'| 'dark')}}>
      <FormControlLabel control={<Radio/>} value='light' label ="Light"/>
      <FormControlLabel control={<Radio/>} value='system' label ="System"/>
      <FormControlLabel control={<Radio/>} value='dark' label ="Dark"/>
    </RadioGroup>
  )
}

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
function App() {

  return (
    <ThemeProvider theme={appTheme}>
      <Container maxWidth="md">
        <Stack spacing={3}>
          {/* <Button startIcon={
          <AddAlarm color='success' fontSize='large'/>} variant='contained'>Hi Everyone</Button> */}
      {/* renders the entire page back to default */}
          <CssBaseline/>
          {/* <Button variant="contained">Hello world</Button>
          <AddAlarmIcon color='warning' fontSize='medium'/> */}
          {/* Rather than raw CSS, we can use styling properties from either the application defined theme of MUI default theme */}
          {/* <Slider sx={(theme)=>({
            width : theme.spacing(10)
          })}/> */}
          <ThemeToggler/>
          {/* <CustomSlider error/>
          <Button>Testing Theme Customization</Button>
          <Button variant='italic'>Testing Custom Variant Customization with italic Textstyle</Button>
          <Button variant='size50'>Testing Custom Variant Customization with size 50</Button> */}
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
