
type SeasonYearProps = {
  date?: string,
  season?: string,
}
const SeasonYear = ({ date, season }: SeasonYearProps) => {
  const abbreviateDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();

    return ` ${year}`;
  }

  return (
    <>
      {season && date &&
        <h3 className="text-xl lg:text-2xl font-extralight text-gray-300"> 
          {season.toUpperCase()} {abbreviateDate(date)} 
        </h3>
      }
    </>
  )
}

export default SeasonYear