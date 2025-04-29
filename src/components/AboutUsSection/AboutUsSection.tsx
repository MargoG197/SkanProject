import CarouselCard from "../cards/CaruselCard/CarouselCard"





const AboutUsSection = () => {
  
  const icons  = ['../../../../src/icons/clock.svg', '../../../../src/icons/magnifier.svg', '../../../../src/icons/keyHole.svg', '../../../../src/icons/clock.svg', '../../../../src/icons/magnifier.svg', '../../../../src/icons/keyHole.svg']
  const text = [
    'Высокая и оперативная скорость обработки заявки',
    'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос',
    'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству',
    'Высокая и оперативная скорость обработки заявки',
    'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос',
    'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству']
  
  return (
    <div
    style={{
      display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '1400px',
        alignItems:'flex-start'
    }}
    >
      <h1
        style={{
          fontWeight: '900',
          fontSize: '45px',
          textDecoration: 'uppercase'
        }}
      >Почему именно мы</h1>
      <div
        style={{
          display: 'flex',
          width: '100%',
          minHeight: '280px',
          alignItems: 'center',
          justifyContent:'space-around'
        }}>
        <img src='../../../src/icons/shevron.svg' />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '1270px',
            overflow: "hidden",
            gap: '30px',
            minHeight: '280px',
            alignItems: 'flex-start',
            padding: '5px 5px',
        }}
        >
            {text.map((item, ind) => (
            <CarouselCard text={item} svg={`${icons[ind]}`} />
          ))}
        </div>
        <img src='../../../src/icons/shevron.svg' style={{ transform: 'rotate(180deg)' }} />
      </div>
    </div>
)
}

export default AboutUsSection