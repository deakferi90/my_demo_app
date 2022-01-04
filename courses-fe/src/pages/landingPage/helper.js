import names from './names';

export const renderSlides = () =>
names.map((person) => {
  return (
  <div>
    <div>{person.title}</div>
    <div>{person.text}</div>
  </div>
)});
export default renderSlides;