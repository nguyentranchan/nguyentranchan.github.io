import React from 'react'
import Layout from '../layout'
import { Intro } from '../components/Intro'

export default class Career extends React.Component {
  render() {
    return (
      <Layout>
        <Intro
          title="“Unfold the talents and shine the lives with GGJungle”"
          titleClass="max-w-full md:max-w-md lg:max-w-lg"
        />
        <div className="flex justify-center flex-auto">
          <div className="gcontainer flex flex-wrap-reverse">
            <div className="px-6 md:px-16 lg:px-18">
              <div className="jd flex flex-col border mt-10">
                <div className="bg-yellow-500 h-2" />
                <div className="job-content p-4">
                  <h1 className="text-3xl text-gray-500">Frontend Developer</h1>
                  <div className="skills flex flex-wrap pt-4">
                    <div className="skill border w-auto px-2 text-gray-500 m-1">Analytical Skills</div>
                    <div className="skill border w-auto px-2 text-gray-500 m-1">SQL</div>
                    <div className="skill border w-auto px-2 text-gray-500 m-1">UI - UX</div>
                    <div className="skill border w-auto px-2 text-gray-500 m-1">Managerial Skills</div>
                  </div>
                  <h1 className="pt-8 text-xl text-blue-700">Qualifications</h1>
                  <p className="text-gray-600">
                    Bachelor degree preferably in Computer Science or Business Information System Obtaining IT
                    knowledge-base Fluent English to be able to communicate directly with customers At least 3 years of
                    working experience of which 2 years in analyzing requirements Basic experience in programming
                    languages Basic knowledge on database such as database schema and simple SQL query Knowledge of
                    testing approaches and techniques
                  </p>
                  <h1 className="pt-8 text-xl text-blue-700">Requirement</h1>
                  <p className="text-gray-600">
                    Bachelor degree preferably in Computer Science or Business Information System Obtaining IT
                    knowledge-base Fluent English to be able to communicate directly with customers At least 3 years of
                    working experience of which 2 years in analyzing requirements Basic experience in programming
                    languages Basic knowledge on database such as database schema and simple SQL query Knowledge of
                    testing approaches and techniques
                  </p>
                  <h1 className="pt-8 text-xl text-blue-700">Benefits</h1>
                  <p className="text-gray-600">
                    Bachelor degree preferably in Computer Science or Business Information System Obtaining IT
                    knowledge-base Fluent English to be able to communicate directly with customers At least 3 years of
                    working experience of which 2 years in analyzing requirements Basic experience in programming
                    languages Basic knowledge on database such as database schema and simple SQL query Knowledge of
                    testing approaches and techniques
                  </p>

                  <div className="text-gray-600 mt-10">
                    If you are interested, don't hesitate to contact us via{' '}
                    <a href="mailto:hr@gogojungle.vn" className="text-orange-600">
                      hr@gogojungle.vn
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="job-list flex flex-wrap md:flex-no-wrap justify-center px-6 md:px-16 lg:px-18 text-white w-full">
              <div className="job-item max-w-sm w-full flex-auto flex flex-col mr-4 border mt-10">
                <div className="job-title bg-green-500 flex justify-center py-1 border">Fresher</div>
                <div className="p-4">
                  <a href="#" className="text-xl md:text-2xl text-gray-600">
                    Frontend Developer
                  </a>
                  <div className="skills flex flex-wrap pt-4">
                    <div className="skill border w-auto px-2 text-gray-500 m-1">Analytical Skills</div>
                    <div className="skill border w-auto px-2 text-gray-500 m-1">SQL</div>
                    <div className="skill border w-auto px-2 text-gray-500 m-1">UI - UX</div>
                    <div className="skill border w-auto px-2 text-gray-500 m-1">Managerial Skills</div>
                  </div>
                </div>
              </div>
              <div className="job-item max-w-sm w-full flex-auto flex flex-col mx-4 border mt-10">
                <div className="job-title bg-blue-700 flex justify-center py-1 border">Fresher</div>
                <div className="p-4">
                  <a href="#" className="text-xl md:text-2xl text-gray-600">
                    Backend Developer
                  </a>
                  <div className="skills flex flex-wrap pt-4">
                    <div className="skill border w-auto px-2 text-gray-500 m-1">Analytical Skills</div>
                    <div className="skill border w-auto px-2 text-gray-500 m-1">SQL</div>
                    <div className="skill border w-auto px-2 text-gray-500 m-1">UI - UX</div>
                    <div className="skill border w-auto px-2 text-gray-500 m-1">Managerial Skills</div>
                  </div>
                </div>
              </div>
              <div className="job-item max-w-sm w-full flex-auto flex flex-col mx-4 border mt-10">
                <div className="job-title bg-yellow-500 flex justify-center py-1 border">Senior</div>
                <div className="p-4">
                  <a href="#" className="text-xl md:text-2xl text-gray-600">
                    UI-UX Design
                  </a>
                  <div className="skills flex flex-wrap pt-4">
                    <div className="skill border w-auto px-2 text-gray-500 m-1">Analytical Skills</div>
                    <div className="skill border w-auto px-2 text-gray-500 m-1">SQL</div>
                    <div className="skill border w-auto px-2 text-gray-500 m-1">UI - UX</div>
                    <div className="skill border w-auto px-2 text-gray-500 m-1">Managerial Skills</div>
                  </div>
                </div>
              </div>
              <div className="job-item max-w-sm w-full flex-auto flex flex-col ml-4 border mt-10">
                <div className="job-title bg-orange-500 flex justify-center py-1 border">Senior</div>
                <div className="p-4">
                  <a href="#" className="text-xl md:text-2xl text-gray-600">
                    Automation QA/QC
                  </a>
                  <div className="skills flex flex-wrap pt-4">
                    <div className="skill border w-auto px-2 text-gray-500 m-1">Analytical Skills</div>
                    <div className="skill border w-auto px-2 text-gray-500 m-1">SQL</div>
                    <div className="skill border w-auto px-2 text-gray-500 m-1">UI - UX</div>
                    <div className="skill border w-auto px-2 text-gray-500 m-1">Managerial Skills</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
