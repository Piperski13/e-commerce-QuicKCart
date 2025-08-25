export function showAddedToCartFeedback(setCheckmark, timeoutRef) {
  setCheckmark(true);

  if (timeoutRef.current) {
    clearTimeout(timeoutRef.current);
  }

  timeoutRef.current = setTimeout(() => {
    setCheckmark(false);
    timeoutRef.current = null;
  }, 2000);
}
