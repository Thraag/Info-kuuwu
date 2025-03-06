import Baner from "./components/Baner";
import Foco from "./components/Foco";
import Section from "./components/Section";

function App() {
  return (
    <div>
      <Baner />
      <Foco
        titulo="¿Y dónde partimos?"
        texto="Chile posee una rica tradición en la construcción, destacándose por más de un siglo. 
                Tras el terremoto de Valparaíso en 1906, se desarrollaron sistemas resistentes a las duras condiciones naturales del país.
                Esta fuerte relación con la arquitectura e ingeniería ha posicionado a Chile como referente mundial. 
                Su calidad en especialistas, obras y trabajadores ha sido reconocida por editoriales como Gustavo Gili. 
                Casa editorial arquitectónica de renombre considera a Chile y Japón entre los países de mayor interés arquitectónico 
                y constructivo del mundo."
      />
      <Foco
        titulo="¿Qué hacemos?"
        texto={
          <>
            Kuuwu se encarga de centralizar de manera rápida y sencilla
            servicios que son imperativos en el área de la construcción, tanto
            para personas que no son especialistas en el área como para los
            profesionales. Kuuwu une <strong>cuatro</strong> aspectos
            fundamentales que afectan cualquier proyecto, pequeño o grande:{" "}
            <strong>
              trabajo, contratación específica o general, venta de materiales e
              información.
            </strong>
            <br />
            <br />
            <span className="">
              Pero vamos por partes, porque tengo mucho que contarte.
            </span>
          </>
        }
      />
      <Section imageSrc="/img1.png" />
      <Foco
        titulo="Trabajo, adaptado a la construcción en Chile."
        texto={
          <>
            Kuuwu cuenta con más de <strong>34 categorías</strong> (en
            expansión) de trabajo, las cuales se dividen en 180 subcategorías,
            detallando por cada especialidad las subtareas propias de las
            partidas de construcción en obras o proyectos de reparaciones o
            construcciones habitacionales.
          </>
        }
      />
      <Section imageSrc="/img2.png" />
      <Foco
        titulo="¿Y como trabajador puedo especificar mis especialidades?"
        texto={
          <>
            Exactamente. En Kuuwu, al registrarte, podrás completar tu perfil
            como trabajador, indicando tus especialidades y subespecialidades.
            Además,{" "}
            <strong>
              podrás subir tus experiencias con fotos y descripciones.
            </strong>
            Así, podrás mostrar tu trayectoria, ser contactado por contratantes
            y recibir notificaciones cuando proyectos públicos sean publicados.
            Tendrás la opción de contactar{" "}
            <strong>
              directamente al contratante y enviar tu presupuesto para
              adjudicarte el proyecto.
            </strong>
          </>
        }
      />
      <Section imageSrc="/img3.png" />
      <Foco
        titulo="Suena interesante, pero ¿y los contratantes?"
        texto={
          <>
            Aquí es donde Kuuwu destaca por sobre cualquier otra aplicación, y
            la respuesta es la <strong>adaptabilidad.</strong>
            <br />
            <br />
            Verás, Kuuwu para los contratantes consta de dos flujos distintos
            que se adaptan a cada usuario. Por una parte, tenemos el{" "}
            <strong>flujo sencillo</strong>, fácil y rápido para personas
            ocupadas que necesitan orientación.{" "}
            <strong>Sin registrarte,</strong> en el buscador escribes lo que
            necesitas, ya sea la reparación de las baldosas de tu casa o un
            profesional en específico, y te mostraremos múltiples opciones.
          </>
        }
      />
      <Section imageSrc="/img4.png" />
      <Foco
        titulo="Se ve rápido, ¿entonces cómo sería el flujo avanzado?"
        texto={
          <>
            El flujo avanzado está orientado a personas que tengan experiencia o
            sean profesionales de la construcción. En pocas palabras,{" "}
            <strong>al levantar una propuesta</strong>, puedes seleccionar el
            profesional, elegir las subespecialidades que quieres que tenga en
            su perfil y definir el número de profesionales que necesitas con
            esas características. Con esto, los profesionales serán notificados
            y recibirás contactos y cotizaciones por la tarea que solicitas.
          </>
        }
      />
      <Section imageSrc="/img5.png" />
      <Foco
        titulo="¿A qué te refieres con vender materiales?"
        texto={
          <>
            Kuuwu también actúa como intermediario entre personas que quieren
            exponer sus materiales en venta y aquellos que buscan cotizar
            materiales para sus proyectos.
            <br />
            <br />
            En Chile existen más de 50.000 materiales de construcción de todo
            tipo: gravas, suelos, pegamentos, insumos, entre muchos más. En
            Kuuwu, puedes exponer tus materiales en tu perfil y ser contactado
            para cotizaciones y futuras ventas. Esto además de que{" "}
            <strong>no se necesita estar registrado</strong> para buscar y
            cotizar materiales de construcción.
          </>
        }
      />
      <Section imageSrc="/img6.png" />
      <Foco
        titulo="Mencionaste información, ¿usarás I.A.?"
        texto={
          <>
            No exactamente. En nuestra aplicación usamos un PNL (Procesamiento
            de Lenguaje Natural) al que llamamos KuBot. En términos generales,
            es una parte de nuestra web que te permitirá hacer consultas sobre
            construcción o dudas que tengas sobre el tema, desde preguntas
            sencillas como qué profesional necesito para reparar el marco de mi
            puerta, hasta consultas más avanzadas sobre rendimiento de
            materiales, normativas NCh de construcción, orientación en
            materiales para trabajos, costos directos de partidas de obras,
            gastos generales indirectos, entre otros.
          </>
        }
      />
      <Section imageSrc="/img7.png" />
      <Foco
        titulo="¿Y todos estos servicios están en la misma página?"
        texto={
          <>
            Así es, logramos{" "}
            <strong>centralizar todo en un mismo Dashboard</strong>, que irá
            mostrándote lo que solicites en el panel de la izquierda. En el
            mismo lugar, con la misma cuenta, podrás postular a proyectos, ver
            tus contrataciones con su control respectivo o elegir directamente a
            tus profesionales con la solicitud avanzada o sencilla. Como
            trabajador, podrás postular a proyectos enviando tu cotización,
            además de aparecer constantemente en las búsquedas de los
            contratantes. También podrás exponer o buscar materiales de
            construcción y, por último, orientarte con KuBot, haciéndole
            preguntas sobre el área de construcción.
          </>
        }
      />
      <Section imageSrc="/img8.png" />
    
      <Foco
        titulo="¡Mira! Tenemos una sorpresa de parte del equipo."
        texto={
          <>
            Gracias por tomarte el tiempo de leer este resumen de un trabajo en
            el que cuatro ingenieros hemos invertido nuestro esfuerzo. Sin embargo, aún me faltaron
            muchas cosas por mostrarte, como las cotizaciones que reciben los
            contratantes y lo sencillo pero acertado que quedaron los perfiles
            de los trabajadores, los cuales pueden revisar los contratantes.
            <br />
            <br />
            Dicho lo anterior, te tengo una buena noticia. <strong>Kuuwu esta regalando cuentas premium 
            para los primeros 1000 usuarios en www.kuuwu.com.</strong>  Estamos
            registrando a todos quienes quieran unirse a esta comunidad de
            profesionales. Te invito a no quedarte afuera, ¡los cupos se
            acabarán muy pronto!
          </>
        }
      />
      <Section imageSrc="/img9.png" />
    </div>
  );
}

export default App;
