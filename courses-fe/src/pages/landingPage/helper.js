import names from './names';
import panda from '../../icons/eper.png';

export const renderSlides = () =>
names.map((person) => {
  return (
  <div>
    <h1>{person.name}</h1>
    <div><img className='image' src={person.src}/></div>
    <div className='text'>{person.text}</div>
  </div>
)});
export default renderSlides;