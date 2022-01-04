import names from './names';

export const renderSlides = () =>
  names.map((person) => {
    return (
      <div className='slider-inside-component'>
        <div className='title'>{person.number}</div>
        <div className='text-cont'>
          <div className='subtitle'>{person.subtitle}</div>
          <div className='text'>{person.text}</div>
        </div>
      </div>
    )
  });
export default renderSlides;