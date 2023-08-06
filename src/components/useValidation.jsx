function useValidation() {
  let passValidate = (amountRef, discRef) => {
    console.log(amountRef, discRef);
    if (!amountRef || !discRef) {
      return false;
    } else {
      return true;
    }
  };

  return { passValidate };
}

export default useValidation;
