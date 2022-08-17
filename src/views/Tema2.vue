<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Contabilidad
    .row.mt-5
      .col-lg-7
        p La administración adecuada de cualquier empresa requiere de conocimientos sobre cada una de sus operaciones, de lo contrario, la mayoría de las decisiones obedecen a creencias o intuiciones, lo que no permitiría la evolución esperada de cualquier empresa o negocio. La medición del crecimiento también es muy importante para tener claridad si se han alcanzado las expectativas o si el desarrollo se ha visto afectado por diversos factores. Una gestión adecuada demanda como mínimo:
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Comprender los elementos (involucrados con los recursos disponibles)
          li 
            .lista-ol--cuadro__vineta
              span 2
            | El costo de elaboración (o adquisición de los bienes o servicios que se esperan vender)

          li 
            .lista-ol--cuadro__vineta
              span 3
            | El precio de venta (que la gente está dispuesta a pagar para adquirirlos)
        p Es allí donde la contabilidad surge como una herramienta que permite registrar, medir y llevar control de todos estos elementos que pueden traducirse en dinero. Desde el capital inicial, la contabilidad ofrece el seguimiento sobre cómo se obtienen los recursos y en qué se destinan. Es gracias a ella que las empresas comprenden cuántos bienes poseen, cuántas deudas acarrean y cuál es el excedente que obtienen tras la operación. 
      .col-lg-5
        img(src='@/assets/curso/tema2/img1.png', alt='Texto que describa la imagen')
    .row.justify-content-center.mt-4
      .col-lg-10.colort2.p-3
        p.text-center Esta disciplina ha evolucionado para adaptarse a las necesidades del mercado actual, y su complejidad puede ser tan profunda como lo requiera cada emprendimiento o negocio. Todo establecimiento de comercio o sociedad se encuentra obligada a llevarla, puesto que no solo se erige como una de las principales herramientas de la gestión organizacional, sino que resulta ser un instrumento de control para las autoridades, que la pueden usar como prueba a favor o en contra de quien la lleva.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Cuentas contables
    p La aplicación de la contabilidad requiere el uso de cuentas contables; estas funcionan como secciones o categorías que contienen a su vez otras más pequeñas, podrían asimilarse como contenedores que tienen otros más pequeños en su interior, y así hasta el nivel de detalle que se desee. En un ambiente práctico, la categoría de cada rubro se determina por el número de dígitos, lo que significa que entre más dígitos contenga, más específica será.
    p A modo de ejemplo, la cuenta 1105 pertenece a una categoría superior, es decir a la 11, quien a su vez, pertenece a otra categoría: la 1. El siguiente diagrama resume esta mecánica de forma gráfica y de más fácil asimilación:
    .titulo-sexto.color-acento-botones.mt-5
      h5 Figura 2
      span   Mecánica de las cuentas contables
    .row.justify-content-center
      .col-lg-6
        img(src='@/assets/curso/tema2/img2.svg', alt='Texto que describa la imagen')
    p.mt-4 Como se observa, a mayor categoría, más cuentas se encuentran involucradas, de esta forma el nivel de detalle puede ser tan preciso como cada usuario de la información lo requiera. Ahora, la estructura dispuesta cumple con una jerarquía, la cual se presenta a continuación a través de un ejemplo.
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-botones.mt-5
          h5 Tabla 2
          span    Ejemplo de cuentas por categoría 
        .tabla-a.color-primario.mb-5 
          table
            thead
              tr
                th Categoría
                th Dígitos
                th Ejemplo

            tbody
              tr
                td Clase
                td 1
                td 2 (pasivo)

              tr
                td Grupo
                td 2
                td 23 (cuentas por pagar)

              tr
                td Cuenta
                td 4
                td 2335 (Costos y gastos por pagar)
              tr
                td Subcuenta
                td 6
                td 233540 (arrendamientos por pagar)
              tr
                td Auxiliar
                td 8
                td 23354005 (arrendamientos por pagar de inmuebles)
    .row
      .col-lg-7
        p Una vez se tiene clara la metodología en la que se hace uso de las cuentas contables, es fundamental entender el uso de la codificación, que es: el uso de números para identificar cada rubro.
        p La codificación (con números) es necesaria porque es mucho más práctico identificar la categoría superior haciendo uso de caracteres numéricos, en lugar de alfabéticos (letras). Entendiendo la mecánica descrita anteriormente, cualquier persona sin conocimientos muy profundos de contabilidad podrá comprender que la cuenta 1435, pertenece al grupo 14 de la clase 1.
        p El listado códigos aplicables para cada cuenta contable en Colombia fue presentado en el decreto 2650 de 1993, y con él se buscaba la estandarización de los códigos, de tal forma que el código signifique lo mismo en todas las empresas sin importar su actividad o ubicación geográfica en el país. Si bien es cierto, este decreto ya se encuentra derogado, los softwares de contabilidad suelen incluirlo a modo de referencia, y se recomienda su uso, porque a pesar de las modificaciones que ha sufrido la legislación, este sistema sigue siendo de gran utilidad y se considera uno de los pilares de la contabilidad en Colombia.
      .col-lg-5
        img(src='@/assets/curso/tema2/img3.png', alt='Texto que describa la imagen')
    .row.justify-content-center.mt-5
      .col-lg-8
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.tam12(src="@/assets/curso/tema2/ico1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 Para conocer el Decreto 2650 de 1993, lo invitamos a visitar el siguiente enlace: 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                    span Ir a sitio web
                    i.fas.fa-link
    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Principios de contabilidad
    p Para que la contabilidad cumpla con su función de informar y servir de sustento para la toma de decisiones, los entes emisores y reguladores de esta disciplina exigen el cumplimiento de una serie de requisitos para garantizar que los reportes a presentar reflejen la realidad económica de la organización. En este sentido, cada legislación o marco normativo puede exigir un listado de principios diferentes, sin embargo, la mayoría de las empresas en Colombia, al ser consideradas pequeñas o medianas empresas, deberán cumplir con los siguientes:
    .tarjeta.tarjeta--azul.p-4.mb-5.colort22
      SlyderA(tipo="b")
        .row.justify-content-center.mt-4
          .col-md-11.mb-4.mb-md-0
            .row
              .col-lg-5
                h4 1. Comprensibilidad
                p.mt-5 La información a presentar debe ser de fácil entendimiento para cualquier persona con conocimientos básicos en temas económicos y empresariales. Esto no debe confundirse con omitir información relevante por el simple hecho de que su complejiza su comprensión.
              .col-lg-7
                img(src='@/assets/curso/tema2/img4.png', alt='Texto que describa la imagen')
        .row.justify-content-center.mt-4
          .col-md-11.mb-4.mb-md-0
            .row
              .col-lg-5
                h4 2. Relevancia
                p.mt-5 Toda la información revelada en los informes y anexos debe ser relevante para los usuarios de ella. En este sentido, la información es relevante si puede influenciar en el juicio o la toma de decisiones de quien la estudia.
              .col-lg-7
                img(src='@/assets/curso/tema2/img5.png', alt='Texto que describa la imagen')
        .row.justify-content-center.mt-4
          .col-md-11.mb-4.mb-md-0
            .row
              .col-lg-5
                h4 3. Materialidad
                p.mt-5 La información es material si al omitir o presentar de forma equivocada, puede llevar a que se tomen malas decisiones por parte de los usuarios. Determinar la materialidad de una partida implica analizar su naturaleza y su cuantía, porque no es lo mismo equivocarse con una cuenta que presenta el dinero en efectivo, que con la que presenta las inversiones a largo plazo.
              .col-lg-7
                img(src='@/assets/curso/tema2/img6.png', alt='Texto que describa la imagen')
        .row.justify-content-center.mt-4
          .col-md-11.mb-4.mb-md-0
            .row
              .col-lg-5
                h4 4. Fiabilidad
                p.mt-5 Este principio indica que la información presentada debe estar libre de errores significativos, por lo que refleja la realidad económica de los hechos que involucra. Por otra parte es importante que no exista sesgo, es decir, que no se presente la información de tal forma a que induzca a la toma de una decisión predeterminada.
              .col-lg-7
                img(src='@/assets/curso/tema2/img7.png', alt='Texto que describa la imagen')
        .row.justify-content-center.mt-4
          .col-md-11.mb-4.mb-md-0
            .row
              .col-lg-5
                h4 5. Esencia sobre forma
                p.mt-5 Los hechos económicos deben revelarse cuando se presenten, así no se cuente con todos los soportes de tipo formal o legal. Así, por ejemplo, debe registrarse el inventario que se posea y esté disponible para la venta así la factura de compra aún no haya sido generada por el proveedor.
              .col-lg-7
                img(src='@/assets/curso/tema2/img8.png', alt='Texto que describa la imagen')
        .row.justify-content-center.mt-4
          .col-md-11.mb-4.mb-md-0
            .row
              .col-lg-5
                h4 6. Prudencia
                p.mt-5 Muchos eventos se ven afectados por un factor de incertidumbre, el criterio del preparador de la información deberá apuntar al escenario más discreto, esto implica no sobrevalorar los ingresos o los bienes o infravalorar los gastos o deudas.
              .col-lg-7
                img(src='@/assets/curso/tema2/img9.png', alt='Texto que describa la imagen')
        .row.justify-content-center.mt-4
          .col-md-11.mb-4.mb-md-0
            .row
              .col-lg-5
                h4 7. Integridad
                p.mt-5 Toda la información que surja producto de la operatividad del negocio y que sea considerada material o relevante, debe estar contenida en los informes y disponible para los usuarios a los que es dirigida. La omisión de datos o la inclusión de errores harán que se viole este principio.
              .col-lg-7
                img(src='@/assets/curso/tema2/img10.png', alt='Texto que describa la imagen')
        .row.justify-content-center.mt-4
          .col-md-11.mb-4.mb-md-0
            .row
              .col-lg-5
                h4 8. Comparabilidad
                p.mt-5 Aunque muchas veces se pase por alto, la información debe ser presentada de forma comparativa, de tal forma que sea posible medir la evolución de la empresa en un periodo de tiempo. Con ello se facilita identificar tendencias o variaciones que resulten significativas. De forma paralela, esto implica que la información de los periodos comparativos debe obedecer a los mismos criterios de reconocimiento y medición, para que los cambios obedezcan únicamente a las variaciones propias de los hechos económicos y no a los sistemas utilizados.
              .col-lg-7
                img(src='@/assets/curso/tema2/img11.png', alt='Texto que describa la imagen')
        .row.justify-content-center.mt-4
          .col-md-11.mb-4.mb-md-0
            .row
              .col-lg-5
                h4 9. Oportunidad
                p.mt-5 Para que la información pueda ser útil en la toma de decisiones, debe prepararse de forma oportuna, de tal manera que las medidas que se acojan en función de ella tengan aún validez en un entorno tan cambiante como el organizacional.
              .col-lg-7
                img(src='@/assets/curso/tema2/img12.png', alt='Texto que describa la imagen')
        .row.justify-content-center.mt-4
          .col-md-11.mb-4.mb-md-0
            .row
              .col-lg-5
                h4 10. Equilibrio costo – beneficio
                p.mt-5 La preparación de la información debe obedecer a un criterio o juicio profesional, donde la obtención de los datos debe traer más beneficios de los costos que implica su preparación. En ciertos casos, la información demanda procesos y evaluaciones que implican sobrecostos para la gestión administrativa, si de ella no se derivan beneficios superiores a la inversión, será necesario entrar a determinar si se hace necesario el uso de sistemas simplificados que minimicen los costos en pro del beneficio neto.
              .col-lg-7
                img(src='@/assets/curso/tema2/img13.png', alt='Texto que describa la imagen')
    p Estos principios fundamentales se encuentran contenidos en el estándar aplicable a las Empresas Pequeñas y Medianas (Pymes) en Colombia, su aplicación se encuentra reglamentada y será presentado de forma más detallada en secciones posteriores.
    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Dinámica contable
    .row
      .col-lg-8
        p La mecánica utilizada para registrar los hechos económicos de la contabilidad, requiere de una preparación técnica que garantice un buen juicio en las situaciones que así lo requieran. Cada contabilización exige un nivel de conocimiento suficiente para que la información final no cuente con errores materiales o sesgos que nublen el juicio de los usuarios finales.
        p En primer lugar, es necesario presentar la clasificación general de las cuentas contables, puesto que es el primer criterio que debe aplicarse para reconocer un hecho económico. Las clases contables se dividen en las siguientes categorías:
      .col-lg-4
        img(src='@/assets/curso/tema2/img14.png', alt='Texto que describa la imagen')
    TabsA.color-acento-contenido.mb-5.mt-4
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Activo")
        h4 Activo
          .row
            .col-lg-10
              p Agrupa los recursos que posee la entidad, representan un beneficio a futuro, bien sea porque son dinero disponible, o porque pueden transformarse en él tras la venta o recaudo. Ejemplo de estos son las cuentas bancarias, las cuentas por cobrar o los inventarios.
            .col-lg-2
              img(src='@/assets/curso/tema2/ico2.svg', alt='Texto que describa la imagen')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Pasivo")
        h4 Pasivo
          .row
            .col-lg-10
              p.mb-5 Involucra todas las obligaciones que posee la empresa. En este sentido, implican la salida de dinero a futuro, por ejemplo los préstamos bancarios, las deudas con proveedores o los impuestos pendientes de pago.
            .col-lg-2
              img(src='@/assets/curso/tema2/ico3.svg', alt='Texto que describa la imagen')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Patrimonio")
        h4 Patrimonio
          .row
            .col-lg-10
              p.mb-5 Es el saldo resultante de los activos, una vez deducidos todos los pasivos. Como ejemplo práctico, si la empresa solo posee un inmueble (activo) pero para adquirirlo recurrió a un crédito hipotecario (pasivo), su patrimonio será equivalente al valor del inmueble menos el saldo del crédito hipotecario a una fecha determinada.
            .col-lg-2
              img(src='@/assets/curso/tema2/ico4.svg', alt='Texto que describa la imagen')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Ingresos")
        h4 Ingresos
          .row
            .col-lg-10
              p Son los beneficios obtenidos a través de la operación u otras actividades complementarias. Es la forma más directa de incrementar el patrimonio, porque tienen incidencia directa en las utilidades, y por lo tanto en el crecimiento financiero de la compañía. El ejemplo más claro de ellos son los ingresos por la venta de bienes o la prestación de servicios, pero existen otros tipos como los intereses por ventas a crédito, las valorizaciones de las propiedades o la generación de rendimientos producto de inversiones.
            .col-lg-2
              img(src='@/assets/curso/tema2/ico5.svg', alt='Texto que describa la imagen')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Gastos")
        h4 Gastos
          .row
            .col-lg-10
              p Representan aquellas salidas de efectivo o disminución de activos necesarias para mantener la empresa operativa. Incluyen rubros de diversos tipos, como los son los pagos a los empleados, los intereses por endeudamiento o el costo de producción de los bienes.
            .col-lg-2
              img(src='@/assets/curso/tema2/ico6.svg', alt='Texto que describa la imagen')
    p Una vez identificada la categoría a la cual corresponde el hecho económico a registrar, es importante aplicar el pilar fundamental de la dinámica contable: la partida doble. Esta puede resumirse en que todo registro debe tener una contraparte opuesta que mantenga una especie de equilibrio en la información financiera. Para cumplir con este sistema de contrapeso hay que establecer dos tipos de movimientos opuestos: el débito y el crédito, también conocidos como el debe y el haber.
    p Cada cuenta contable tendrá una naturaleza, en la que se verá incrementada con uno de estos movimientos y reducida con el opuesto. Para facilitar este aprendizaje, se presenta la naturaleza de las cuentas a nivel de clase, entendiendo que todos los subgrupos que pertenezcan a ella, por regla general siguen esta misma naturaleza:
    .row.justify-content-center.mt-4
      .col-lg-10
        .row
          .col-lg-7
            .titulo-sexto.color-acento-botones
              h5 Tabla 3
              span  Naturaleza de las clases contables
            .tabla-a.color-primario.mb-5 
              table
                thead
                  tr
                    th.wi2 Clase
                    th.wi1 Código
                    th.wi3 Naturaleza

                tbody
                  tr
                    td Activo
                    td 1
                    td Débito

                  tr
                    td Pasivo
                    td 2
                    td Crédito

                  tr
                    td Patrimonio
                    td 3
                    td Crédito
                  tr
                    td Ingresos
                    td 4
                    td Crédito
                  tr
                    td Gastos
                    td 5, 6 o 7
                    td Débito              
          .col-lg-5
            img(src='@/assets/curso/tema2/img15.png', alt='Texto que describa la imagen')
    p.mt-4 Por norma general, las cuentas del activo (todas las que su código inicia con el número 1, se ven incrementadas con los movimientos de naturaleza débito, mientras que los movimientos crédito las disminuyen.
    .row
      .col-lg-6
        p suponga que una persona toma $100 dólares (USD) disponibles de la caja general y los consigna en la cuenta bancaria. El registro contable se presentaría de la siguiente forma:
        .titulo-sexto.color-acento-botones
          h5 Tabla 4 
          span Ejemplo de dinámica contable
        .tabla-a.color-primario.mb-5 
          table
            thead
              tr
                th.wi2 Cuenta
                th.wi1 Débito
                th.wi3 Crédito
            tbody
              tr
                td 1105 - Caja general
                td 
                td 100
              tr
                td 1110 - Bancos
                td 100
                td 
  
      .col-lg-6
        img(src='@/assets/curso/tema2/img16.png', alt='Texto que describa la imagen')
    p.mt-5 De acuerdo con la explicación, la contabilización se registra como una disminución en la cuenta de caja general (crédito), porque el dinero no está más allí, y un incremento de la cuenta de bancos (débito) que es a donde fue destinado. Este ejercicio es muy simple y ofrece un vistazo general de la dinámica de las cuentas y del cumplimiento de la partida doble. Sin importar el número de cuentas involucradas, al final, la suma de todos los registros en la columna débito debe ser equivalente a la suma de todos los registros en la columna crédito.
    separador
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4 Soportes
    p El registro de cada transacción debe contar con una serie de soportes que garanticen la fiabilidad de la información. De esta forma, los soportes contables podrían enmarcarse en dos categorías:
    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta
          span 1
        p <strong>Los del hecho económico:</strong> suelen tener procedencia externa, es decir, emitidos por terceros con los que se lleva a cabo la operación. Toda transacción suele venir acompañada de algún documento que formaliza la operación. <br>Algunos soportes del hecho económico son:
    
    .row.justify-content-center
      .col-lg-10
        .row
          .col-lg-7
            .titulo-sexto.color-acento-botones
              h5 Figura 3
              span  Soportes del hecho económico
            img(src='@/assets/curso/tema2/img17.svg', alt='Texto que describa la imagen')
          
          .col-lg-5.mt-5      
            img(src='@/assets/curso/tema2/img18.svg', alt='Texto que describa la imagen')
    .row.justify-content-center.mt-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4
          .h4 Nota
          p Aunque la factura funciona como soporte, existen diversas metodologías aplicables a las transacciones, en una relación laboral, se conserva el contrato de trabajo y los desprendibles de nómina, en una consignación, el comprobante emitido por el cajero del banco. Cada operación debe provenir de algún soporte que permita verificar la fiabilidad de la información consignada en la contabilidad, de lo contrario podrían existir contabilizaciones erróneas que no puedan identificarse en el tiempo, lo que implica variaciones en la información presente y futura a entregar a los usuarios.
    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta
          span 2
        p <strong>Los del registro contable:</strong>  suelen ser elaborados por la misma administración.<br>Si bien la dinámica contable es la misma sin importar las operaciones que se esperen registrar, los documentos que detallen el registro pueden variar según la naturaleza del hecho.<br><br> Algunos de ellos son:
    .row.justify-content-center
      .col-lg-10
        .row
          .col-lg-7
            .titulo-sexto.color-acento-botones
              h5 Figura 4
              span  Soportes del hecho económico
            img(src='@/assets/curso/tema2/img19.svg', alt='Texto que describa la imagen')
          
          .col-lg-5.mt-5      
            img(src='@/assets/curso/tema2/img20.svg', alt='Texto que describa la imagen')
    .row.justify-content-center.mt-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4
          .h4 Nota
          p los comprobantes contables se asocian a la operación que registran, de tal forma que se identifique el tipo de transacción con solo conocer el comprobante que se está usando. Así, los más comunes son los comprobantes de egreso, donde se registran los pagos efectuados por la empresa, las facturas de venta, que se asocian a la generación de ingresos, los comprobantes de nómina y provisiones, que involucran las operaciones por contrato laboral, y las notas de contabilidad que incluyen ajustes efectuados producto del juicio o criterio profesional, sin implicar necesariamente transacciones comerciales.
    .row.justify-content-center
      .col-lg-10.mt-4.colort222.p-3
        p.text-center El ideal es que cada contabilización cuente con un soporte del registro y un soporte de la transacción.
    p.mt-4 La variedad de comprobantes contables que contienen la información financiera de una empresa está sujeta a lo que el preparador de la información considere conveniente. Así, existen administradores que cuentan con decenas de documentos diferentes para cada naturaleza de transacción, y otros que hacen uso de uno o dos tipos para todas.
    separador
    #t_2_5.titulo-segundo.color-acento-contenido
      h2 2.5 Títulos valores
    .row
      .col-lg-5
        img(src='@/assets/curso/tema2/img21.png', alt='Texto que describa la imagen')
      .col-lg-7
        p En el ámbito comercial, todas las operaciones suelen involucrar por lo menos dos partes. Para que alguien pueda vender algún bien, otro debe estar interesado en adquirirlo, esta norma implícita de los negocios lleva a que cada parte tenga algo para dar a cambio. Los títulos valores entran en la ecuación como un elemento que ofrece garantías para las partes. Estos documentos suelen contener un derecho literal que se le otorga a su poseedor, y que podrá hacerlo exigible a quien lo firma según las condiciones pactadas.
        p Esto significa que es una promesa o garantía que quien elabora y firma le entrega a aquel que recibe. Este derecho se encuentra respaldado por la legislación, lo que implica que en caso de no cumplir con lo pactado, el tenedor del título valor puede solicitar apoyo judicial.
        p Los títulos valores surgen como una herramienta que enriquece las operaciones comerciales, al otorgarles más posibilidades a los partícipes. Así, los bancos hacen que sus clientes firmen pagarés al otorgarles un crédito, para garantizar el pago de forma oportuna de esta obligación, de la misma manera se pueden elaborar letras de cambio entre dos particulares. Los certificados de depósito garantizan que los dineros consignados están respaldados y serán devueltos en una fecha específica.
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.asa
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img22.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los títulos valores otorgan seguridad y permiten operaciones que involucren compromisos a futuro. En el caso de la factura de venta, esta es un título valor que garantiza la tenencia del bien adquirido. También como obligación de pago, si en ella se establece que el producto se vendió a crédito.
        <br>
        <br>
        p Gran utilidad para quien vende y para quien compra, por ello goza de popularidad en distintos mercados.
    separador
    #t_2_6.titulo-segundo.color-acento-contenido
      h2 2.6 Normativa contable
    .row
      .col-lg-7
        p La disciplina contable es uno de los instrumentos de control más importantes que tienen las entidades de vigilancia del Estado para evaluar la situación financiera de las empresas y los aportes que hacen a la Nación a través de los impuestos. Por eso, la aplicación se encuentra fuertemente regulada desde el ámbito financiero y el tributario.
        p En lo que respecta a la normativa contable, Colombia inició un proceso de convergencia con el decreto 1314 de 2009, en el cual se indica que por motivos de la globalización y la apertura de mercados, el país debía iniciar con la aplicación de sistemas de contabilidad que tuvieran aplicación en un amplio número de naciones, de tal forma que posibilita la inversión extranjera y favorece los flujos de capital del país.
      .col-lg-5
        img(src='@/assets/curso/tema2/img23.png', alt='Texto que describa la imagen')
    p.mt-4 El sistema seleccionado fueron las Normas Internacionales de Información Financiera – NIIF. Estas fueron emitidas por el comité de estándares internacionales (IASB, por sus siglas en inglés), y son aplicadas en la actualidad en más de 140 países. También se emitió un estándar simplificado llamado NIIF para PYMES, aplicable a las organizaciones que cumplieran una serie de requisitos entre los que destacaba no cotizar en mercados bursátiles.
    p Colombia adoptó las normas creando tres grandes grupos, el de las empresas de interés público (NIIF Plenas) el de las pequeñas y medianas empresas (NIIF para PYMES) y el de las microempresas (contabilidad simplificada). En la actualidad, el decreto 2420 de 2015 y sus reglamentarios, siguen vigentes y presentan la disposición de los tres grupos y las normas aplicables.
    .row.justify-content-center.mt-5
      .col-lg-8
        .row.colort2222.p-5
          .col-lg-2
            img.tamimg1(src='@/assets/curso/tema2/ico7.svg', alt='Texto que describa la imagen')
          .col-lg-10
            p.text-white La contabilidad simplificada es un marco contable diseñado en Colombia, su propósito es permitir el manejo de un sistema contable más económico de aplicar y sin tantas regulaciones que obstaculicen la formalización de nuevas empresas.
    
    p.text-center.mt-4 La siguiente figura ofrece un acercamiento a la disposición de los marcos normativos vigentes en Colombia en la actualidad:
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Figura 5
          span  Normatividad contable en Colombia
        img(src='@/assets/curso/tema2/img24.svg', alt='Texto que describa la imagen')
    
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mt-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img25.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Se consideran microempresas aquellas personas naturales o jurídicas que posean una planta de personal inferior a 10 trabajadores, activos totales inferiores a 500 salarios mínimos mensuales legales vigentes – SMMLV y tener ingresos menores a 6.000 SMMLV. Incumplir con cualquiera de los requisitos anteriores, hará que sean reclasificadas en el grupo 2 de pequeñas y medianas empresas (Pyme)
        p.mt-5 En Colombia, según el Ministerio del Trabajo (2019) y de acuerdo con las cifras compartidas por el Departamento Administrativo Nacional de Estadística, más del 90% del sector productivo nacional está compuesto por micros, pequeñas y medianas empresas, las cuales deben aplicar los marcos normativos de los grupos 2 y 3 descritos anteriormente.
        separador
    #t_2_7.titulo-segundo.color-acento-contenido
      h2 2.7 Código de ética
    p La contabilidad, como cualquier otra disciplina que involucra el reporte de información para un amplio grupo de interesados, es estricta con respecto a los principios éticos que la regulan. El emisor de las normas internacionales también diseñó un código de ética que abarca los aspectos fundamentales en el desarrollo de la profesión contable. Más allá de si es o no un profesional certificado, los principios éticos aplicables a la contabilidad, deben estar presentes tras el registró de cada transacción o hecho económico.
    p El decreto 2420 de 2015 incluye en uno de sus anexos el código de ética emitido por el IASB y que resulta de obligatorio cumplimiento por parte de los profesionales contables.
    p A continuación se describen los principios fundamentales dispuestos en este código.
    SlyderB.mb-5.mt-5.p-5(:datos="datosSlyder")

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Integridad',
        texto:
          'Todas las relaciones profesionales y empresariales deben estar acompañadas de un comportamiento franco y honesto.',
        imagen: require('@/assets/curso/tema2/img26.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Objetividad',
        texto:
          'La influencia indebida o los conflictos de intereses no deben nublar el juicio del preparador de la información.',
        imagen: require('@/assets/curso/tema2/img27.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Competencia y diligencia profesional',
        texto:
          'Cada trabajo debe realizarse con el conocimiento suficiente para garantizar su asertividad. Esto implica una constante preparación y actualización acorde con la evolución de la disciplina contable.',
        imagen: require('@/assets/curso/tema2/img28.png'),
      },
      {
        titulo: 'Confidencialidad',
        texto:
          'Conservar la información privada obtenida a través del ejercicio contable sin revelar a terceros, salvo que exista una autoridad competente que la solicite. Lo anterior también incluye no lucrarse de compartir esta información, ni obtener ningún tipo de beneficio al exponer datos confidenciales.',
        imagen: require('@/assets/curso/tema2/img29.png'),
      },
      {
        titulo: 'Comportamiento profesional',
        texto:
          'Acatar los lineamientos legales y normativos aplicables y evitar cualquier conducta que ponga en entredicho la profesión.',
        imagen: require('@/assets/curso/tema2/img30.png'),
      },
    ],
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
.tarjeta.color-acento-contenido--borde
  background-color:#F7F8E9
  border: solid 4px #DEE8DF
.tabs-a__tab
  background-color:#E8E8E8
.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.asa
  .bloque-texto-g__img
    left: 50%
  .bloque-texto-g__texto
    right: 40%
.slyder-b.mb-5.mt-5
  background-color: #E8E8E8
  border-radius: 20px
.slyder-b.mb-5.mt-5 h3
  font-size: 16px
</style>
