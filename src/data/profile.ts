// All site content lives here. Edit this file to update the site.

export const profile = {
  name: 'Madhan Kumar R',
  role: 'Senior Backend Engineer',
  location: 'Coimbatore, India',
  email: 'madhan4r@outlook.com',
  linkedin: 'https://www.linkedin.com/in/madhan4r',
  github: 'https://github.com/madhan4r',
  resume: '/Madhan_Kumar_R_Resume.pdf',
  headline: 'I build the backend systems that move money in real time.',
  experienceLine: '6.5+ years in banking, payments and healthcare',
};

// Dark chips are the core stack; light chips are the domain.
export const coreSkills = {
  stack: ['Node.js', 'Apache Kafka', 'Microservices', 'MongoDB'],
  domain: ['Card payments', 'Tokenization', 'UPI', 'Finacle core banking'],
};

export const integrations = [
  { group: 'Card schemes', items: 'Mastercard, Visa, RuPay, Jaywan' },
  { group: 'Payments', items: 'UPI, PhonePe, Cashfree, net banking' },
  { group: 'Core banking', items: 'Finacle' },
];

export const numbers = [
  { value: '6.5+', label: 'years building backend systems' },
  { value: '6', label: 'engineers led on a payment gateway' },
  { value: '2,000+', label: 'concurrent transactions sustained' },
  { value: '100,000+', label: 'users served on a healthcare platform' },
];

export const experience = [
  {
    company: 'D4Insight',
    url: 'https://www.d4insight.com/',
    title: 'Senior Backend Engineer',
    client: 'Emirates NBD',
    period: 'Dec 2024 – Present',
    points: [
      'Process Finacle events on Kafka for debit card issuance, delivery and lifecycle updates.',
      'Rebuilt the card delivery flow as event-driven Kafka microservices.',
      'Moved Finacle credit card bill payment sync from a next-day (T+1) batch to instant updates.',
      'Made these flows fault-tolerant with 3+ automatic retries per event and a cron-based retry job.',
      'Launched wallet-token management across Mastercard, Visa and Jaywan (UAE domestic scheme).',
      'Built secure REST APIs with audit trails, aligned with banking compliance and SLA requirements.',
      'Building the Mastercard rewards claim integration.',
    ],
  },
  {
    company: 'Techno Consulting Services',
    url: 'https://www.linkedin.com/company/technoconsulting-in/',
    title: 'Full Stack Engineer',
    client: 'CredoPay (payment gateway)',
    period: 'Mar 2022 – Nov 2024',
    points: [
      'Led a team of 6 engineers; code reviews and automated testing cut production bugs by 40%.',
      'Integrated Mastercard, Visa, RuPay (NPCI), PhonePe and Cashfree into a multi-network gateway on NestJS.',
      'Built UPI Collect, UPI Intent, card and net-banking flows with AES/RSA encryption and tokenization.',
      'Designed Kafka streaming with Redis and Bull queues, sustaining 2,000+ concurrent transactions.',
    ],
  },
  {
    company: 'Techno Consulting Services',
    url: 'https://www.linkedin.com/company/technoconsulting-in/',
    title: 'Software Engineer',
    client: 'Healthcare SaaS platform',
    period: 'May 2020 – Feb 2022',
    points: [
      'Built FastAPI and PostgreSQL services for a platform serving 100,000+ healthcare professionals.',
      'Developed a candidate-to-job matching algorithm that cut screening time by 35%.',
      'Designed a Dockerized CI/CD pipeline that halved deployment time.',
    ],
  },
];

// "How I design event-driven systems" diagram.
export const design = {
  normal: [
    { title: 'Producer', note: 'An upstream system emits an event', decision: 'Each event carries a unique ID' },
    { title: 'Message broker', note: 'Kafka keeps events durable and replayable', decision: 'Partition key per entity keeps its events in order' },
    { title: 'Consumer service', note: 'A Node.js service processes the event', decision: 'Idempotency check by event ID, so a retry never applies twice' },
    { title: 'Downstream system', note: 'The update is available right away' },
  ],
  retryLabel: 'after 3+ retries with backoff',
  recovery: {
    dlq: { title: 'Dead-letter queue', note: 'Events that still fail are parked, not lost' },
    reprocessor: { title: 'Scheduled reprocessor', note: 'Re-publishes parked events to the broker once the cause is fixed' },
  },
  safeguards: [
    { title: 'Reconciliation job', note: 'Compares records against the source of truth on a schedule', decision: 'Mismatches are flagged before customers notice' },
    { title: 'Observability', note: 'Grafana dashboards and ELK logs', decision: 'Alerts on consumer lag and dead-letter queue size' },
  ],
};

export const caseStudies = [
  {
    title: 'Card delivery tracking',
    summary: 'From next-day batch updates to real-time events on Kafka, with retries and a cron safety net.',
    stack: 'Node.js · Kafka · MongoDB',
    href: '/case-studies/card-delivery/',
  },
  {
    title: 'A multi-network payment gateway',
    summary: 'Mastercard, Visa, RuPay, PhonePe, Cashfree and UPI behind one gateway, built by a team of 6.',
    stack: 'NestJS · Kafka · Redis',
    href: null, // write-up coming soon
  },
];

export const project = {
  name: 'Vasool Money',
  url: 'https://vasoolmoney.com',
  status: 'Live',
  description:
    'A loan-tracking app for small lending businesses. Owners, staff and collection agents manage customers, loans and daily collections across several organizations, with reports for expected versus collected amounts.',
  points: [
    'Role-based access for owners, staff and agents',
    'Agents record collections offline and sync later',
    'Android and web, in English and Tamil',
  ],
};

export const skills = [
  { group: 'Languages and frameworks', items: 'Node.js, TypeScript, NestJS, Express, Python, FastAPI, Vue.js' },
  { group: 'Messaging', items: 'Apache Kafka, Bull queues, event-driven microservices' },
  { group: 'Data', items: 'MongoDB, PostgreSQL, Redis' },
  { group: 'Payments and security', items: 'Card schemes, tokenization, UPI, Finacle, AES/RSA, JWT' },
  { group: 'Delivery and operations', items: 'Jenkins, GitHub Actions, Docker, AWS, Grafana, ELK Stack, Playwright' },
];
