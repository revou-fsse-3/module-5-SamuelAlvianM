const Degree = ({ temp }: { temp: number }): JSX.Element => (
  <>
    <span role="degree">
      {temp}
      <sup>o</sup>C
    </span>
  </>
)

export default Degree
