import TextField from '@mui/material/TextField';

function TotalDisplayField({ balance }) {
  return (
    <div>
      <TextField
        id="filled-read-only-input"
        label="Total Amount"
        InputProps={{
          readOnly: true,
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
