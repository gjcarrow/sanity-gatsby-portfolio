export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dd7245fd19de1f55588850a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-cm3iaxv2',
                  apiId: 'c3a54ec9-94b8-465b-8f6e-86dd75f63ad0'
                },
                {
                  buildHookId: '5dd7245f019035d1a631d6dc',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vmeva49j',
                  apiId: '09345800-d9a5-4b5e-b1fe-eef2d4905a2f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gjcarrow/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vmeva49j.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
