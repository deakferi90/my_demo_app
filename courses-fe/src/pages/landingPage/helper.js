import names from './names';

export const renderSlides = () =>
names.map((person) => (
  <div>
    <h1>{person.name}</h1>
    <div>{person.model}</div>
    <div>{person.text}</div>
  </div>
));
export default renderSlides;