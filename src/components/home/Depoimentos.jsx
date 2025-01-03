import '../../styles/global.css';
import '../../styles/home.css';
import OndaNavbar from '../navbar/OndaNavbar.jsx';
import { Carousel } from 'react-bootstrap';

function Depoimentos() {
  const reviewsMock = [
    {
      id: 1,
      nome: 'João Silva',
      titulo: 'Título do Depoimento',
      depoimento: 'O serviço foi incrível! Super recomendo para todos.',
      data: '01/01/2021',
    },
    {
      id: 2,
      nome: 'Maria Souza',
      titulo: 'Título do Depoimento',
      depoimento: 'O serviço foi incrível! Super recomendo para todos.',
      data: '01/01/2021',
    },
    {
      id: 3,
      nome: 'José Santos',
      titulo: 'Título do Depoimento',
      depoimento: 'O serviço foi incrível! Super recomendo para todos.',
      data: '01/01/2021',
    },
    {
      id: 4,
      nome: 'Ana Oliveira',
      titulo: 'Título do Depoimento',
      depoimento: 'O serviço foi incrível! Super recomendo para todos.',
      data: '01/01/2021',
    },
    {
      id: 5,
      nome: 'Pedro Sousa',
      titulo: 'Título do Depoimento',
      depoimento: 'O serviço foi incrível! Super recomendo para todos.',
      data: '01/01/2021',
    },
  ];

  return (
    <>
      {/*<Header></Header>*/}
      <OndaNavbar></OndaNavbar>

      <div className="depoimentos-body">
        <h1 className="depoimentos-title">Depoimentos</h1>

        <div className="depoimentos-descricao">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet urna nec felis gravida feugiat. Pellentesque metus lorem,
            sodales eget nisi sed, gravida bibendum eros. Phasellus vitae porta
            tellus. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Maecenas ultrices arcu lacus, in vulputate purus ultricies
            in. Nulla vestibulum commodo est vel egestas. Sed laoreet lacus sit
            amet velit vestibulum placerat. Aliquam maximus, elit non malesuada
            blandit, mauris lacus placerat metus, sed volutpat purus risus non
            libero. Proin sodales dapibus dictum. Duis laoreet sem a accumsan
            sagittis. Cras sapien purus, pretium nec pulvinar ac, scelerisque
            pharetra dui. Morbi arcu lorem, mollis quis lobortis ac, accumsan a
            nulla. Phasellus tempor, justo ut sollicitudin ullamcorper, ipsum
            turpis pretium sapien, ac gravida nunc lacus eget dui. Morbi a sem
            condimentum felis volutpat sodales id sed augue. Etiam turpis justo,
            blandit nec ex a, porta blandit turpis. Duis lacinia felis quis eros
            consectetur finibus. Etiam nisl est, auctor nec ex pretium,
            consequat dapibus urna. Curabitur pretium, turpis eu gravida mollis,
            nisl nibh sagittis neque, in scelerisque est elit blandit purus.
            Vestibulum est diam, consequat posuere felis eget, sodales gravida
            felis. Cras blandit justo erat, eget faucibus nibh aliquam sed.
            Integer tempus viverra pharetra. Ut lobortis pulvinar volutpat.
            Morbi congue sagittis leo et ornare. Curabitur pulvinar ut ante a
            vulputate. Sed a viverra ex, sed euismod sem. Morbi ac nulla
            fringilla, pharetra magna at, cursus enim. Pellentesque egestas
            lorem orci, dapibus consequat nunc ornare non. Nunc mi lectus,
            volutpat quis placerat a, tristique quis quam. Cras pretium neque at
            congue dictum. Vivamus quis risus non ante feugiat dignissim vitae
            non diam. Aliquam massa elit, tristique a velit in, accumsan
            bibendum dui.
          </p>
        </div>

        <div>
          {/* Carrossel dos depoimentos */}
          <Carousel>
            {reviewsMock.map((review) => (
              <Carousel.Item key={review.id}>
                <div className="depoimentos-carrossel">
                  <div className="depoimentos-details-header">
                    <div>
                      <h1 className="depoimentos-details-title">
                        {review.titulo}
                      </h1>
                      <h3 className="depoimentos-details-author">
                        {review.nome}
                      </h3>
                    </div>
                    <div className="depoimentos-details-data">
                      {review.data}
                    </div>
                  </div>

                  <div className="depoimentos-details-descricao">
                    <p>{review.depoimento}</p>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Depoimentos;
