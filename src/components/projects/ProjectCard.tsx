import { ExternalLink, Github } from 'lucide-react'
import { Link } from 'react-router-dom'

type ProjectInfo = {
  projectName: string
  tags: string[]
  projectDescription: string
  publishedDate: string
  githubLink: string | null
  deploymentLink: string | null
}
type Props = {
  project: ProjectInfo
}

export const ProjectCard = ({ project }: Props) => {
  const {
    deploymentLink,
    githubLink,
    projectDescription,
    projectName,
    publishedDate,
    tags,
  } = project
  return (
    <article className='rounded-xl'>
      <div className='rounded-[10px] bg-white p-4'>
        <time
          dateTime='2022-10-10'
          className='text-sm text-gray-500 bg-slate-100 px-2 py-1 inline-block rounded-full'
        >
          {publishedDate}
        </time>

        <h3 className='mt-2 text-3xl font-medium text-gray-900 lg:text-4xl'>
          {projectName}
        </h3>

        <p className='mt-3 bg-slate-100 text-slate-600 p-1 rounded-md text-md italic'>
          "{projectDescription}"
        </p>

        <div className='mt-3 flex flex-wrap justify-left gap-1'>
          {tags.map((tag) => {
            return (
              <span className='whitespace-nowrap rounded-full bg-purple-100 px-2 py-1 text-sm text-purple-600'>
                {tag}
              </span>
            )
          })}
        </div>

        <div className='icon-holder flex mt-3 w-[23%] justify-between text-[#030711]'>
          {githubLink ? (
            <Link
              to={githubLink ? githubLink : ''}
              target='_blank'
              className='p-1'
            >
              <Github size={28} />
            </Link>
          ) : null}
          {deploymentLink ? (
            <Link
              to={deploymentLink ? deploymentLink : ''}
              target='_blank'
              className='p-1'
            >
              <ExternalLink size={28} />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  )
}
