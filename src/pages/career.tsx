import React from 'react'
import Layout from '../layout'
import { Intro } from '../components/Intro'
import { JobList } from '../containers/jobs/job-list'
import { JobDetail } from '../containers/jobs/job-detail'
import { IJob } from '../containers/jobs/job'
import jds from '../containers/jobs/jd.json'

export default class Career extends React.Component<any> {
  render() {
    if (typeof window !== 'undefined' && window.location.pathname.includes('offline-plugin-app-shell-fallback'))
      return null
    const query = decodeURIComponent(this.props.location.search).replace('?job=', '')
    const selectedJob: IJob = jds.jobs.find((job: IJob) => job.title === query)
    return (
      <Layout>
        <Intro
          title="“Unfold the talents and shine the lives with GGJungle”"
          titleClass="max-w-full md:max-w-md lg:max-w-lg"
          displayParticle={true}
        />
        <div className="container px-6 md:px-16 lg:px-18">
          <div className={'jobs'}>{!selectedJob && <JobList />}</div>
          {selectedJob && <JobDetail selectedJob={selectedJob} />}
        </div>
      </Layout>
    )
  }
}
