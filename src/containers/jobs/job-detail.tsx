import React from 'react'
import { IJob } from './job'
import jds from './jd.json'

interface JobDetailProps {
  selectedJob: IJob
}

export class JobDetail extends React.PureComponent<JobDetailProps> {
  render() {
    const { selectedJob } = this.props
    return (
      <div className={'flex mt-10 '}>
        <div className={'text-gray-700 pr-0 md:pr-4'}>
          <h1 className={'text-3xl'}>{selectedJob.title}</h1>
          <div className="skills flex flex-wrap">
            {selectedJob.skills.map(skill => (
              <div key={skill} className="skill border w-auto px-2 text-gray-500 m-1">
                {skill}
              </div>
            ))}
          </div>
          <p className={'pt-2'}>{selectedJob.description}</p>
          <h1 className="pt-8 text-xl text-blue-700">Responsibilities</h1>
          <div className={'flex flex-col'}>
            {selectedJob.responsibilities.map(resp => (
              <span key={resp}>●&nbsp;&nbsp;{resp}</span>
            ))}
          </div>
          <h1 className="pt-8 text-xl text-blue-700">Qualifications</h1>
          <div className={'flex flex-col'}>
            {selectedJob.qualifications.map(qualify => (
              <span key={qualify}>●&nbsp;&nbsp;{qualify}</span>
            ))}
          </div>
          <h1 className="pt-8 text-xl text-blue-700">Benefits</h1>
          <div className={'flex flex-col'}>
            {selectedJob.benefits.map(benefit => (
              <span key={benefit}>●&nbsp;&nbsp;{benefit}</span>
            ))}
          </div>
          <div className="text-gray-600 mt-10">
            If you are interested, don't hesitate to contact us via{' '}
            <a href="mailto:hr@ggjungle.vn" className="text-orange-600">
              hr@ggjungle.vn
            </a>
          </div>
        </div>
        <div className={'hidden md:block border flex flex-col h-auto max-w-xs w-full'}>
          <div className={'text-center bg-gblue text-white border py-2'}>Jobs</div>
          {jds.jobs.map((job: IJob) => {
            if (job.title === selectedJob.title) return null
            return (
              <div key={job.title} className={'flex flex-col px-3 mt-4'}>
                <a href={'?job=' + job.title} className={'text-blue-700 block text-lg'}>
                  {job.title}
                </a>
                <div className="skills flex flex-wrap pt-1">
                  {job.skills.map(skill => (
                    <div key={skill} className="skill border w-auto px-2 text-gray-600 m-1 text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
