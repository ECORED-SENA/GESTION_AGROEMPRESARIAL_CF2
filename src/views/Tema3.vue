<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Estados financieros
    .row.justify-content-center
      .col-lg-10
        .row
          .col-lg-7
            p Toda la información registrada en los comprobantes de contabilidad, alimenta una base de datos contenida en el software contable, de tal manera que se generen informes de diversos tipos y acordes con las necesidades del usuario de la información. Los Estados Financieros se erigen entonces como un tipo de informe de propósito general y de carácter obligatorio para reflejar el resultado de la operación y la situación financiera del negocio.
            p La información financiera no puede ser interpretada si no se consolida en documentos de menor tamaño, además, existe información confidencial que no debe ser conocida por terceros ajenos a la empresa. Tal es el caso de fórmulas secretas en los bienes producidos, los proveedores a los que se les compra a un mejor precio, o los sistemas implementados para lograr ventajas competitivas. 
          .col-lg-5(data-aos="fade-left")
            img(src='@/assets/curso/tema3/img1.svg', alt='Texto que describa la imagen')
    .row.justify-content-center.mt-5
      .col-lg-8
        .row.colort2222.p-4.sombra
          .col-lg-2
            img.tamimg1(src='@/assets/curso/tema3/ico1.svg', alt='Texto que describa la imagen')
          .col-lg-10
            p.text-white Toda empresa obligada a llevar contabilidad debe publicar los estados financieros a cada cierre de año. Esto búsqueda una política de transparencia mercantil, lo que implica registrar ante la cámara de comercio o la superintendencia correspondiente, los estados financieros de propósito general y sus notas aclaratorias.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Tipos
    .row
      .col-lg-6
        p Las normas internacionales de información financiera exigen para su aplicación, la preparación de 4 estados financieros básicos:
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Situación financiera.

          li 
            .lista-ol--cuadro__vineta
              span 2
            | Resultado del ejercicio.

          li 
            .lista-ol--cuadro__vineta
              span 3
            | Cambios en el patrimonio.

          li 
            .lista-ol--cuadro__vineta
              span 4
            | Flujos de efectivo.   
      .col-lg-6(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img2.png', alt='Texto que describa la imagen')
    p.mt-5 Todos ellos complementados de forma integral por las revelaciones que aportan información cualitativa que enriquece el análisis.
    p En el caso de las <strong>microempresas</strong>, sólo se exigen los dos primeros, situación que no resulta descabellada puesto que los cambios en el patrimonio y flujos de efectivo pueden ser elaborados a partir de la medición de variaciones de estos. Por ello, para simplificar la gestión administrativa, solo se les obliga la preparación de aquellos que contienen la información base para los demás.
    p Observemos los diversos tipos de estados financieros y una breve definición de cada uno de ellos.
    .row.bg3  
      .row.justify-content-center
        .col-lg-6
          ImagenInfografica.color-acento-contenido.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema3/img3.svg', alt='Texto que describa la imagen')
            .tarjeta.color-secundario.p-3(x="31%" y="26%" numero="+")
              .h5.mb-2 De propósito general

              p Aquellos que son de estricto cumplimiento para los obligados a llevar contabilidad; cada estándar describe los procedimientos, estructura, y requerimientos mínimos de información a revelar. Su periodicidad es anual, por lo que deben elaborarse al cierre del año y ser aprobados por los propietarios de la empresa para ser publicados a la población en general.
            .tarjeta.color-secundario.p-3(x="100%" y="26%" numero="+")
              .h5.mb-2 De propósito especial
              p Obedecen a las necesidades particulares de la administración de cada empresa, debido a ello pueden existir un sin número de variaciones difíciles de estandarizar. La normativa no los prohíbe, por lo que su aplicación puede funcionar como un sistema complementario, sin embargo, no cuentan con especificaciones técnicas o legales a seguir, por lo que su elaboración se encuentra restringida únicamente al cumplimiento de los principios fundamentales de contabilidad.
            .tarjeta.color-secundario.p-3(x="100%" y="45%" numero="+")
              .h5.mb-2 De apertura
              p Se elabora en la fecha de constitución de la sociedad, debido a que no hay más periodos para presentar, no cumple con el principio de comparabilidad, lo que restringe su utilidad a propósitos internos, como contar con un punto de partida para registrar los hechos económicos.
            .tarjeta.color-secundario.p-3(x="100%" y="59%" numero="+")
              .h5.mb-2 De periodos intermedios
              p Involucra cualquier estado financiero que abarque fracciones del periodo de tiempo que comprende el ciclo operativo. Suelen ser solicitadas por las entidades financieras para contar con una visión del negocio más reciente, sin embargo no tienen la formalidad ni deben cumplir con la totalidad de los requerimientos legales, puesto que no son contemplados por la legislación.
            .tarjeta.color-secundario.p-3(x="100%" y="75%" numero="+")
              .h5.mb-2 De costos
              p Uno de los informes de propósito especial de mayor popularidad, permite evaluar el costo de producción durante un periodo de tiempo determinado. La forma en la que calcula el valor implica medir los inventarios iniciales, en proceso y finales a través de la medición de los componentes del costo: materia prima, mano de obra y otros costos indirectos de fabricación.
            
            .tarjeta.color-secundario.p-3(x="31%" y="45%" numero="+")
              .h5.mb-2 De situación financiera
              p Presenta la situación patrimonial de la empresa en una fecha determinada, como una fotografía de los bienes y deudas poseídos a cierre de año.

            .tarjeta.color-secundario.p-3(x="31%" y="59%" numero="+")
              .h5.mb-2 De resultados

              p Presenta todos los ingresos, costos y gastos que genero o en los que incurrió la empresa durante un periodo de tiempo determinado, que suele ser del 1 de enero al 31 de diciembre de cada año.
            .tarjeta.color-secundario.p-3(x="31%" y="75%" numero="+")
              .h5.mb-2 De cambios en el patrimonio
              p Detalla las diferencias surgidas en las cuentas de patrimonio, lo que incluye las variaciones de las utilidades, reservas o capital social.
            .tarjeta.color-secundario.p-3(x="31%" y="93%" numero="+")
              .h5.mb-2 De flujos de efectivo

              p Discrimina las fuentes de obtención del efectivo así como los usos que se le dieron, categorizándolos entre operación, inversión y financiación.
      
    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Estructura
    p Como se ha mencionado, el estado de situación financiera y el estado de resultados requieren atención especial, debido a que son información relevante para la toma de decisiones.
    p A continuación, se presenta una guía de preparación, donde se resaltan elementos clave para analizar en orden de comprender su lenguaje.
    ol.lista-ol--cuadro.lista-ol--separador.mt-5
      li 
        .lista-ol--cuadro__vineta
          span 
        h4 Estado de situación financiera
    p Definamos <strong>Situación Financiera</strong> como un consolidado de bienes y deudas de la organización. Así, se presenta a nivel de detalle los elementos que componen sus activos, pasivos y patrimonio. En este punto toma especial relevancia la dinámica de la partida doble, puesto que este estado es en esencia el cumplimiento de la igualdad que se evidencia en la siguiente ecuación:
    .row.justify-content-center.mt-5
      .col-lg-4.colort3.p-3
        .row.justify-content-center
          .col-lg-8.colort33
            p.text-center <strong>Activo = Pasivo + Patrimonio</strong>
    .row.justify-content-center.mt-5
      .col-lg-8
        p.text-center La Estructura general del Estado de Situación Financiera suele tomar alguna de las formas que vemos en la siguiente figura:
    .row.justify-content-center.mt-4
      .col-lg-6
        img(src='@/assets/curso/tema3/img4.svg', alt='Texto que describa la imagen')
    .row.mt-5
      .col-lg-1
      .col-lg-4
        .titulo-sexto.color-acento-botones
          h5 Figura 6
          span  Estructura del estado de situación financiera
        img(src='@/assets/curso/tema3/img5.svg', alt='Texto que describa la imagen')
      .col-lg-1
      .col-lg-4.mt-2
        p Sin importar la disposición y forma de presentar la información, el principio contable siempre se cumple, el valor total del activo será igual al valor total del pasivo más el patrimonio. Lo anterior se sustenta en el propósito del informe es plasmar en este informe la totalidad de los bienes y propiedades poseídas por la sociedad, obtenidos por medio de financiación con terceros, ubicados en el pasivo, como los bancos, proveedores que venden a crédito o acreedores varios, o por medio de la reinversión de las utilidades obtenidas en el ejercicio de la operación, en cuyo caso los titulares de la deuda serán los socios o accionistas, quienes podrán disponer de esos excedentes a través de los dividendos.
    p.mt-4 Las cuentas que componen cada una de las tres clases contables presentadas suelen coincidir en cualquier tipo de empresa, sin importar su actividad o tamaño, se presentan a modo de referencia, los rubros que se espera identificar en cada una de ellas son:
    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Tabla 5
          span   Cuentas por clase contable
        .tabla-a.color-primario.mb-5 
          table
            thead
              tr
                th Activos (poseídos)
                th Pasivos (por pagar)
                th Patrimonio
            tbody
              tr
                td.text-center Efectivo
                td.text-center Obligaciones financieras
                td.text-center Capital social
              tr
                td.text-center Inversiones
                td.text-center Proveedores
                td.text-center Reservas
              tr
                td.text-center Inventarios
                td.text-center Cuentas por pagar
                td.text-center Utilidades
              tr
                td.text-center Cuentas por cobrar
                td.text-center Nominas
                td 
              tr
                td.text-center Propiedades
                td.text-center Impuestos
                td 
    .row.justify-content-center.mt-5
      .col-lg-8.sombra
        .row.mt-4
          .col-lg-1
          .col-lg-5
            p La presentación del estado financiero consiste en revelar cada uno de estos rubros con su saldo a una fecha de corte, de tal forma que la sumatoria de todos indique el valor total del activo, pasivo y patrimonio. Adicionalmente, se suele aplicar una separación adicional, separando activos y pasivos en corrientes y no corrientes.
          .col-lg-4
            img(src='@/assets/curso/tema3/img6.png', alt='Texto que describa la imagen')
          .col-lg-1
    .row.justify-content-center.mt-5
      .col-lg-10
        .row
          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema3/ico2.svg' alt='AvatarTop')
              .tarjeta.color-acento-contenido
                .p-4
                  h4 Activo corriente
                  p Se puede hacer uso de él de manera inmediata o en un plazo inferior a un año, lo que implica convertirlo en efectivo para su uso. Así, las cuentas bancarias se consideran corrientes porque suele poderse utilizar de forma ágil.
          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema3/ico3.svg' alt='AvatarTop')
              .tarjeta.color-acento-contenido
                .p-4
                  h4 Activo no corriente
                  p.mb-4 Se espera disponer de ellos durante varios años antes de convertirlo en efectivo (a través de su venta, por ejemplo) Por ejemplo, un vehículo o una maquinaria.
                  .row.mb-3
        .row
          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema3/ico4.svg' alt='AvatarTop')
              .tarjeta.color-acento-contenido
                .p-4
                  h4 Pasivo corriente
                  p El pago de una obligación que debe efectuarse en un periodo menor a un año desde la fecha informada.
          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema3/ico5.svg' alt='AvatarTop')
              .tarjeta.color-acento-contenido
                .p-4
                  h4 Pasivo no corriente
                  p.mb-4 Se conservarán como deuda durante más de un ciclo productivo; es decir, más allá de un año.
                  .row.mb-3
    p.text-center.mt-4 A continuación se presenta un ejemplo estado de situación financiera donde se puede comprender la teoría recién descrita:
    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5.text-small Tabla 6
          span.text-small  Ejemplo de estado de situación financiera
        .tabla-a.color-primario.mb-5 
          table
            thead
              tr
                <th colspan="3"> EMPRESA ABC S.A.S.<br>NIT: 123.456.789<br>Estado de Situación Financiera a Diciembre de Cifras en Pesos Colombianos</th>
            tbody
              tr
                td 
                td.text-center 2021
                td.text-center 2020
              tr.c1
                td.text-center <strong>Activos</strong>
                td 
                td 
              tr.c2
                td.text-center Activos corrientes
                td 
                td 
              tr
                td.text-center Efectivo y equivalentes al efectivo
                td.text-center 11.825.400
                td.text-center 6.848.200
              tr
                td.text-center Cuentas por cobrar
                td.text-center 7.125.000
                td.text-center 6.700.000
              tr
                td.text-center Inventarios
                td.text-center 14.860.000
                td.text-center 12.500.000
              tr
                td.text-center <strong>Activos corrientes total</strong>
                td.text-center <strong>14.860.000</strong>
                td.text-center <strong>12.500.000</strong>
              tr.c2
                td.text-center Activos no corrientes 
                td 
                td 
              tr
                td.text-center Maquinaria
                td.text-center 93.000.000
                td.text-center 60.000.000
              tr
                td.text-center Oficina
                td.text-center 185.000.000
                td.text-center 185.000.000
              tr
                td.text-center Vehículo
                td.text-center 30.200.000
                td.text-center 30.200.000
              tr
                td.text-center <strong>Activos no corrientes totales</strong>
                td.text-center <strong>308.200.000</strong>
                td.text-center <strong>275.200.000</strong>
              tr.c3
                td.text-center <strong>Total activos</strong>
                td.text-center <strong>327.150.400</strong>
                td.text-center <strong>288.748.200</strong>
              tr.c1
                td.text-center <strong>Patrimonio y pasivos </strong>
                td 
                td 
              tr
                td.text-center Pasivos
                td 
                td 
              tr.c2
                td.text-center Pasivos corrientes
                td 
                td   
              tr
                td.text-center Créditos de consumo
                td.text-center 1.130.000
                td.text-center 10.064.675
              tr
                td.text-center Tarjetas de Crédito
                td.text-center 650.000
                td.text-center 500.000
              tr
                td.text-center Impuesto de renta por pagar
                td.text-center 490.668
                td.text-center 0
              tr
                td.text-center <strong>Pasivos corrientes totales</strong>
                td.text-center <strong>2.270.668</strong>
                td.text-center <strong>10.564.675</strong>
              tr.c2
                td.text-center Pasivos no corrientes
                td 
                td 
              tr
                td.text-center Crédito hipotecario
                td.text-center 29.310.600
                td.text-center 36.190.525
              tr
                td.text-center <strong>Pasivos no corrientes totales</strong>
                td.text-center <strong>29.310.600</strong>
                td.text-center <strong>36.190.525</strong>
              tr.c3
                td.text-center <strong>Total pasivos</strong>
                td.text-center <strong>31.581.268</strong>
                td.text-center <strong>46.755.200</strong>
              tr.c2
                td.text-center Patrimonio 
                td 
                td 
              tr
                td.text-center Capital Social 
                td.text-center 190.000.000
                td.text-center 190.000.000
              tr
                td.text-center Reservas
                td.text-center 25.000.000
                td.text-center 20.000.000
              tr
                td.text-center Utilidad del ejercicio
                td.text-center 48.576.132
                td.text-center 20.993.000
              tr
                td.text-center Utilidades de ejercicios anteriores
                td.text-center 31.993.000
                td.text-center 11.000.000
              tr
                td.text-center <strong>Patrimonio total</strong>
                td.text-center <strong>295.569.132</strong>
                td.text-center <strong>241.993.000</strong>
              tr.c3
                td.text-center <strong>Total de patrimonio y pasivos</strong>
                td.text-center <strong>327.150.400</strong>
                td.text-center <strong>288.748.200</strong>
    .row.justify-content-center.mt-4
      .col-lg-10
        .row
          .col-lg-7
            p La elaboración del <strong>Estado de Resultados</strong> resulta esencialmente la misma del estado de situación financiera, se presenta de forma vertical incluyendo los ingresos y egresos en los que incurrió la empresa hasta llegar a una utilidad o pérdida del ejercicio.
            p La forma en la que se recomienda presentar este informe es: primero los ingresos costos y gastos asociados de forma directa con la operación. Son aquellos que surgen en el desarrollo normal de los negocios de la empresa. Posteriormente se incluyen otros ingresos y gastos no operativos, y el valor de los impuestos que acarrea esta utilidad.
          .col-lg-5(data-aos="fade-left")
            img(src='@/assets/curso/tema3/img7.svg' alt='AvatarTop')
    ol.lista-ol--cuadro.lista-ol--separador.mt-5
      li 
        .lista-ol--cuadro__vineta
          span 
        h4 <strong>Informe de resultados</strong>
    p.mt-4 A diferencia de la situación financiera, en el informe de Estado de Resultados, los ingresos y egresos se acumulan durante un periodo de tiempo determinado y se reinician al comienzo del siguiente periodo. De esta forma se mide la gestión de la organización durante intervalos comparables que permitan analizar el rendimiento y su evolución. 
    p Así, para elaborar un estado de resultados, se deben sumar todas las operaciones que representen un ingreso o gasto en ese periodo, y reflejar de forma consolidada.
    img.mt-4(data-aos="fade-up")(src='@/assets/curso/tema3/img8.png' alt='AvatarTop')
    p.mt-4 Al final del ejercicio, la utilidad resultante al sumar todos los ingresos y restar todos los costos y gastos, se trasladará al patrimonio para que los accionistas dispongan de ella. El siguiente ejemplo presenta un estado de resultados en el que se evidencia una utilidad del ejercicio igual a la que se presentó en la situación financiera previa, de esta forma se materializa el traslado al que se hace mención en el presente apartado.
    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5.text-small Tabla 7
          span.text-small   Ejemplo de estado de resultados
        .tabla-a.color-primario.mb-5 
          table
            thead
              tr
                <th colspan="3"> EMPRESA ABC S.A.S.<br>NIT: 123.456.789<br>Estado de Resultados a Diciembre de Cifras en Pesos Colombianos</th>
            tbody
              tr
                td.text-center <strong>Resultado de periodo</strong> 
                td.text-center <strong>2021</strong>
                td.text-center <strong>2020</strong>
              tr.c1
                td.text-center <strong>Ingresos de actividades ordinarias</strong>
                td.text-center <strong>87.770.000</strong>
                td.text-center <strong>51.100.000</strong>
              tr
                td.text-center Ventas de insumos agrícolas
                td.text-center 87.770.000
                td.text-center 51.100.000
              tr
                td.text-center <strong>Costos de venta</strong>
                td.text-center <strong>26.149.600</strong>
                td.text-center <strong>22.640.000</strong>
              tr.c2
                td.text-center <strong>Ganancia bruta</strong>
                td.text-center <strong>61.620.400</strong>
                td.text-center <strong>28.460.000</strong>
              tr
                td.text-center <strong>Gastos operativos</strong>
                td.text-center <strong>3.391.600</strong>
                td.text-center <strong>1.886.000</strong>
              tr
                td.text-center Gastos administrativos
                td.text-center 1.191.600
                td.text-center 736.000
              tr
                td.text-center Gastos de ventas
                td.text-center 2.200.000
                td.text-center 1.150.000
              tr.c2
                td.text-center <strong>Ganancia ordinaria</strong>
                td.text-center <strong>58.228.800</strong>
                td.text-center <strong>26.574.000</strong>
              tr
                td.text-center Ingresos por rendimientos financieros
                td.text-center 838.000
                td.text-center 419.000
              tr.c1
                td.text-center <strong>Otros Costos y Gastos </strong>
                td 
                td 
              tr.c2
                td.text-center <strong>Ganancia antes de impuestos</strong>
                td.text-center <strong>59.066.800</strong>
                td.text-center <strong>26.993.000</strong>
              tr
                td.text-center Ingreso (gasto) por impuestos
                td.text-center 10.490.668
                td 
              tr.c2
                td.text-center <strong>Ganancia (pérdida) del Ejercicio</strong>
                td.text-center <strong>48.576.132</strong>
                td.text-center <strong>20.993.000</strong>
    p.mt-4.text-center A modo de orientación, los gastos se discriminan entre administración y ventas:
    .row.justify-content-center
      .col-lg-10
        .row.mb-5
          .col-md-4.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/ico1.png' alt='AvatarTop')

              .tarjeta.color-primario.sombra
                .p-4
                  h5 Gastos de administración
                  p Incluye rubros variados como el arriendo de las oficinas, el salario del gerente y su secretaria, los honorarios de los asesores jurídicos o financieros, entre otros.
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/ico2.png' alt='AvatarTop')

              .tarjeta.color-primario.sombra
                .p-4
                  h5 Costos
                  p Son todas aquellas erogaciones relacionadas de forma directa con la producción o adquisición de los bienes dispuestos a la venta.
                  p <strong>Por ejemplo</strong>, los insumos necesarios para la alimentación o reproducción del ganado, así como los envases o etiquetas que se usan para marcar el producto.
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema3/ico3.png' alt='AvatarTop')

              .tarjeta.color-primario.sombra
                .p-4
                  h5 Gastos
                  p Se relacionan de forma directa con el área comercial. Por ejemplo, los salarios de los vendedores, sus comisiones o las expensas por publicidad.

</template>

<script>
export default {
  name: 'Tema3',
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
.tarjeta.color-secundario
  background-color: #FFFFFF
  border: solid 4px #CED371
.tarjeta.color-acento-contenido
  background-color: #EDD5DC
.tarjeta.color-acento-contenido *
  color: #12263F
.tarjeta.color-primario
  background-color: #F3F4DB
</style>
