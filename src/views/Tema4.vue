<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Tributaria
    .row
      .col-lg-6
        p Cualquier empresa que sea considerada productiva, bien sea por generar ingresos o por obtener una utilidad, debe aportar a la Nación de forma proporcional para garantizar que el Estado cuente con los recursos suficientes para brindar bienestar a la población.
        p Por regla general, las personas naturales o jurídicas contribuyen al desarrollo al país a través de tributos que reciben distintos nombres según cada situación. Impuestos, tasas, contribuciones, son solo algunos de los mecanismos diseñados por el Estado para apropiarse de la prosperidad del sector privado, de esta forma se logra una especie de equilibrio social, donde los que más ganen, sin importar su forma jurídica, aporten a aquellos menos afortunados.
        p Desde el ámbito tributario, las obligaciones que asumen los contribuyentes puede dividirse en dos grandes grupos, por un lado, las obligaciones formales, que involucran cumplir con trámites, suministros de información y todo tipo de labores que apoyen la gestión fiscal a través de tareas asociadas a la gestión en cualquier presentación, y por otra parte, existen las obligaciones sustanciales, que implican el desembolso de recursos, es decir, el pago de los impuestos de acuerdo con la normativa.
      .col-lg-6(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img1.png', alt='Texto que describa la imagen')
    .row.bg4  
      p.mt-4 Así, existe una relación complementaria entre deberes formales y sustanciales, unos cumpliendo con la generación de reportes o documentación, y otros con el pago de los valores allí descritos.
      p La siguiente imagen separa ambos tipos de obligaciones y presenta algunos ejemplos que serán retomados a mayor profundidad posteriormente.
      .row.justify-content-center.mt-5
        .col-lg-6
          img(src='@/assets/curso/tema4/img2.svg', alt='Texto que describa la imagen')
      .row.justify-content-center.mt-5
        .col-lg-10
          .cajon.color-acento-contenido.p-4.mb-4
            p Por norma general, cada tributo cuenta con un formulario diferente. Tanto los impuestos municipales como los departamentales y nacionales, cuentan con sistemas de liquidación manual o automática que se transcriben en los formularios contemplados en la legislación vigente. En este sentido, cualquier impuesto que desee cobrarse por una entidad pública, debe estar debidamente reglamentado a través de una norma que determine todos los elementos del tributo.
      p.mt-4 Todo tributo o impuesto debe contener una serie de elementos que garanticen su liquidación correcta y le permitan a cada persona determinar con claridad si cumple con todas las condiciones necesarias para ser responsable de este. Los siguientes conceptos siempre deben contemplarse para analizar si se es responsable y cuál será el impacto económico del mismo:
      
      SlyderB.mb-5.mt-5.p-5(:datos="datosSlyder")
      p.mt-4 Existen una infinidad de impuestos y obligaciones que recaen sobre las personas naturales y jurídicas en el país. Muchos de ellos obedecen a municipios, sectores económicos, actividades o productos específicos. Es por ello que resulta casi idílico listarlos todos sin omitir algunos en el camino. Para propósitos académicos se presentan algunos de los tributos más comunes, puesto que deben ser pagados por un amplio número de contribuyentes:
      TabsA.color-acento-contenido.mb-5.mt-4
        .tarjeta.color-acento-contenido--borde.p-4(titulo="Impuesto al Valor Agregado – IVA")
          h5 Impuesto al Valor Agregado – IVA
            .row.mt-4
              .col-lg-8
                p.mb-5 Tal vez uno de los más conocidos y que afecta a más personas naturales o jurídicas. Consiste en el cobro de una tarifa, generalmente del 19%, a valor de la venta de bienes y productos gravados con este impuesto. Representa una de las fuentes de recaudo más significativas para el Estado, puesto que salvo por la canasta familiar y algunos conceptos muy concretos, la inmensa mayoría de bienes y servicios en el comercio, están gravados con él.
              .col-lg-4
                img(src='@/assets/curso/tema4/img8.png', alt='Texto que describa la imagen')
            
        .tarjeta.color-acento-contenido--borde.p-4(titulo="Impuesto de renta")
          h5 Impuesto de renta
            .row.mt-4
              .col-lg-8
                p.mb-5 Grava las utilidades generadas por las personas naturales y jurídicas. Las tarifas son variadas, pero oscilan entre el 19 y el 37% para personas naturales, y entre el 31 y el 35% para las jurídicas ordinarias. Existen situaciones en las que se manejan tarifas diferentes, como es el caso de las entidades sin ánimo de lucro, pero suelen ser excepciones a la regla.
              .col-lg-4
                img(src='@/assets/curso/tema4/img9.png', alt='Texto que describa la imagen')
        .tarjeta.color-acento-contenido--borde.p-4(titulo="Impuesto predial")
          h5 Impuesto predial
            .row.mt-4
              .col-lg-8
                p.mb-5 Grava la existencia misma de un predio, por lo que la obligación sustancial recae sobre su titular o poseedor. Incluye tanto los terrenos como las construcciones y edificaciones que se hagan sobre ellos. La base gravable es el avalúo catastral y su tarifa varía entre municipios.
              .col-lg-4
                img(src='@/assets/curso/tema4/img10.png', alt='Texto que describa la imagen')
        .tarjeta.color-acento-contenido--borde.p-4(titulo="Impuesto predial")
          h5 Impuesto de industria y comercio
            .row.mt-4
              .col-lg-8
                p.mb-5 Su base gravable son todos los ingresos ordinarios y extraordinarios que perciben las personas naturales y jurídicas, principalmente por las actividades de tipo comercial, industrial y de servicios. La tarifa dependerá de la actividad económica según las reglas que determine cada municipio.
              .col-lg-4
                img(src='@/assets/curso/tema4/img11.png', alt='Texto que describa la imagen')
        .tarjeta.color-acento-contenido--borde.p-4(titulo="Impuesto predial")
          h5 Impuesto de vehículos 
            .row.mt-4
              .col-lg-8
                p.mb-5 El hecho generador es la tenencia de un vehículo automotor, y su base gravable es el valor comercial establecido por el ministerio de transporte. Las tarifas obedecen a disposiciones de carácter nacional, pero el recaudo le corresponde a los departamentos y distritos de todo el país.
              .col-lg-4
                img(src='@/assets/curso/tema4/img12.png', alt='Texto que describa la imagen')
                                          
      
  
</template>

<script>
export default {
  name: 'Tema4',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Sujeto activo',
        texto:
          'Agente recaudador del impuesto. Existen tributos de orden municipal como el industria y comercio o el predial, donde el sujeto activo es el municipio, otros de carácter departamental como el impuesto de vehículos, y otros de carácter nacional como la renta o el IVA. A nivel nacional, es la Dirección de Impuestos y Aduanas Nacionales – DIAN, quien se encarga de gestionar esta labor en la mayoría de los tributos.',
        imagen: require('@/assets/curso/tema4/img3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Sujeto pasivo',
        texto:
          'Persona natural o jurídica obligada a declarar y/o pagar el impuesto. También son llamados contribuyentes, pues aportan para el bienestar de la nación. Sobre ellos recae la obligación sustancial, y en la mayoría de los casos, las formales derivadas.',
        imagen: require('@/assets/curso/tema4/img4.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Hecho generador',
        texto:
          'Es la situación que configura el pago del impuesto; la condición que genera la imposición del tributo. Por ejemplo, en el impuesto de vehículos, el hecho generador es la posesión de uno, y en el predial, lo es tener una casa. Así, la obligación tributaria nace de esa condición, y a partir de ese momento la persona se convierte en sujeto pasivo.',
        imagen: require('@/assets/curso/tema4/img5.png'),
      },
      {
        titulo: 'Base gravable',
        texto:
          'Es el monto sobre el cual se debe liquidar el impuesto, retomando el impuesto de vehículos, la base será el avalúo del automotor establecido por la autoridad competente, mientras que en el predial, lo será el avalúo catastral del inmueble.',
        imagen: require('@/assets/curso/tema4/img6.png'),
      },
      {
        titulo: 'Tarifa',
        texto:
          'Es la tasa que se computa con la base gravable para determinar el valor del impuesto. El IVA, 19%, de un producto que vale $1.000 pagaría un impuesto de $190. Por lo que para comprar el bien, el usuario terminaría pagando $ 1.190.',
        imagen: require('@/assets/curso/tema4/img7.png'),
      },
    ],
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
  background-color: #EAEBD8
.slyder-b.mb-5.mt-5
  background-color: #E8E8E8
  border-radius: 20px
.slyder-b.mb-5.mt-5 h3
  font-size: 16px
.tarjeta.color-acento-contenido--borde
  background-color:#F7F8E9
  border: solid 4px #DEE8DF
.tabs-a__tab
  background-color:#E8E8E8
.cajon.color-acento-contenido
  background-color: #F3F4DB
</style>
