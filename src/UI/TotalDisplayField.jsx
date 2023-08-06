function TotalDisplayField({ balance }) {
  return (
    <div>
      <input type="text" disabled placeholder="Total Amount" value={balance} />
    </div>
  );
}

export default TotalDisplayField;
