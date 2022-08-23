export default {
  global: {
    componenteFormativo: 'La contabilidad en el entorno organizacional',
    descripcionCurso:
      'Iniciar un negocio implica acatar la normativa aplicable con respecto a la constitución y formalización de la unidad productiva, así como las obligaciones de tipo tributario. Lo anterior, complementado con un conocimiento financiero suficiente para sustentarla toma de decisiones y el análisis de su evolución, ofrecerá las herramientas necesarias para administrar de forma apropiada.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Empresas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Clasificación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Constitución',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Contabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Cuentas contables',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Principios de contabilidad',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Dinámica contable',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Soportes',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Títulos valores',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Normativa contable',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Código de ética',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Estados financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Estructura',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Tributaria',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ministerio del trabajo. (2019). MiPymes representan más de 90% del sector productivo nacional y generan el 80% del empleo en Colombia: ministra Alicia Arango. ',
      link:
        'https://www.mintrabajo.gov.co/prensa/comunicados/2019/septiembre/mipymes-representan-mas-de-90-del-sector-productivo-nacional-y-generan-el-80-del-empleo-en-colombia-ministra-alicia-arango',
    },
  ],
  glosario: [
    {
      termino: 'Acreedores',
      significado:
        'Persona natural o jurídica que tiene derecho a exigir el pago de una deuda a otra a la cual le entregó dinero o bienes en calidad de préstamo.',
    },
    {
      termino: 'Capital social',
      significado:
        'Comprende los aportes efectuados por los socios, que les otorga la calidad de propietarios. A mayor participación tenga un socio sobre el capital social, se entiende que es dueño de una mayor porción de la empresa. ',
    },
    {
      termino: 'Dividendos',
      significado:
        'Porción de las ganancias de una empresa que le corresponde a cada propietario de esta.',
    },
    {
      termino: 'Persona jurídica',
      significado:
        'Figura jurídica compuesta por una o más personas naturales con identidad propia, pero sin la capacidad de actuar por sí misma. Es diferente a todas las personas que la componen, y requiere de un representante legal para actuar.',
    },
    {
      termino: 'Persona natural',
      significado: 'Individuo de la raza humana con derechos y obligaciones.',
    },
  ],
  complementario: [
    {
      tema: 'Empresa',
      referencia:
        'Cámara de Comercio de Cali. (s.f.). <i>Guía práctica para crear y formalizar tu empresa</i>. ',
      tipo: 'Página web',
      link:
        'https://www.ccc.org.co/landing/guia-para-crear-y-formalizar-empresa-2020/',
    },
    {
      tema: 'Contabilidad',
      referencia:
        'Función Pública. (2015). Decreto 2420 de 2015 <i>[Presidencia de la República] Por el cual se expide el Decreto Único Reglamentario de las Normas de Contabilidad, de Información Financiera y de Aseguramiento de la Información y se dictan otras disposiciones</i>. ',
      tipo: 'Decreto',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76745',
    },
    {
      tema: 'Tributaria',
      referencia:
        'Bancoldex. (2014). <i>Aspectos generales de las obligaciones tributarias</i>.',
      tipo: 'PDF',
      link:
        'https://www.bancoldex.com/sites/default/files/documentos/6359_11._Jun_12_-_Normatividad_Tributaria.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Felipe Avilán Lozano',
        cargo: 'Experto temático',
        centro: 'Regional Tolima - Centro Agropecuario la Granja.',
      },
      {
        nombre: 'Alex García',
        cargo: 'Diseñador Instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y Los Servicios – CIES.',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora Metodológica',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología.',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Andrés Felipe Avilán Lozano',
        cargo: 'Experto temático',
        centro: 'Regional Tolima - Centro Agropecuario la Granja.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Marcela Alarcon Granados'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sergio Mauricio Valencia Martínez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
