import names from './names';

export const renderSlides = () =>
names.map((person) => {
  return (
  <div>
    <h1>{person.name}</h1>
    <div><img className='image' alt='' src={person.src}/></div>
    <div className='text'>{person.text}</div>
  </div>
)});
export default renderSlides;