import './App.css'
import {Button, CssBaseline, Container, Stack, Slider} from '@mui/material'
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import {AddAlarm} from '@mui/icons-material'

function App() {

  return (
    <Container maxWidth="md">
      <Stack spacing={3}>
        <Button startIcon={
        <AddAlarm color='success' fontSize='large'/>} variant='contained'>Hi Everyone</Button>
    {/* renders the entire page back to default */}
        <CssBaseline/>
        <Button variant="contained">Hello world</Button>
        <AddAlarmIcon color='warning' fontSize='medium'/>
        <Slider disabled={true} sx={{
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
          }
        }}/>
      </Stack>
    </Container>
  )
}

export default App
