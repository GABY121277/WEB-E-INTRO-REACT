import { Card } from './Tarjeta';

function App() {
  return (
    <>
      <Card
        nombre="Lucas"
        profesion="Chef"
        descripcion="Cualquiera puede cocinar"
        direccion="https://isu.edu.mx/wp-content/uploads/2022/08/Cuantos-anos-se-requieren-para-estudiar-la-carrera-de-Chef.jpg"
      />
      <Card
        nombre="Yuzuru"
        profesion="Patinador"
        descripcion="No patino para ser perfecto, patino para contar una historia"
        direccion="https://stillmedab.olympic.org/media/Images/OlympicOrg/Athletes/H/Hanyu_Yuzuru/Hanyu_Yuzuru_banner_2.jpg"
      />
      <Card
        nombre="Gabriela"
        profesion="Programadora"
        descripcion="La mejor manera de predecir el futuro es inventarlo"
        direccion="https://www.freelancinggig.com/blog/wp-content/uploads/2020/05/kelly-sikkema-YK0HPwWDJ1I-unsplash-1.jpg"
      />
    </>
  );
}

export default App;

