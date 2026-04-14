const certificationSourceUrl = 'https://github.com/LeonLow97-Sandbox';

const certifications = [
  {
    completed: '31 Oct 2024',
    provider: 'Udemy',
    certification: 'Ultimate AWS Certified Cloud Practitioner CLF-C02',
    focus: ['AWS'],
    link: 'https://www.udemy.com/certificate/UC-5f8bb1b0-97c0-4e72-939b-bfd837a74908/',
  },
  {
    completed: '23 Jun 2024',
    provider: 'Udemy',
    certification: 'Kubernetes Certified Application Developer (CKAD) with Tests',
    focus: ['Kubernetes'],
    link: 'https://www.udemy.com/certificate/UC-18bb8e45-c901-494a-ad25-1027b926aeee/',
  },
  {
    completed: '19 May 2024',
    provider: 'Udemy',
    certification: 'Master Redis - From Beginner to Advanced',
    focus: ['Redis'],
    link: 'https://www.udemy.com/certificate/UC-2e3f46c1-39fd-429e-9b5e-14f9251a480b/',
  },
  {
    completed: '27 Mar 2024',
    provider: 'Codebashing',
    certification: 'Checkmarx Codebashing Course: Docker',
    focus: ['Docker', 'Security'],
    link: 'https://content.codebashing.com/certificates/390b874d-0b70-46c0-aa42-7c3d0c18213b.png',
  },
  {
    completed: '24 Mar 2024',
    provider: 'Codebashing',
    certification: 'Application Security and Secure Coding Training in Go',
    focus: ['Go', 'Security'],
    link: 'https://content.codebashing.com/certificates/ced1dc0f-e9fd-400d-ae55-b108a71476ec.png',
  },
  {
    completed: '16 Mar 2024',
    provider: 'Codebashing',
    certification: 'Application Security and Secure Coding Training in Front End Security Basics',
    focus: ['Frontend', 'Security'],
    link: 'https://content.codebashing.com/certificates/408742d0-9768-42ac-ba27-31a2fd3ee057.png',
  },
  {
    completed: '8 Mar 2024',
    provider: 'Codebashing',
    certification: 'Application Security and Secure Coding Training in HTTP Security Principles',
    focus: ['HTTP', 'Security'],
    link: 'https://content.codebashing.com/certificates/db088464-0b55-4ce6-948b-1a7989687f8a.png',
  },
  {
    completed: '8 Dec 2023',
    provider: 'Udemy',
    certification: 'Agile Fundamentals: Including Scrum & Kanban',
    focus: ['Agile', 'Scrum'],
    link: 'https://www.udemy.com/certificate/UC-5b87f2c0-7321-4c04-8b12-34a62a0f8582/',
  },
  {
    completed: '8 Dec 2023',
    provider: 'Udemy',
    certification: 'Introduction to Computer Networks for Non-Techies',
    focus: ['Computer Networking'],
    link: 'https://www.udemy.com/certificate/UC-041a9876-5759-4d2c-8725-ef238abfddba/',
  },
  {
    completed: '7 Dec 2023',
    provider: 'Udemy',
    certification: 'Working with WebSockets in Go (Golang)',
    focus: ['Go', 'WebSocket'],
    link: 'https://www.udemy.com/certificate/UC-bb774e3b-6658-4cfc-94bd-beede04ef9cf/',
  },
  {
    completed: '2 Dec 2023',
    provider: 'Udemy',
    certification: 'Docker for the Absolute Beginner - Hands On',
    focus: ['Docker'],
    link: 'https://www.udemy.com/certificate/UC-2c31c73e-b6c5-4b96-bb68-5ff9f8a371a8/',
  },
  {
    completed: '29 Nov 2023',
    provider: 'Udemy',
    certification: 'Docker and Kubernetes: The Complete Guide',
    focus: ['Docker', 'Kubernetes'],
    link: 'https://www.udemy.com/certificate/UC-30845639-7855-44d8-a041-76e75446f76c/',
  },
  {
    completed: '28 Nov 2023',
    provider: 'Udemy',
    certification: 'Kubernetes for the Absolute Beginners - Hands-on',
    focus: ['Kubernetes'],
    link: 'https://www.udemy.com/certificate/UC-cf1421e5-2b2f-47bf-9f5f-db2f21d6f357/',
  },
  {
    completed: '26 Nov 2023',
    provider: 'Udemy',
    certification: 'Build Responsive Real-World Websites with HTML and CSS',
    focus: ['HTML', 'CSS'],
    link: 'https://www.udemy.com/certificate/UC-24cd07f5-9fcd-4f33-9d64-f17593157b1e/',
  },
  {
    completed: '18 Nov 2023',
    provider: 'Udemy',
    certification: 'Building a Module in Go (Golang)',
    focus: ['Go'],
    link: 'https://www.udemy.com/certificate/UC-3dee459c-7ec9-44d8-ba04-5781c39b7251/',
  },
  {
    completed: '15 Nov 2023',
    provider: 'Udemy',
    certification: 'Design Microservices Architecture with Patterns and Principles',
    focus: ['Microservices'],
    link: 'https://www.udemy.com/certificate/UC-73be4638-88b3-4155-80e3-067637079461/',
  },
  {
    completed: '12 Nov 2023',
    provider: 'Udemy',
    certification: 'Working with Microservices in Go (Golang)',
    focus: ['Go', 'Microservices'],
    link: 'https://www.udemy.com/certificate/UC-56ab48ed-bc84-4aa4-b2d3-ebcdc179d76e/',
  },
  {
    completed: '12 Nov 2023',
    provider: 'Udemy',
    certification: 'The DevOps Essentials - The Handbook',
    focus: ['DevOps'],
    link: 'https://www.udemy.com/certificate/UC-67a99824-6c4d-4acf-9ea9-705933e85126/',
  },
  {
    completed: '9 Nov 2023',
    provider: 'Udemy',
    certification: 'SDLC - Software Development Life Cycle',
    focus: ['SDLC'],
    link: 'https://www.udemy.com/certificate/UC-e1ffd9ff-8aa6-4d96-8e98-da56a156a96b/',
  },
  {
    completed: '14 Oct 2023',
    provider: 'Udemy',
    certification: 'Working with Concurrency in Go (Golang)',
    focus: ['Go'],
    link: 'https://www.udemy.com/certificate/UC-dfd5bee6-44aa-4010-8f9a-a565c805e176/',
  },
  {
    completed: '26 Sep 2023',
    provider: 'Udemy',
    certification: 'The Linux Command Line Bootcamp: Beginner To Power User',
    focus: ['Linux'],
    link: 'https://www.udemy.com/certificate/UC-675e0dd1-b3c5-4a3d-9f86-5cb3ddae6996/',
  },
  {
    completed: '13 Sep 2023',
    provider: 'Udemy',
    certification: "SQL and PostgreSQL: The Complete Developer's Guide",
    focus: ['SQL', 'PostgreSQL'],
    link: 'https://www.udemy.com/certificate/UC-f0acc90b-90e6-49c2-a7b3-a13bf2e8c112/',
  },
  {
    completed: '26 Aug 2023',
    provider: 'Udemy',
    certification: 'Working with Vue 3 and Go (Golang)',
    focus: ['Go', 'Vue'],
    link: 'https://www.udemy.com/certificate/UC-f088bb74-230a-4ec3-b964-66b511e343e1/',
  },
  {
    completed: '16 Aug 2023',
    provider: 'Udemy',
    certification: 'Introduction to Testing in Go (Golang)',
    focus: ['Go'],
    link: 'https://www.udemy.com/certificate/UC-9d3ac2eb-9c2a-4e04-8400-db751a58450d/',
  },
  {
    completed: '13 Aug 2023',
    provider: 'Udemy',
    certification: 'Vue Masterclass (Covers Vue 2 and 3)',
    focus: ['Vue'],
    link: 'https://www.udemy.com/certificate/UC-99da9519-e158-46f5-ad2c-357437b6cc26/',
  },
  {
    completed: '17 Jun 2023',
    provider: 'Udemy',
    certification: 'Concurrency, Multithreading and Parallel Computing in Java',
    focus: ['Java'],
    link: 'https://www.udemy.com/certificate/UC-0b536ec4-8162-458d-a4c6-7bac6c466cff/',
  },
  {
    completed: '8 Jun 2023',
    provider: 'Udemy',
    certification: 'Spring Security 6 Zero to Master along with JWT, OAUTH2',
    focus: ['Java', 'Spring Security'],
    link: 'https://www.udemy.com/certificate/UC-731e0edf-7b48-4456-92bb-7c04a5d5a528/',
  },
  {
    completed: '4 Jun 2023',
    provider: 'Udemy',
    certification: 'The Git & GitHub Bootcamp',
    focus: ['Git'],
    link: 'https://www.udemy.com/certificate/UC-bd53f466-921d-4abc-b351-51deee2d7d7c/',
  },
  {
    completed: '20 May 2023',
    provider: 'Udemy',
    certification: 'Modern React with Redux',
    focus: ['React'],
    link: 'https://www.udemy.com/certificate/UC-a78a556f-2d42-4561-ae58-d63de9db1903/',
  },
  {
    completed: '2 Apr 2023',
    provider: 'Udemy',
    certification: 'The Complete Spring Boot Development Bootcamp',
    focus: ['Java', 'Spring Boot'],
    link: 'https://www.udemy.com/certificate/UC-cde0b085-4b66-45ab-a16b-8a1d3a4f0acc/',
  },
  {
    completed: '25 Mar 2023',
    provider: 'Udemy',
    certification: 'The Complete Java Development Bootcamp',
    focus: ['Java'],
    link: 'https://www.udemy.com/certificate/UC-0eae483a-f79c-404c-a1c8-0edfc70a0d66/',
  },
  {
    completed: '3 Nov 2022',
    provider: 'Udemy',
    certification: 'JavaScript Algorithms and Data Structures Masterclass',
    focus: ['JavaScript'],
    link: 'https://www.udemy.com/certificate/UC-f284961e-8034-4d9d-9fd9-a20ebc486c38/',
  },
  {
    completed: '26 Oct 2022',
    provider: 'Udemy',
    certification: "Web Development w/ Google's Go (golang) Programming Language",
    focus: ['Go'],
    link: 'https://www.udemy.com/certificate/UC-46eecc21-895b-40af-b2ab-f977c55182c0/',
  },
  {
    completed: '19 Sep 2022',
    provider: 'Udemy',
    certification: "Google's Go (golang) Programming Language",
    focus: ['Go'],
    link: 'https://www.udemy.com/certificate/UC-5af41117-1c95-4084-b448-5c22cd7b6413/',
  },
  {
    completed: '12 Sep 2022',
    provider: 'Udemy',
    certification: 'Clean Code',
    focus: ['Clean Code'],
    link: 'https://www.udemy.com/certificate/UC-824a229c-e5b9-4693-8bf5-f164c03fc096/',
  },
  {
    completed: '8 Sep 2022',
    provider: 'Udemy',
    certification: 'OWASP top 10: Web Application Security for beginners',
    focus: ['Security'],
    link: 'https://www.udemy.com/certificate/UC-9ee9f834-9128-47d4-8b27-8eb4c0036752/',
  },
  {
    completed: '8 Sep 2022',
    provider: 'Udemy',
    certification: 'GitLab CI: Pipelines, CI/CD and DevOps for Beginners',
    focus: ['GitLab'],
    link: 'https://www.udemy.com/certificate/UC-1184909b-b4b6-4123-9349-d78d05ee7f13/',
  },
  {
    completed: '3 Sep 2022',
    provider: 'Udemy',
    certification: "Go: The Complete Developer's Guide (Golang)",
    focus: ['Go'],
    link: 'https://www.udemy.com/certificate/UC-2367ab93-2780-4661-bd0e-8429453ce048/',
  },
  {
    completed: '22 Jul 2022',
    provider: 'Udemy',
    certification: 'React for the Rest of Us',
    focus: ['React'],
    link: 'https://www.udemy.com/certificate/UC-3681dcd0-a14b-47a1-90f5-1ddfbe4a8a7c/',
  },
  {
    completed: '24 Jun 2022',
    provider: 'Udemy',
    certification: 'MySQL Database Administration: Beginner SQL Database Design',
    focus: ['MySQL'],
    link: 'https://www.udemy.com/certificate/UC-afa08872-4df8-4492-8a8c-0e43115725f6/',
  },
  {
    completed: '23 Jun 2022',
    provider: 'Udemy',
    certification: 'Learn and Understand NodeJS',
    focus: ['Node'],
    link: 'https://www.udemy.com/certificate/UC-e1f99207-2779-4327-8910-e4dc8648b6d3/',
  },
  {
    completed: '18 Jan 2022',
    provider: 'edX',
    certification: 'CS1301xII: Computing in Python II: Control Structures',
    focus: ['Python'],
    link: 'https://courses.edx.org/certificates/c3d63984ac854f42b01c6e343e8bfdf3',
  },
  {
    completed: '7 Jan 2022',
    provider: 'edX',
    certification: 'COMP102.2x: Introduction to Java Programming - Part 2',
    focus: ['Java'],
    link: 'https://courses.edx.org/certificates/279392520f784ab6b26660758f24ab61',
  },
  {
    completed: '23 Dec 2021',
    provider: 'edX',
    certification: 'COMP102.1x: Introduction to Java Programming - Part 1',
    focus: ['Java'],
    link: 'https://courses.edx.org/certificates/de8503a2a8b449a384c725a1052155b6',
  },
  {
    completed: '15 Dec 2021',
    provider: 'Udemy',
    certification: 'Data Analysis with Pandas and Python',
    focus: ['Python', 'Pandas'],
    link: 'https://www.udemy.com/certificate/UC-697f6cee-8293-4115-baa6-551819276734/',
  },
];

