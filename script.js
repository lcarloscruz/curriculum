// Datos del CV
const datosCV = {
    informacionPersonal: {
        nombre: "Luis Carlos Cruz Areiza",
        profesion: "Técnico Profesional en Operación y Mantenimiento de Bases de Datos",
        imagen: "lucacrar.png",
        contacto: [
            {icon: "📧", info: "lucacrar@gmail.com"},
            {icon: "📱", info: "+57 312 449 9707"},
            {icon: "📍", info: "Villavicencio, Meta"}
        ]
    },
    perfil: [
        "Cuento con una visión completa de la informática moderna, lo cual me facilita convertirme en motor de cambio en cualquier organización en la que me desempeñe. Capacitado para moverme con facilidad en los aspectos teóricos y prácticos del software y/o hardware, manteniendo en buen estado y correcto funcionamiento todos los equipos de cómputo.",
        
        "Con alto sentido de responsabilidad y enorme motivación al autoaprendizaje y actualización, lo que me permite interactuar con otras disciplinas poniendo a disposición todos mis conocimientos teóricos y prácticos, para facilitar las tareas, apoyándome en la tecnología disponible.",
        
        "Gran capacidad y destreza de auto estudio, comprensión y conceptualización, que me permite incorporar tecnología, adecuándola apropiadamente a las necesidades del país o desarrollar innovaciones cuando sea necesario."
    ],
    experiencia: [
        {
            cargo: "Analista de Operación Junior",
            fecha: "2019 - Presente",
            empresa: "AXITY",
            descripcion: "Recopilación y análisis de datos operativos para identificar tendencias, ineficiencias y oportunidades de mejora. Así mismo, realización de tareas de apoyo, contribuyendo con el desarrollo y aplicación de mejoras en los procesos."
        },
        {
            cargo: "Técnico Máster",
            fecha: "2016 - 2018",
            empresa: "PCM S.A.S.",
            descripcion: "Encargado de todo el mantenimiento, reparación y supervisión de sistemas operativos, aplicaciones, programas, servidores bajo responsabilidad de la empresa, siendo proactivo y dispuesto a trabajo individual y en equipo, tendientes al cumplimiento de las metas propuestas por la organización."
        },
        {
            cargo: "Técnico de Soporte",
            fecha: "2014 - 2016",
            empresa: "Priceless Colombia SAS",
            descripcion: "Soporte técnico directo en software y hardware, mantenimiento preventivo y correctivo equipos de cómputo, servidores e impresoras; implantación de las soluciones definidas en los proyectos, logrando mantener los sistemas informáticos funcionando de forma eficiente y correcta."
        },
        {
            cargo: "Técnico Senior",
            fecha: "2012 - 2014",
            empresa: "PCM S.A.S.",
            descripcion: "Liderazgo técnico en la instalación y configuración de soluciones tecnológicas, con diligencia en la evaluación, diagnóstico y solución de incidentes relacionados con la infraestructura, servicios, aplicaciones, terminales y dispositivos de los clientes, con cumplimiento de los protocolos de documentación y registro de las actividades de servicio de la empresa."
        }
    ],
    educacion: [
        {
            titulo: "VI Semestre Ingeniería de Sistemas",
            institucion: "Fundación Universitaria Compensar",
            año: "2024"
        },
        {
            titulo: "Técnico Profesional en Operación y Mantenimiento de Bases de Datos",
            institucion: "Fundación Universitaria Compensar",
            año: "2023"
        },
        {
            titulo: "Técnico en Mantenimiento de Computadores",
            institucion: "Cenacap",
            año: "2004"
        }
    ],
    habilidades: {
        tecnicas: [
            "Soporte Técnico",
            "Mantenimiento de Hardware",
            "Sistemas Operativos Windows",
            "Redes y Conectividad",
            "Bases de Datos",
            "Gestión de Servidores"
        ],
        software: [
            "Microsoft Office",
            "Active Directory",
            "Help Desk",
            "Virtualización"
        ],
        blandas: [
            "Resolución de Problemas",
            "Trabajo en Equipo",
            "Atención al Cliente",
            "Documentación Técnica"
        ]
    }
};

// Función para cargar la información personal
function cargarInformacionPersonal() {
    document.getElementById('profileImg').src = datosCV.informacionPersonal.imagen;
    document.getElementById('nombre').textContent = datosCV.informacionPersonal.nombre;
    document.getElementById('profesion').textContent = datosCV.informacionPersonal.profesion;
    
    const contactoContainer = document.getElementById('contacto');
    datosCV.informacionPersonal.contacto.forEach(item => {
        const span = document.createElement('span');
        span.innerHTML = `${item.icon} ${item.info}`;
        contactoContainer.appendChild(span);
    });
}

// Función para cargar el perfil
function cargarPerfil() {
    const perfilContainer = document.getElementById('perfil');
    perfilContainer.innerHTML = ''; // Limpiar el contenedor

    datosCV.perfil.forEach(parrafo => {
        const p = document.createElement('p');
        p.textContent = parrafo;
        perfilContainer.appendChild(p);
    });
}

