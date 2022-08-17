<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Empresas
    p Podemos definir el concepto de ‘empresa’ como: un organismo individual económico, porque interactúa con otros y con el ecosistema. Una empresa puede tomar muchas formas comerciales o jurídicas, pero sólo se considera como empresa si los elementos que la componen se enfocan a un mismo objetivo: suplir una necesidad de un mercado en específico y recibir una contraprestación para ella.
    img(src='@/assets/curso/tema1/img1.png', alt='Texto que describa la imagen')
    p.mt-4 Las empresas buscan aportar al ecosistema económico y, como recompensa, generar mayor valor para sus propietarios. Por ejemplo, si en un pueblo no hay tiendas de zapatos, aquel que invierta lo necesario para ofrecer este tipo de productos le otorgará la posibilidad de adquirir bienes de interés a sus habitantes y, a cambio, sus clientes le pagarán con recursos que generarán utilidades.
    .row.justify-content-center
      .col-lg-8.p-4.colort1
        p.text-center Una empresa resalta como agente protagónico en el mercado, porque además de aportar sus bienes o servicios, también genera empleo, suple necesidades y puede atraer más comercio.
    .row.justify-content-center.mt-4
      .col-lg-10
        .row
          .col-lg-6
            p Existen zonas exclusivamente comerciales debido al éxito de algunos negocios, y donde otros luego se unen esperando algo de esa prosperidad. Este fenómeno valoriza los terrenos, los hace más productivos y puede llevar a acrecentar los mercados locales gracias a la inversión de personas foráneas que vean oportunidades allí.
            p El Estado también se beneficia de estos organismos, debido a que existen impuestos con los que el gobierno obtiene recursos suficientes para invertir en proyectos de inversión social, infraestructura y otros. Al final, los impuestos que pagan las empresas se pueden transformar en hospitales, escuelas o parques que benefician a toda la población.
          .col-lg-6
            img(src='@/assets/curso/tema1/img2.png', alt='Texto que describa la imagen')
    p.mt-4 Muchos conceptos relacionados con las empresas están definidos en las leyes expedidas en Colombia. En este caso, veamos el código de comercio, que compila las normas relativas a la empresa y sus actividades mercantiles:
    img(src='@/assets/curso/tema1/img3.png', alt='Texto que describa la imagen')
    p.mt-4 El Estado también se beneficia de estos organismos, debido a que existen impuestos con los que el gobierno obtiene recursos suficientes para invertir en proyectos de inversión social, infraestructura y otros. Al final, los impuestos que pagan las empresas se pueden transformar en hospitales, escuelas o parques que benefician a toda la población.
    p Muchos conceptos relacionados con las empresas están definidos en las leyes expedidas en Colombia. En este caso, veamos el código de comercio, que compila las normas relativas a la empresa y sus actividades mercantiles:
    .col-lg-12.mt-4
      .cajon.color-acento-contenido.p-4.mb-4
        .row.justify-content-center
          .col-lg-11
            .row
              .col-lg-2.tam1
                img(src='@/assets/curso/tema1/img3.svg', alt='Texto que describa la imagen')
              .col-lg-10
                h5 ARTÍCULO 25. (EMPRESA - CONCEPTO).
                p Se entenderá por empresa toda actividad económica organizada para la producción, transformación, circulación, administración o custodia de bienes, o para la prestación de servicios. Dicha actividad se realizará a través de uno o más establecimientos de comercio (Código de Comercio, 1971, Artículo 25).
    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1  Clasificación
    p Las empresas se pueden clasificar según ciertos criterios, algunas de las categorías más utilizadas son las siguientes:
    .titulo-sexto.color-acento-botones.mt-5
      h5 Figura 1
      span  Clasificación de empresas
    img(src='@/assets/curso/tema1/img4.svg', alt='Texto que describa la imagen')
    p.mt-5 Veamos con más detalle esta clasificación en el siguiente recurso.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p Como se mencionó anteriormente, la ley 590 del 2000 clasificó las organizaciones en Colombia y el decreto 957 de 2019 reglamentó de forma este aspecto. La siguiente Tabla resume la información allí contenida, y ofrece un acercamiento al modelo de clasificación de empresas más utilizado por el gobierno nacional:
    .titulo-sexto.color-acento-botones.mt-5
      h5 Tabla 1
      span   Clasificación de las empresas según Decreto 957
    .tabla-a.color-primario.mb-5 
      table
        thead
          tr
            th.tamta Ingresos en UVT (unidades de valor tributario) de actividades ordinarias según sector económico

        tbody
          tr
            td <strong>Tamaño de la empresa / sector</strong>
            td <strong>Manufactura</strong>
            td <strong>Servicios</strong>
            td <strong>Comercio</strong>
          tr
            td <strong>Microempresa</strong>
            td Menores o iguales a 23.563.
            td Menores o iguales a 32.988.
            td Menores o iguales a 44.769.
          tr
            td <strong>Pequeña</strong>
            td Mayores a 23.563 y menores o iguales a 204.995.
            td Mayores a 32.988 y menores o iguales a 131.951.
            td Mayores a 44.769 y menores o iguales a 431.196.
          tr
            td <strong>Mediana</strong>
            td Mayores a 204.995 y menores o iguales a 1’736.565.
            td Mayores a 131.951 y menores o iguales a 483.034.
            td Mayores a 431.196 y menores o iguales a 2.160.692.
          tr
            td <strong>Grande</strong>
            td Mayores a 1’736.565.
            td Mayores a 483.034.
            td Mayores a 2.160.692.
    p <i>Nota. elaboración a partir del decreto 957 del Ministerio de Comercio, Industria y Turismo (2019).</i>
    .row.justify-content-center
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4
          p Con respecto a las UVT (Unidad de Valor Real), es de aclarar que es un sistema utilizado por el gobierno para mantener los valores actualizados a la situación económica del país, así el valor al que equivale una UVT se actualiza cada año a través de una norma. Para el año 2022, su valor es equivalente a $ 38.004. 
    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2  Clasificación
    p Contrario a la creencia popular, llevar a cabo una actividad productiva no solo requiere contar con los recursos y el conocimiento para hacerlo. Existen obligaciones de tipo formal dispuestas en la legislación, dirigidas principalmente a otorgar la información necesaria al Estado para ejercer control y recaudar los tributos que le corresponden. Por lo anterior, se escucha frecuentemente en los medios de comunicación términos como “negocios informales” o “empleo informal”, lo que básicamente se resume en actividades que se desarrollan sin cumplir con las exigencias de ley.
    .row.mt-5
      .col-lg-7
        p En el caso de una empresa agropecuaria, cuyo fin último es la venta de bienes, entonces pertenece al ámbito comercial. La primera obligación es la formalización del establecimiento de comercio o la constitución de la sociedad, en este sentido, lo primordial es hacer uso de la clasificación de empresas de acuerdo al tipo societario: autónomas o sociedades. Cuando se habla de autónomo, se hace referencia al individuo o persona natural, sujeto de derechos y obligaciones, quien decide crear empresa a su nombre propio. Las personas que no crean una personería independiente para su negocio diferencian su patrimonio personal del de su negocio a través de la creación de un establecimiento de comercio. Para ello, es necesario dirigirse a la Cámara de Comercio de su municipio o región y solicitar su registro. Será necesario suministrar datos asociados con los bienes del negocio, como los siguientes:
        .col-lg-12
          ul.lista-ul--color
            li 
              i.fas.fa-check
              | Domicilio.
            li 
              i.fas.fa-check
              | Dirección de correo electrónico.
            li 
              i.fas.fa-check
              | Actividad económica. 
  
      .col-lg-5
        img(src='@/assets/curso/tema1/img5.png', alt='Texto que describa la imagen')
    p.mt-5 Uno de los datos más relevantes será su nombre comercial, que a diferencia de un negocio informal, registrándose en la cámara tendrá exclusividad, por lo que ninguna otra persona podrá hacer uso de este nombre. Para ello las cámaras de comercio de todo el país cuentan con bases de datos que contienen todos los nombres registrados, garantizando que otras personas no se aprovecharán del buen nombre de un negocio para explotarlo en otros lugares.
    .row.justify-content-center
      .col-lg-10
        .row
          .col-lg-6
            img(src='@/assets/curso/tema1/img6.png', alt='Texto que describa la imagen')

          .col-lg-6
            p En el caso de las sociedades, se debe formalizar su constitución, que podría asimilarse a su nacimiento.
            p Para ello, las personas que deciden emprender el negocio deberán reunirse y diseñar un acta de constitución, donde manifiesten estar de acuerdo en la creación de una empresa en la cual tendrán una participación proporcional a su aporte inicial. Así, por ejemplo:
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Cinco personas que aporten.

              li 
                i.fas.fa-check
                | Aporte (cada una): $100.000.

              li 
                i.fas.fa-check
                | Capital inicial (de la sociedad): $500.000.
              li 
                i.fas.fa-check
                | Participación (responsabilidad y poder de decisión): 20%
    .row.justify-content-center.mt-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4
          h4 Nota
          p los porcentajes y participaciones pueden variar en función de aquellos socios que aporten más o menos.
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El acta de constitución debe estar acompañada de un reglamento aplicable a la empresa, conocido como estatutos. En ellos se hace mención de las reglas concretas aplicables a la empresa, que siempre y cuando sean consonantes con la norma general, puede delimitar responsabilidades, determinar los mecanismos de elección del personal directivo, y detallar la participación de todos los miembros que en ella participan. Una vez se cuente con estos documentos, el trámite será similar al de las personas naturales, puesto que también será necesario suministrar la información aplicable a estas, pero adicionando el tipo de sociedad y las responsabilidades tributarias aplicables. Es decir, los impuestos que deberá declarar y pagar, así como las demás obligaciones propias de las sociedades.
    p.mt-4 Una vez constituida la empresa o el establecimiento de comercio, deberá renovarse su registro cada año, para garantizar su permanencia en la base de datos y el respaldo de las cámaras de comercio. El costo del registro y su renovación se encuentra asociado a los bienes que posea el negocio, así, a mayor cantidad de bienes declarados, mayor será el valor para pagar cada año.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.cajon.color-acento-contenido
  background-color: #ECEDDA
.bloque-texto-g__img
  left: 50%
.bloque-texto-g__texto
  right: 40%
</style>
