import { Link } from 'react-router-dom'

type ProjectInfo = {
  projectName: string
  tags: string[]
  projectDescription: string
  publishedDate: string
  githubLink: string | null
  deploymentLink: string | null
  readMore: boolean
}
type Props = {
  project: ProjectInfo
}

export const ProjectCard = ({ project }: Props) => {
  const { projectDescription, projectName, publishedDate, tags, readMore } =
    project
  return (
    <article className='rounded-xl transition hover:shadow-lg bg-white'>
      <div className='rounded-[10px] p-4 h-full'>
        <time
          dateTime='2022-10-10'
          className='text-sm text-gray-700 bg-slate-100 px-2 py-1 inline-block rounded-md'
        >
          {publishedDate}
        </time>

        <h3 className='mt-4 text-3xl text-[#282828] font-medium tracking-tight lg:text-4xl'>
          {projectName}
        </h3>

        <p className='mt-4 bg-slate-100 text-slate-600 p-2 rounded-md text-lg tracking-tight'>
          {projectDescription}
        </p>

        <div className='mt-4 flex flex-wrap justify-left gap-1'>
          {tags.map((tag) => {
            return (
              <span className='whitespace-nowrap rounded-md bg-purple-100 px-2 py-1 text-sm text-purple-600'>
                {tag}
              </span>
            )
          })}
        </div>

        <div className='icon-holder flex mt-8 w-content justify-center items-center'>
          {readMore ? (
            <Link
              className='group inline-flex items-center text-[#282828] text-md font-medium rounded-md hover:underline'
              to={`/project/${projectName
                .split(' ')
                .map((node) => node.toLowerCase())
                .join('-')}`}
            >
              Read More
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  )
}