// Función para cargar la experiencia
function cargarExperiencia() {
    const experienciaContainer = document.getElementById('experiencia');
    datosCV.experiencia.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${exp.cargo}</h3>
            <p class="fecha">${exp.fecha}</p>
            <p class="empresa">${exp.empresa}</p>
            <p class="descripcion">${exp.descripcion}</p>
        `;
        experienciaContainer.appendChild(card);
    });
}

// Función para cargar la educación
function cargarEducacion() {
    const educacionContainer = document.getElementById('educacion');
    datosCV.educacion.forEach(edu => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${edu.titulo}</td>
            <td>${edu.institucion}</td>
            <td>${edu.año}</td>
        `;
        educacionContainer.appendChild(tr);
    });
}

// Función para cargar las habilidades
function cargarHabilidades() {
    const habilidadesContainer = document.getElementById('habilidades');
    habilidadesContainer.innerHTML = ''; // Limpiar el contenedor

    // Crear sección para habilidades técnicas
    const tecnicasDiv = document.createElement('div');
    tecnicasDiv.className = 'skill-group';
    tecnicasDiv.innerHTML = '<h3>Habilidades Técnicas</h3>';
    datosCV.habilidades.tecnicas.forEach(hab => {
        const span = document.createElement('span');
        span.className = 'skill-tag';
        span.textContent = hab;
        tecnicasDiv.appendChild(span);
    });

    // Crear sección para habilidades de software
    const softwareDiv = document.createElement('div');
    softwareDiv.className = 'skill-group';
    softwareDiv.innerHTML = '<h3>Software</h3>';
    datosCV.habilidades.software.forEach(hab => {
        const span = document.createElement('span');
        span.className = 'skill-tag';
        span.textContent = hab;
        softwareDiv.appendChild(span);
    });

    // Crear sección para habilidades blandas
    const blandasDiv = document.createElement('div');
    blandasDiv.className = 'skill-group';
    blandasDiv.innerHTML = '<h3>Habilidades Blandas</h3>';
    datosCV.habilidades.blandas.forEach(hab => {
        const span = document.createElement('span');
        span.className = 'skill-tag';
        span.textContent = hab;
        blandasDiv.appendChild(span);
    });

    // Agregar todas las secciones al contenedor
    habilidadesContainer.appendChild(tecnicasDiv);
    habilidadesContainer.appendChild(softwareDiv);
    habilidadesContainer.appendChild(blandasDiv);
}

// Función principal para inicializar todo
function inicializarCV() {
    cargarInformacionPersonal();
    cargarPerfil();
    cargarExperiencia();
    cargarEducacion();
    cargarHabilidades();
}
function handleParallax() {
    const scrolled = window.pageYOffset;
    
    // Mover imagen izquierda
    const leftImage = document.querySelector('.background-image.left');
    if (leftImage) {
        leftImage.style.transform = `translateY(calc(-50% + ${scrolled * 0.2}px))`;
    }
    
    // Mover imagen derecha
    const rightImage = document.querySelector('.background-image.right');
    if (rightImage) {
        rightImage.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
}
// Función para inicializar el comportamiento colapsable
function inicializarColapsables() {
    // Seleccionar todas las secciones
    document.querySelectorAll('.section').forEach(section => {
        const titulo = section.querySelector('h2');
        const contenido = section.querySelector('h2').nextElementSibling;
        
        // Agregar clase para el contenido colapsable
        contenido.classList.add('content-collapsible');
        
        // Agregar evento de clic al título
        titulo.addEventListener('click', () => {
            // Toggle de las clases para colapsar/expandir
            titulo.classList.toggle('collapsed');
            contenido.classList.toggle('collapsed');
            
            // Animación suave al expandir/colapsar
            if (contenido.classList.contains('collapsed')) {
                contenido.style.maxHeight = '0';
            } else {
                contenido.style.maxHeight = contenido.scrollHeight + 'px';
            }
        });
    });
}
// Agregar estas funciones si deseas controlar todas las secciones a la vez
function expandirTodo() {
    document.querySelectorAll('.section h2').forEach(titulo => {
        const contenido = titulo.nextElementSibling;
        if (titulo.classList.contains('collapsed')) {
            titulo.classList.remove('collapsed');
            contenido.classList.remove('collapsed');
            contenido.style.maxHeight = contenido.scrollHeight + 'px';
        }
    });
}

function contraerTodo() {
    document.querySelectorAll('.section h2').forEach(titulo => {
        const contenido = titulo.nextElementSibling;
        if (!titulo.classList.contains('collapsed')) {
            titulo.classList.add('collapsed');
            contenido.classList.add('collapsed');
            contenido.style.maxHeight = '0';
        }
    });
}
// Modificar la función inicializarCV para incluir los colapsables
function inicializarCV() {
    cargarInformacionPersonal();
    cargarPerfil();
    cargarExperiencia();
    cargarEducacion();
    cargarHabilidades();
    inicializarColapsables(); // Agregar esta línea
}
// Cargar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', inicializarCV);
window.addEventListener('scroll', handleParallax);