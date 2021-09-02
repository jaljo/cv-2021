// [Experience]
const experiences = [
  {
    date: "2020 / 2021",
    position: "Full Stack Developer",
    company: "Self employed, Tallinn, EE.",
    responsabilities : [
      `Development & deployment of JAM stack architectured apps for SMEs`,
      `
        Development of puzzle games for the french escape game company "La ligue
        des Gentlemens"
      `,
    ],
    environment: [
      "Circle CI",
      "Docker",
      "Netlify",
      "Github project",
      "Trello",
    ],
    techs: [
      "Strapi",
      "Gatsby",
    ],
    publications: [],
    mergeEnvAndTechs: true,
  },
  {
    date: "2018 / 2020",
    position: "Developer (Syfmony / React)",
    company: "KNP Labs, Nantes, FR.",
    responsabilities: [
      `Development, testing & code reviews of endpoints on i24NEWS REST API`,
      `Migration from Algolia search engine to Elastic Search`,
      `
        Development of a new single page app (SPA) back office for i24NEWS
        editors and of a new SPA frontend for i24NEWS readers : i24news.tv
      `,
      `
        Deployments on i24NEWS infractructure (two swarm clusters : EU & US)
      `,
      `Coordination of i24NEWS third party providers (GRTH, Gini Apps, etc)`,
      `
        Coordination of i24NEWS staff to assist them in the definition of their
        needs
      `,
      `Onboarding and coaching of junior developers`,
    ],
    environment: [
      "Agile (SCRUM)",
      "Traefik",
      "Docker swarm",
      "MySQL",
      "Nginx",
      "PHP",
      "Javascript",
      "Jira",
    ],
    techs: [
      "Functional reactive programming (React, Redux, RxJS)",
      "Jest",
      "Bulma",
      "SASS",
      "Symfony",
      "PHP Spec",
      "Behat",
      "Swagger",
      "Doctrine",
    ],
    publications: [
      `
        Langlois, J., Mure, N., How we build a medium-like rich text editor, KNP
        Labs Blog, knplabs.com/fr/blog/how-we-built-a-medium-like-rich-text-editor
      `,
    ],
    mergeEnvAndTechs: false,
  },
  {
    date: "2013 / 2018",
    position: "Developer (Symfony)",
    company: "IBT Groupe, Nantes, FR.",
    responsabilities: [
      `
        Improvement of consultant's productivity by tracking & centralizing
        their clients assistance tickets in an integrated web app. Reporting on
        highest time consuming clients to give consultants insights on upcoming
        periods...
      `,
      `
        Installation and deployment of business solutions on site & remotely
        (CEGID)
      `,
    ],
    environment: [
      "Jenkins",
      "PHP",
      "MySQL",
    ],
    techs: [
      "Symfony",
      "Doctrine",
      "Bootstrap",
    ],
    publications: [],
    mergeEnvAndTechs: true,
  },
  {
    date: "2013",
    position: "Software tester / DBA assistant",
    company: "CNAM, Nantes, FR.",
    responsabilities: [
      `
        Conduct testing campaigns on schooling management software Gessic@ and
        give feedbacks to directors on the viability of its deployment in
        production
      `,
      `Assistance in DBA daily tasks: check of backups, development of reports`
    ],
    environment: [],
    techs: [
      "SQL Server",
      "Integration Services (SSIS)",
      "Reporting Services (SSRS)",
    ],
    publications: [],
    mergeEnvAndTechs: true,
  },
];

export default experiences;