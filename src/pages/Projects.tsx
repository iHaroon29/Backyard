import { PageBodyLayout } from '@/components/common/PageBodyLayout'
import { ProjectCard } from '@/components/projects/ProjectCard'
import * as projectsJson from '../projects.json'

export const Projects = () => {
  const { projects } = projectsJson
  return (
    <PageBodyLayout pageName='Projects'>
      <div className='grid grid-cols-1 gap-4 px-4 py-2 overflow-y-scroll h-[89%] rounded-xl md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-2 '>
        {projects.map((project, index) => {
          return (
            <ProjectCard project={project} key={project.projectName + index} />
          )
        })}
      </div>
    </PageBodyLayout>
  )
}
