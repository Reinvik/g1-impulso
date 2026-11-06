export interface MetricItem {
  value: string;
  label: string;
  description: string;
  trend: string;
}

export interface MethodologyPhase {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  tools: string[];
  deliverable: string;
  image: string;
  highlight: string;
}

export interface SolutionItem {
  id: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  tools: string[];
  image: string;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  industry: string;
  clientType: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string; detail: string }[];
  image: string;
  quote: string;
  author: string;
  role: string;
}

export interface AcademyCourse {
  level: string;
  belt: string;
  color: string;
  borderColor: string;
  duration: string;
  target: string;
  description: string;
  modules: string[];
  certification: string;
}

export const METRICS_DATA: MetricItem[] = [
  {
    value: "+38%",
    label: "Incremento en Productividad",
    description: "Medido en rendimiento de horas-hombre y OEE promedio de plantas.",
    trend: "+28% a +55% en 90 días"
  },
  {
    value: "-45%",
    label: "Reducción de Lead Time",
    description: "Eliminación de tiempos muertos y colas entre procesos productivos.",
    trend: "Flujo continuo 'Pull'"
  },
  {
    value: "5.8x",
    label: "Retorno de Inversión (ROI)",
    description: "Beneficio financiero directo contra el costo de consultoría en el año 1.",
    trend: "Validado en EBITDA"
  },
  {
    value: "100%",
    label: "Enfoque en el Gemba",
    description: "Intervención directa en terreno donde ocurre el trabajo real.",
    trend: "Cero teoría de escritorio"
  }
];