function certificationRowMarkup(entry) {
  const focusMarkup = entry.focus
    .map(
      (item) =>
        `<span class="cert-focus-pill">${item.trim()}</span>`
    )
    .join('');
  const certificationMarkup = entry.link
    ? `<a class="cert-name" href="${entry.link}" target="_blank" rel="noopener">${entry.certification}</a>`
    : `<span class="cert-name">${entry.certification}</span>`;
  const rowAttrs = entry.link
    ? ` class="cert-row-link" data-href="${entry.link}"`
    : '';

  return `
    <tr${rowAttrs}>
      <td class="cert-date" data-label="Completed">${entry.completed}</td>
      <td data-label="Provider"><span class="cert-provider">${entry.provider}</span></td>
      <td data-label="Certification">${certificationMarkup}</td>
      <td data-label="Focus"><div class="cert-focus-list">${focusMarkup}</div></td>
    </tr>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const tableBodies = document.querySelectorAll('[data-certifications-body]');
  tableBodies.forEach((body) => {
    const limitValue = body.getAttribute('data-cert-limit');
    const limit = limitValue ? Number.parseInt(limitValue, 10) : certifications.length;
    const rows = certifications.slice(0, Number.isNaN(limit) ? certifications.length : limit);

    body.innerHTML = rows.map(certificationRowMarkup).join('');
  });

  document.querySelectorAll('.cert-row-link').forEach((row) => {
    row.addEventListener('click', (event) => {
      const target = event.target;
      if (target instanceof HTMLElement && target.closest('a')) return;

      const href = row.getAttribute('data-href');
      if (!href) return;

      window.open(href, '_blank', 'noopener');
    });
  });

  const totals = document.querySelectorAll('[data-cert-total]');
  totals.forEach((node) => {
    node.textContent = certifications.length.toString();
  });

  const latest = document.querySelectorAll('[data-cert-latest]');
  latest.forEach((node) => {
    node.textContent = certifications[0]?.completed ?? '';
  });

  const sourceLinks = document.querySelectorAll('[data-cert-source]');
  sourceLinks.forEach((node) => {
    node.setAttribute('href', certificationSourceUrl);
  });
});
