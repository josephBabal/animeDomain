// utils.ts
export const abbreviateDate = (dateString: string): string => {
  const date = new Date(dateString);
  const monthAbbreviation = date.toLocaleString('en-US', { month: 'short' });
  const day = date.getDate();
  const year = date.getFullYear();
  
  return `${monthAbbreviation} ${day}, ${year}`;
  };
  