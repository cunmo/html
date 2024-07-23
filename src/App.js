import logo from './logo.svg';
import style from  './App.less';
import { Carousel, Button } from 'antd'

const App = () => {
  const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#000',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <>
    <h3 className={style.container}>135435</h3>
      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <Button type="primary">Button</Button>
    </>

  );
}


export default App;
