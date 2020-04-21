import React from 'react'
import jds from './jd.json'
import { IJob } from './job'

export class JobList extends React.PureComponent {
  render() {
    return (
      <>
        <p className="mt-10 text-gray-700">
          At GGJungle, we work on the investment. And we can help you find yours. If you’re passionate any relevant,
          solving complex problems and challenging the status quo, we want to hear from you. Whether you’re student
          looking for an internship, a graduate seeking a full-time position, take your first step toward a career at
          GGJungle below. Who knows where it may take you next.
        </p>
        <div className="text-2xl text-gray-800 pt-6">I’m looking for:</div>
        <div className={'flex flex-wrap'}>
          {jds.jobs.map((jd: IJob) => (
            <div key={jd.title} className="job-item max-w-sm w-full flex flex-col mr-0 md:mr-4 border mt-6">
              <div className="p-4">
                <div className="text-xl md:text-2xl text-gray-700">{jd.title}</div>
                <div className="skills flex flex-wrap pt-4">
                  {jd.skills.map(skill => (
                    <div key={skill} className="skill border w-auto px-2 text-gray-600 m-1">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <a
                href={'/career?job=' + jd.title}
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 border text-center"
              >
                View detail
              </a>
            </div>
          ))}
        </div>
      </>
    )
  }
}
