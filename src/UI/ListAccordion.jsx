import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TransactionList from '../components/TransactionList';
export default function ListAccordion() {
  return (
    <div>
      <Accordion
        sx={{
          width: '300px',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography component="div">Transaction List</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="div">
            <TransactionList />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
