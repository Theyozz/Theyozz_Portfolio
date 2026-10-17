export const profile = {
  firstName: 'Théo',
  lastName: 'Vieilledent-Maurin',
  title: 'Ingénieur DevOps',
  location: 'Lyon, France',
  email: 'theomaurin875@gmail.com',
  phone: '06 33 92 62 58',
  phoneHref: 'tel:+33633926258',
  cv: '/images/CV_Vieilledent-Maurin_Theo.pdf',
  availability: 'Ingénieur DevOps chez Solutec',
  roles: ['Ingénieur DevOps', 'CI/CD & Automatisation', 'Infrastructure as Code', 'Docker & Kubernetes'],
};

export const socials = [
  { name: 'GitHub', url: 'https://github.com/Theyozz', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/th%C3%A9o-vieilledent-maurin/', icon: 'linkedin' },
  { name: 'X', url: 'https://x.com/Theyozz_', icon: 'x' },
];

export const stats = [
  { value: '3 ans', label: "d'expérience en entreprise" },
  { value: '4', label: 'applications Python en production chez Orange' },
  { value: '~30', label: 'collaborateurs utilisateurs au quotidien' },
  { value: '2', label: 'certifications Kubernetes & GitLab CI' },
];

export const about = {
  languages: [
    { name: 'Français', level: 'Natif' },
    { name: 'Anglais', level: 'B2' },
    { name: 'Espagnol', level: 'A2' },
  ],
  softSkills: ['Adaptabilité', 'Curiosité intellectuelle', 'Persévérance'],
  hobbies: ['Moto', 'Jiu-Jitsu Brésilien', 'Échecs', 'Voyages'],
};

export const experiences = [
  {
    role: 'Ingénieur DevOps',
    company: 'Solutec',
    period: '2026 — Présent',
    current: true,
    highlights: [],
    tags: [],
  },
  {
    role: 'Ingénieur Logiciel / DevOps',
    company: 'Orange',
    period: '2024 — Sept. 2026',
    highlights: [
      "Développement et maintenance de 4 applications Python d'automatisation métier, utilisées par ~30 collaborateurs",
      'Pipelines CI/CD GitLab CI intégrés à la solution interne d\'orchestration (ODE), déploiements multi-environnements et variables sécurisées',
      "Hébergement et exploitation d'applications sur VM Red Hat (Nginx / Apache) et conteneurs Docker",
      'Monitoring applicatif et infrastructure avec Prometheus et Grafana',
      "Restructuration de l'architecture des projets, formation des collègues et animation des réunions de suivi",
    ],
    tags: ['Python', 'GitLab CI', 'Docker', 'Red Hat', 'Nginx', 'Prometheus', 'Grafana'],
  },
  {
    role: 'Développeur Full-Stack',
    company: 'CoSpirit',
    period: '2023 — 2024',
    highlights: [
      "Développement et maintenance des outils internes de l'entreprise",
      'Fonctionnalités back-end avec Symfony et API Platform, interfaces dynamiques en Vue.js',
      'Résolution de tickets sur YouTrack et cérémonies Scrum (sprint planning, daily, review)',
    ],
    tags: ['Symfony', 'API Platform', 'Vue.js', 'Scrum'],
  },
];

export const projects = [
  {
    title: 'Cloudheo',
    description:
      "SaaS d'optimisation des coûts AWS : il analyse un compte en lecture seule, détecte les ressources payées mais inutiles (instances surdimensionnées, volumes orphelins, IP inutilisées…) et chiffre chaque économie.",
    image: '/images/Cloudheo.jpg',
    tags: ['AWS', 'FinOps', 'SaaS'],
    visit: 'https://cloudheo.com/',
    code: 'https://github.com/Theyozz/Cloudheo',
    featured: true,
    id: 5,
  },
  {
    title: 'Musicart',
    description:
      'Marketplace NFT (Symfony + Angular) déployée sur un cluster Kubernetes : Ingress, charts Helm (templating, rollback) et NetworkPolicy Calico pour sécuriser le réseau.',
    image: '',
    tags: ['Kubernetes', 'Helm', 'Calico', 'Symfony', 'Angular'],
    id: 4,
  },
  {
    title: 'AutoB3',
    description: "Application web en Python / Flask adossée à PostgreSQL, avec une chaîne d'intégration et de déploiement continus sur GitLab.",
    image: '',
    tags: ['Python', 'Flask', 'PostgreSQL', 'GitLab CI'],
    id: 1,
  },
  {
    title: 'Twouitteur',
    description: "Réseau social inspiré de Twitter, développé en PHP : comptes utilisateurs, publications et fil d'actualité.",
    image: '/images/Twouitteur.png',
    tags: ['PHP'],
    visit: 'http://twouitteur.atwebpages.com/login.php',
    code: 'https://github.com/Theyozz/PHP_Project',
    id: 0,
  },
  {
    title: 'Maëlie Richarte',
    description: "Site vitrine sur mesure réalisé avec WordPress pour présenter l'activité d'une professionnelle.",
    image: '/images/MaelieR.png',
    tags: ['WordPress'],
    visit: 'https://maelie-richarte.fr/',
    id: 2,
  },
  {
    title: 'Raisin Céramique',
    description: 'Boutique e-commerce WordPress pour un atelier de céramique artisanale : catalogue, panier et pages atelier.',
    image: '/images/Raisinceramicc.png',
    tags: ['WordPress', 'Elementor', 'E-commerce'],
    id: 3,
  },
];

export const skills = [
  {
    title: 'CI/CD & Automatisation',
    description: 'Pipelines, provisioning et Infrastructure as Code.',
    items: ['GitLab CI', 'Ansible', 'Terraform'],
  },
  {
    title: 'Conteneurs & Orchestration',
    description: 'Packager, déployer et sécuriser.',
    items: ['Docker', 'Docker Compose', 'Kubernetes', 'Helm', 'Calico'],
  },
  {
    title: 'Systèmes & Serveurs',
    description: 'Hébergement et exploitation.',
    items: ['Linux', 'Red Hat', 'Nginx', 'Apache'],
  },
  {
    title: 'Monitoring',
    description: 'Observer les applis et l\'infra.',
    items: ['Prometheus', 'Grafana'],
  },
  {
    title: 'Langages',
    description: 'Scripts, automatisation et applis.',
    items: ['Python', 'Bash', 'SQL', 'JavaScript', 'YAML'],
  },
  {
    title: 'Versioning & Dév',
    description: 'Collaboration et développement applicatif.',
    items: ['Git', 'GitLab', 'GitHub', 'Symfony', 'Vue.js', 'Angular'],
  },
];

export const TimeLineData = [
  { year: '2024 — 2026', title: 'Master Expert en Ingénierie Logicielle (Bac +5)', place: 'IPI, Lyon', type: 'Formation' },
  { year: '2023 — 2024', title: "Bachelor Concepteur Développeur d'Applications (Bac +3)", place: 'Doranco, Lyon', type: 'Formation' },
  { year: '2023', title: 'Titre RNCP niv. 5 (Bac +2) Développeur Web & Web Mobile', place: 'Human Booster, Lyon', type: 'Formation' },
];

export const certifications = [
  { title: 'Kubernetes Application Developer', issuer: 'Zenika', link: '' },
  { title: 'GitLab CI', issuer: 'Orange', link: '' },
];
