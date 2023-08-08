import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

function TotalDisplayField({ balance }) {
  return (
    <div>
      <TextField
        id="filled-read-only-input"
        label="Total Amount"
        InputProps={{
          readOnly: true,
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
        value={balance}
        sx={{
          width: '300px',
        }}
      />
    </div>
  );
}

export default TotalDisplayField;
