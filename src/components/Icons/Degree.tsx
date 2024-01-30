const Degree = ({ temp }: { temp: number }): JSX.Element => (
  <>
    <span data-testid="degree">
      {temp}
      <sup>o</sup>C
    </span>
  </>
)

export default Degree
