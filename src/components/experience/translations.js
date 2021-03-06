const techsIndep = [
  "Strapi",
  "Gatsby",
  "Netlify",
  "Bulma",
  "Algolia",
  "Elasticsearch",
  "Traefik",
];

const techsKNP = [
  "Functional reactive programming (RxJS)",
  "Docker Swarm",
  "SCRUM",
  "PHP Spec",
  "Behat",
];

const techsIBT = [
  "Layered architecture",
  "Jenkins",
  "Bootstrap",
];

const techsCNAM = [
  "SQL Server",
  "Integration Services (SSIS)",
  "Reporting Services (SSRS)",
];

const dictionary = {
  en: {
    title: "Work experience - 7 years",
    exps: [
      {
        isHidden: false,
        date: "20-21",
        position: "Full Stack Developer",
        company: "Self employed, Tallinn, EE.",
        responsibilities: [
          `
            Delivered JAM stack applications with challenging delays (< 1 month);
            took consulting responsibilities in choice of stacks, infrastructure and
            features.
          `
        ],
        techs: techsIndep,
      },
      {
        isHidden: false,
        date: "18-20",
        position: "Lead developer (Symfony, React)",
        company: "KNP Labs, Nantes, FR.",
        responsibilities: [
          `
            Developed single page applications and REST APIs for our international
            client i24NEWS; took consulting responsibilities over time by assisting
            final users (journalists) in the definition of their needs and
            coordinating third parties involved in development; faced scalability
            and orchestration challenges by deploying applications on both European
            and US zone using Docker Swarm.
          `,
          `
            Worked with a quality approach of continuous improvement and delivery,
            (CI/CD) focused on testability (TDD), behavior (BDD) and flexibility
            using agile methods; took lead responsibilities by training junior
            developers and writing technical articles.
          `,
        ],
        techs: techsKNP,
      },
      {
        isHidden: false,
        date: "13-18",
        position: "Developer (Symfony)",
        company: "IBT Groupe, Nantes, FR.",
        responsibilities: [
          `
            Improved overall quality of developments by deploying CI/CD tools,
            versioning, testing good practices and frameworks; improved consultant's
            productivity by developing an application to centralize their clients
            assistance tickets; developed predictive analysis tools to give
            consultants insights on upcoming periods.
          `,
        ],
        techs: techsIBT,
      },
      {
        isHidden: false,
        date: "2013",
        position: "IT Generalist / DBA assistant",
        company: "CNAM, Nantes, FR.",
        responsibilities: [
          `
            Developed backup and restoration routines, integration jobs and reports
            for management to give them insights on enrolment of students each year.
          `,
        ],
        techs: techsCNAM,
      },
    ],
  },
  fr: {
    title: "Exp??rience professionnelle - 7 ans",
    exps: [
      {
        isHidden: false,
        date: "20-21",
        position: "D??veloppeur Full Stack",
        company: "Ind??pendant, Tallinn, Estonie.",
        responsibilities: [
          `
            D??ploiement de JAM stacks dans des d??lais comp??titifs et conseil sur
            les choix technologiques, d'infrastructure et fonctionnels (AMO, La
            Ligue des Gentlemens).
          `
        ],
        techs: techsIndep,
      },
      {
        isHidden: false,
        date: "18-20",
        position: "D??veloppeur Lead (Symfony, React)",
        company: "KNP Labs, Nantes.",
        responsibilities: [
          `
            D??veloppement de SPAs (single page applications) et d'APIs REST pour
            notre client international i24NEWS; aide ?? la d??finition du besoin
            des utilisateurs finaux (journalistes), coordination des partenaires
            tiers impliqu??s dans le d??veloppement; r??solution de probl??matiques
            de scalabilit?? et d'orchestration, d??ploiement d'applications en
            zone Europe/US avec Docker Swarm.
          `,
          `
            Approche qualit?? centr??e sur la testabilit?? (TDD), l'int??gration et
            le d??ploiement continu (CI/CD), le comportement (BDD) et la
            flexibilit?? gr??ce aux m??thodes agiles; formation de d??veloppeurs
            juniors et r??daction d'articles techniques.
          `,
        ],
        techs: techsKNP,
      },
      {
        isHidden: false,
        date: "13-18",
        position: "D??veloppeur (Symfony)",
        company: "IBT Groupe, Nantes.",
        responsibilities: [
          `
            Am??lioration de l'environnement de d??veloppement de l'entreprise
            (mise en place d'une CI, tests, frameworks); am??lioration de la
            productivit?? des consultants par la centralisation, dans une
            application, des demandes d'assistance de leurs clients; analyse
            pr??dictive pour donner de la visibilit?? aux consultants sur les
            p??riodes ?? venir.
          `,
        ],
        techs: techsIBT,
      },
      {
        isHidden: false,
        date: "2016",
        position: "Render wrangler / d??veloppeur",
        company: "Mishimasaiko, Lardux Films.",
        responsibilities: [
          `
            Gestion de la render farm (envoi et r??cup??ration des shots,
            installation et surveillance des lames, sauvegardes); d??veloppement
            et maintenance du site web du film.
          `,
        ],
        techs: [
          "Deadline",
          "Nuke",
          "Maya",
          "VRay",
          "Alambic",
        ],
      },
      {
        isHidden: true,
        date: "2013",
        position: "G??n??raliste informatique / assistant DBA",
        company: "CNAM, Nantes.",
        responsibilities: [
          `
            Sauvegarde et de restauration de bases de donn??es; d??veloppement de
            processus ETL et de rapports avec satistiques d'inscriptions pour
            la direction.
          `,
        ],
        techs: techsCNAM,
      },
    ],
  },
};

export default dictionary;