export const METHODOLOGY_STEPS: MethodologyPhase[] = [
  {
    id: 1,
    title: "Diagnóstico Gemba & VSM",
    subtitle: "Visibilizar el flujo de valor real y cuantificar las restricciones",
    badge: "Fase 1 · Semanas 1 a 2",
    description: "Caminamos el piso de operaciones (Gemba) junto a los líderes. Elaboramos el Value Stream Mapping del estado actual identificando los 8 desperdicios (Muda), cuellos de botella en equipos y asimetrías de información.",
    tools: ["Value Stream Mapping (VSM)", "Gemba Walk estructurado", "Matriz de 8 Desperdicios", "Cálculo Takt Time vs Cycle Time"],
    deliverable: "Mapa VSM Actual + Futuro con plan de captura de valor y cálculo de ahorro proyectado.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85",
    highlight: "Identificación de pérdidas ocultas de hasta un 30% del tiempo operativo."
  },
  {
    id: 2,
    title: "Hoshin Kanri & Árbol de KPIs",
    subtitle: "Conectar los objetivos estratégicos con la operación diaria",
    badge: "Fase 2 · Semanas 3 a 4",
    description: "Desplegamos la matriz X de Hoshin Kanri para que cada nivel de la organización comprenda con total claridad su meta del día, semana y mes. Establecemos indicadores visuales directos.",
    tools: ["Matriz X Hoshin Kanri", "Árbol de KPIs Cascada", "Cuadros de Mando Visual", "Definición de Targets Estratégicos"],
    deliverable: "Sistema de gobierno visual con metas conectadas desde Gerencia hasta Operadores de línea.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85",
    highlight: "100% de los colaboradores alineados con las prioridades de rentabilidad."
  },
  {
    id: 3,
    title: "Kaizen Sprints & Flujo Esbelto",
    subtitle: "Acción táctica en terreno para capturar resultados rápidos",
    badge: "Fase 3 · Semanas 5 a 10",
    description: "Ejecutamos eventos Kaizen de 5 días enfocados en cuellos de botella críticos: rebalanceo de líneas, reducción de tiempos de cambio (SMED), orden y estandarización 5S y nivelación de inventarios Kanban.",
    tools: ["Eventos Kaizen 5 Días", "Metodología SMED (Cambios rápidos)", "Sistemas Pull & Kanban", "Estandarización 5S"],
    deliverable: "Procesos optimizados en vivo con reducción inmediata de fricción y tiempos muertos.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=85",
    highlight: "Impacto operativo verificable desde la primera semana de intervención."
  },
  {
    id: 4,
    title: "Gerenciamiento Diario & Sostenibilidad",
    subtitle: "Transformar la mejora continua en el ADN permanente de la empresa",
    badge: "Fase 4 · Semanas 11 a 12+",
    description: "Implementamos rutinas de gestión diaria (reuniones de 10-15 minutos de pie frente al tablero) y resolución estructurada de problemas A3, asegurando que los estándares no se degraden con el tiempo.",
    tools: ["Reuniones Tier 1, 2 y 3", "Tableros de Gestión Diaria", "Resolución de Problemas A3", "Auditorías de Trabajo Estándar"],
    deliverable: "Cultura autónoma instalada: equipos que detectan y resuelven anomalías sin depender del consultor.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85",
    highlight: "Garantía de sostenibilidad y mejora incremental continua año tras año."
  }
];

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: "lean-manufacturing",
    category: "Operaciones & Planta",
    title: "Lean Manufacturing & Excelencia Operacional",
    tagline: "Maximiza el OEE y elimina paradas no programadas en planta",
    description: "Intervenimos directamente en las líneas de producción para sincronizar el flujo de materiales, balancear puestos de trabajo y erradicar cuellos de botella técnicos.",
    benefits: [
      "Incremento de disponibilidad de maquinaria (OEE +15% a +30%)",
      "Reducción drástica de mermas y defectos de fabricación",
      "Tiempos de preparación y cambio de formato ultra veloces (SMED)",
      "Puestos de trabajo seguros, visuales y limpios (5S Industrial)"
    ],
    tools: ["OEE Optimization", "SMED", "TPM", "Poka-Yoke", "5S", "Heijunka"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85",
    iconName: "Factory"
  },
  {
    id: "lean-services",
    category: "Oficinas & Servicios",
    title: "Lean Office & Optimización de Procesos de Negocio",
    tagline: "Desbloquea la burocracia y acelera los flujos administrativos",
    description: "Aplicamos los principios de flujo continuo y eliminación de desperdicios a finanzas, compras, recursos humanos, postventa y áreas de operaciones de servicios.",
    benefits: [
      "Reducción de hasta 60% en tiempos de aprobación y respuesta",
      "Eliminación de traspasos innecesarios y reprocesos documentales",
      "Visibilidad completa de la carga laboral y balanceo de equipos",
      "Preparación óptima para automatización y digitalización efectiva"
    ],
    tools: ["Makigami (VSM Administrativo)", "Trabajo Estándar", "Kanban Digital", "Matriz RACI Esbelta"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
    iconName: "Briefcase"
  },
  {
    id: "supply-chain",
    category: "Logística & Almacén",
    title: "Logística Esbelta & Cadena de Suministro Pull",
    tagline: "Sincroniza inventarios con la demanda real sin quiebres de stock",
    description: "Transformamos almacenes y centros de distribución tradicionales en centros de flujo ágil con reposición sincronizada, rutas óptimas de picking y menor capital inmovilizado.",
    benefits: [
      "Disminución de hasta 35% en inventario inmovilizado",
      "Aumento en la precisión de despachos (OTIF superior al 98%)",
      "Reducción de recorridos muertos en bodegas mediante layouts Lean",
      "Integración de proveedores bajo modelos de reabastecimiento continuo"
    ],
    tools: ["Kanban Físico/Digital", "Milk-run", "Diseño de Layout Spaguetti", "Supermercados Pull"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
    iconName: "Truck"
  },
  {
    id: "academia-liderazgo",
    category: "Formación & Personas",
    title: "Academia G1: Formación y Certificaciones In-Company",
    tagline: "Desarrolla el talento interno que liderará la mejora continua",
    description: "Programas de entrenamiento basados en proyectos reales. Tus colaboradores no solo aprenden conceptos: entregan un proyecto de mejora con retorno financiero cuantificado.",
    benefits: [
      "Certificación formal de Lean Practitioners, Green Belts y Líderes",
      "Cada participante paga su programa con el ahorro del proyecto ejecutado",
      "Creación de un lenguaje común y cultura de resolución metódica",
      "Material, plantillas y acompañamiento directo de consultores Senior"
    ],
    tools: ["Lean Belt Certifications", "Metodología A3", "Coaching Kata", "Facilitación de Grupos"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85",
    iconName: "GraduationCap"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "caso-mineria",
    industry: "Gran Minería / Planta Concentradora",
    clientType: "Compañía Minera Regional",
    challenge: "Altos tiempos en mantenciones programadas y frecuentes paradas no programadas que mermaban la producción diaria de concentrado.",
    solution: "Implementación de eventos Kaizen SMED en mantención mayor, despliegue de gestión visual 5S en talleres y estandarización del cambio de revestimientos.",
    results: [
      { label: "Tiempo de Mantención", value: "-32%", detail: "Liberación de 14 horas productivas por parada" },
      { label: "OEE Global de Planta", value: "+18%", detail: "Rendimiento récord sostenido durante 12 meses" },
      { label: "Ahorro Estimado Año 1", value: "US$ 1.2M", detail: "Por menor tiempo de inactividad de equipos críticos" }
    ],
    image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1000&q=85",
    quote: "G1 IMPULSO no vino con diapositivas vacías; se pusieron los zapatos de seguridad, bajaron a la planta y trabajaron codo a codo con nuestros operadores.",
    author: "Gerente de Operaciones & Mantención",
    role: "Minera Cordillera"
  },
  {
    id: "caso-logistica",
    industry: "Logística E-Commerce / Retail",
    clientType: "Centro de Distribución Nacional",
    challenge: "Colapso en temporadas altas (CyberDays), con cuellos de botella en empaque y retrasos de hasta 72 horas en despachos a clientes finales.",
    solution: "Reingeniería del flujo de valor (VSM), rediseño del layout con flujo U-Shape, nivelación Heijunka de pedidos y tableros de control horario.",
    results: [
      { label: "Lead Time de Despacho", value: "-65%", detail: "De 72 hrs a menos de 24 hrs garantizadas" },
      { label: "Capacidad de Picking", value: "+85%", detail: "Sin aumentar un solo metro cuadrado de bodega" },
      { label: "Tasa de Error en Pedidos", value: "<0.2%", detail: "Eliminación casi total de reclamos por despacho" }
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85",
    quote: "La velocidad y claridad que logramos en el centro de distribución fue transformacional. Pudimos absorber el triple de volumen con la misma infraestructura.",
    author: "Director de Cadena de Suministro",
    role: "Retailer Omnicanal"
  },
  {
    id: "caso-manufactura",
    industry: "Alimentos & Bebidas",
    clientType: "Planta de Procesamiento y Envasado",
    challenge: "Exceso de mermas en cambios de producto y constantes desajustes de línea que obligaban a pagar horas extras todos los fines de semana.",
    solution: "SMED en líneas de envasado, plan de mantenimiento autónomo TPM y reuniones diarias de 10 minutos (Daily Management) con operarios.",
    results: [
      { label: "Tiempo de Cambio (SMED)", value: "-52%", detail: "De 75 minutos a 36 minutos promedio" },
      { label: "Horas Extras Pagadas", value: "-40%", detail: "Equilibrio operativo alcanzado en jornada regular" },
      { label: "Mermas de Materia Prima", value: "-28%", detail: "Mejora directa de 2.4 puntos en margen bruto" }
    ],
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=85",
    quote: "El mayor logro no fue solo el ahorro numérico, sino ver a los operarios empoderados proponiendo mejoras todos los días en su tablero visual.",
    author: "Gerente de Planta Industrial",
    role: "Procesadora Agroalimentaria"
  }
];

export const ACADEMY_COURSES: AcademyCourse[] = [
  {
    level: "Nivel 1 · Fundamentos",
    belt: "Lean Practitioner (Yellow Belt)",
    color: "bg-amber-400 text-amber-950",
    borderColor: "border-amber-400",
    duration: "24 Horas Cronológicas",
    target: "Supervisores, analistas, técnicos y operarios clave",
    description: "Dominio de los conceptos esenciales del pensamiento Lean. Capacita a los participantes para identificar desperdicios en su entorno inmediato y aplicar herramientas básicas de estandarización.",
    modules: [
      "Filosofía Lean y los 8 Desperdicios (Muda, Muri, Mura)",
      "Metodología 5S: Orden, Limpieza y Estandarización",
      "Introducción a la Gestión Visual y Tableros Diarios",
      "Técnicas de Trabajo Estándar y Poka-Yoke básico"
    ],
    certification: "Certificado Internacional de Lean Yellow Belt Practitioner avalado por G1 IMPULSO."
  },
  {
    level: "Nivel 2 · Ejecución & Liderazgo",
    belt: "Lean Leader (Green Belt)",
    color: "bg-emerald-500 text-white",
    borderColor: "border-emerald-500",
    duration: "48 Horas + Proyecto Práctico",
    target: "Jefes de turno, ingenieros de procesos, jefes de planta y calidad",
    description: "Habilita a los líderes para diseñar y coordinar eventos Kaizen de alto impacto, mapear flujos de valor y liderar la resolución estructurada de problemas en sus equipos.",
    modules: [
      "Value Stream Mapping (VSM): Mapeo Estado Actual y Futuro",
      "Facilitación y Conducción de Eventos Kaizen de 5 días",
      "Metodología A3 de Resolución de Problemas y Causa Raíz (5 Porqués, Ishikawa)",
      "SMED: Reducción de Tiempos de Preparación y Cambio",
      "Gerenciamiento Diario Tier 1 y Tier 2 con KPIs en tiempo real"
    ],
    certification: "Certificado Lean Green Belt con acreditación de proyecto con impacto económico cuantificado."
  },
  {
    level: "Nivel 3 · Maestría & Transformación",
    belt: "Lean Expert & Master (Black Belt)",
    color: "bg-slate-900 text-white",
    borderColor: "border-slate-800",
    duration: "80 Horas + Transformación de Área",
    target: "Gerentes de operaciones, directores de mejora continua y consultores internos",
    description: "Formación de élite para liderar la transformación cultural y de procesos en toda la cadena de valor. Conecta la visión del directorio con la excelencia operacional en el Gemba.",
    modules: [
      "Hoshin Kanri: Despliegue de Estrategia mediante Matriz X",
      "Diseño Integral de Cadenas de Suministro Pull y Heijunka avanzado",
      "Mantenimiento Productivo Total (TPM) y Confiabilidad Operacional",
      "Lean Accounting y cuantificación de impacto en EBITDA",
      "Gestión del Cambio Organizacional y Coaching Kata"
    ],
    certification: "Certificado Lean Black Belt Master con validación de retorno de inversión corporativo."
  }
];

export const TRUST_SECTORS = [
  { name: "Gran Minería & Metalurgia", tag: "Equipos pesados, OEE y paradas de planta" },
  { name: "Manufactura Industrial", tag: "Líneas de ensamble, SMED y cero defectos" },
  { name: "Logística & Centros de Distribución", tag: "Picking, layouts Lean y despacho rápido" },
  { name: "Alimentos, Bebidas & Agro", tag: "Inocuidad, mermas y balanceo de líneas" },
  { name: "Salud & Centros Hospitalarios", tag: "Tiempos de espera, pabellones y gestión visual" },
  { name: "Servicios Financieros & Corporativos", tag: "Lean Office, flujos ágiles y Makigami" }
];
