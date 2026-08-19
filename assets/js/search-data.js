// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-the-paper-bert-s-conceptual-cartography-mapping-the-landscapes-of-meaning-by-ryan-daniels-and-me-was-accepted-for-poster-presentation-at-the-eighth-society-for-computation-in-linguistics-conference-scil-2025-our-methodology-lightning-talk-conceptual-landscaping-with-bert-and-friends-was-also-accepted-at-the-same-conference",
          title: 'The paper “BERT’s Conceptual Cartography: Mapping the Landscapes of Meaning” by Ryan Daniels...',
          description: "",
          section: "News",},{id: "news-my-proposed-chapter-conceptual-engineering-in-the-age-of-emerging-tech-a-bottom-up-approach-to-lexical-semantics-has-been-invited-to-contribute-to-the-edited-collection-conceptual-engineering-for-emerging-technologies-ed-by-manuel-gustavo-isaac-lily-eva-frank-and-jeroen-hopster-routledge-publishing-company",
          title: 'My proposed chapter, “Conceptual Engineering in the Age of Emerging Tech: A Bottom-Up...',
          description: "",
          section: "News",},{id: "news-collaborative-conceptual-engineering-linguistics-and-philosophy-published-as-a-chapter-in-conceptual-engineering-methodological-and-metaphilosophical-issues-edited-by-piotr-stalmaszczyk",
          title: '“Collaborative Conceptual Engineering: Linguistics and Philosophy” published as a chapter in “Conceptual Engineering...',
          description: "",
          section: "News",},{id: "news-presentation-at-the-6th-international-conference-of-the-american-pragmatics-association-ampra-in-florida-titled-the-forgotten-pragmatic-aspect-of-conceptual-engineering",
          title: 'Presentation at the 6th International Conference of the American Pragmatics Association (AMPRA) in...',
          description: "",
          section: "News",},{id: "news-my-paper-meta-pragmatics-in-conceptual-engineering-towards-a-pragmatic-lexical-taxonomy-was-accepted-for-presentation-as-part-of-the-panel-choosing-the-best-words-organized-by-cliff-goddard-helen-bromhead-during-the-19th-international-pragmatics-conference-to-be-held-in-brisbane-australia-from-22-to-27-june-2025",
          title: 'My paper “(Meta)pragmatics in Conceptual Engineering: Towards a pragmatic lexical taxonomy” was accepted...',
          description: "",
          section: "News",},{id: "news-joined-the-organising-committee-for-the-11th-biennial-experimental-pragmatics-conference-xprag-2025",
          title: 'Joined the organising committee for the 11th Biennial Experimental Pragmatics Conference (XPRAG 2025)...',
          description: "",
          section: "News",},{id: "news-won-a-student-bursary-to-attend-the-19th-international-pragmatics-conference-to-be-held-in-brisbane-australia-from-22-to-27-june-2025",
          title: 'Won a student bursary to attend the 19th International Pragmatics Conference to be...',
          description: "",
          section: "News",},{id: "news-i-was-shortlisted-for-the-trinity-college-junior-research-fellowship-one-of-the-most-prestigious-and-competitive-postdoctoral-fellowships-in-the-uk",
          title: 'I was shortlisted for the Trinity College Junior Research Fellowship, one of the...',
          description: "",
          section: "News",},{id: "news-i-m-delighted-to-announce-that-i-will-be-joining-the-university-of-east-anglia-as-a-research-associate-in-the-school-of-psychology-working-on-the-project-experimental-argument-analysis-reasoning-with-stereotypes-with-prof-eugen-fischer-and-assoc-prof-paul-engelhardt",
          title: 'I’m delighted to announce that I will be joining the University of East...',
          description: "",
          section: "News",},{id: "news-i-submitted-my-phd-thesis-navigating-meaning-spaces-a-contextualist-perspective-on-conceptual-engineering-to-the-university-of-cambridge-on-31st-january-2026",
          title: 'I submitted my PhD thesis, “Navigating Meaning Spaces: A Contextualist Perspective on Conceptual...',
          description: "",
          section: "News",},{id: "news-i-passed-my-phd-viva-on-17th-march-2026-many-thanks-to-my-examiners-for-a-stimulating-discussion",
          title: 'I passed my PhD viva on 17th March 2026. Many thanks to my...',
          description: "",
          section: "News",},{id: "news-i-submitted-my-corrected-phd-thesis-to-the-university-of-cambridge-on-1st-june-2026",
          title: 'I submitted my corrected PhD thesis to the University of Cambridge on 1st...',
          description: "",
          section: "News",},{id: "news-my-corrected-phd-thesis-was-approved-by-the-university-of-cambridge-in-june-2026",
          title: 'My corrected PhD thesis was approved by the University of Cambridge in June...',
          description: "",
          section: "News",},{id: "news-i-ve-been-invited-to-give-a-talk-at-the-valence-asymmetries-seminar-universitat-pompeu-fabra-spain-in-2027",
          title: 'I’ve been invited to give a talk at the Valence Asymmetries seminar, Universitat...',
          description: "",
          section: "News",},{id: "projects-navigating-meaning-spaces-a-contextualist-perspective-on-conceptual-engineering",
          title: 'Navigating Meaning Spaces; A Contextualist Perspective on Conceptual Engineering',
          description: "PhD Research Project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-experimental-argument-analysis-reasoning-with-stereotypes",
          title: 'Experimental Argument Analysis; Reasoning with Stereotypes',
          description: "with Prof. Eugen Fischer and Dr Paul Engelhardt, University of East Anglia",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/nina-haket-a3878b15b", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-9553-507X", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=9CA6SFUAAAAJ&hl", "_blank");
        },
      },];
