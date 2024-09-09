import {Box} from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function Main ({ children }) {
  return (
    <Box sx={{ mt: 12 }}>
      { children }
    </Box>
  )
}
