// import { Link } from 'react-router-dom'
import { PageBodyLayout } from '@/components/common/PageBodyLayout'
import * as projectsJson from '../projects.json'

export const Projects = () => {
  const { projects } = projectsJson
  // const tags = [...new Set(...projects.map(({ tags }) => tags))]
  // const [isActive, setIsActive] = useState<[string] | []>([])
  return (
    <PageBodyLayout pageName='Projects'>
      <div className='contentholder grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-2 px-4 py-2 overflow-y-scroll h-[85%] rounded-xl'>
        {projects.map(
          ({
            projectName,
            tags,
            publishedDate,
            githubLink,
            projectDescription,
            deploymentLink,
          }) => {
            return (
              <article className='rounded-xl p-0.5 shadow-xl'>
                <div className='rounded-[10px] bg-white p-4'>
                  <time
                    dateTime='2022-10-10'
                    className='block text-sm text-gray-500 bg-slate-100 px-2 py-1 inline-block rounded-full'
                  >
                    {publishedDate}
                  </time>

                  <a
                    href={githubLink !== '' ? githubLink : deploymentLink}
                    target='_blank'
                  >
                    <h3 className='my-2 text-3xl font-medium text-gray-900 lg:text-4xl'>
                      {projectName}
                    </h3>
                  </a>

                  <p className='bg-slate-100 text-slate-600 p-1 rounded-md text-md italic'>
                    "{projectDescription}"
                  </p>

                  <div className='mt-4 flex flex-wrap justify-left gap-1'>
                    {tags.map((tag) => {
                      return (
                        <span className='whitespace-nowrap rounded-full bg-purple-100 px-2 py-1 text-sm text-purple-600'>
                          {tag}
                        </span>
                      )
                    })}
                  </div>
                  {/* <Link
                    to={{
                      pathname: `/projects/${projectName}`,
                    }}
                    target='_blank'
                  >
                    Know More
                  </Link> */}
                </div>
              </article>
            )
          }
        )}
      </div>
    </PageBodyLayout>
  )
}
