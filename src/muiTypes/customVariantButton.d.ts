 import '@mui/material'
 
 declare module '@mui/material/Button'{
    interface ButtonPropsVariantOverrides{
        italic : true,
        size50 : true
    }
}