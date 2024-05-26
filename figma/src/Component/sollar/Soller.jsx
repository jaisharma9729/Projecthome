import React, { useEffect, useState } from "react";
import ceoimg from "./Group 89022.jpg";
import './soller.css'
import axios from "axios";


export const Soller = () => {

  const solar = JSON.parse(localStorage.getItem('solar'))

  const getSolar = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/get_solar/')
      console.log(response.data)
      localStorage.setItem('solar', JSON.stringify(response.data))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getSolar()
  }, [])

  useEffect(() => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    const defaultTab = document.querySelector('.tab-btn.active').getAttribute('data-target');
    document.getElementById(defaultTab).classList.remove('hidden');

    tabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');

        tabBtns.forEach((tab) => {
          tab.classList.remove('active');
        });
        btn.classList.add('active');

        tabContents.forEach((content) => {
          content.classList.add('hidden');
        });

        document.getElementById(target).classList.remove('hidden');
      });
    });
  }, [])


  return (
    <section className="bg-light light:bg-zinc-900 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-red-600 font-bold">Procurement Supply Chain Solutions</p>
          <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-700">
            The scale of your solar energy venture, we are here to empower you
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2">
            Whether you are a CEO, CPO, CFO, or a Project Manager, Moglix Business offers you the most diversified bouquet of solutions.
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <button className="tab-btn bg-zinc-200 text-zinc-800 md:py-2 md:px-4 py-1 px-2 mx-1 rounded-md active" data-target="ceo">For CEOs</button>
          <button className="tab-btn bg-zinc-200 text-zinc-800 md:py-2 md:px-4 py-1 px-2 mx-1 rounded-md" data-target="cpo">For CPOs</button>
          <button className="tab-btn bg-zinc-200 text-zinc-800 md:py-2 md:px-4 py-1 px-2 mx-1 rounded-md" data-target="cfo">For CFOs</button>
          <button className="tab-btn bg-zinc-200 text-zinc-800 md:py-2 md:px-4 py-1 px-2 mx-1 rounded-md" data-target="project-managers">For Project Managers</button>
        </div>
        <div id="tab-content">
          {
            solar ?
              <>
                {
                  solar.map((item, i) => {
                    return (
                      <div id={`${item.target}`} key={i} className="tab-content hidden">
                        <div className="grid-container">
                          <div>
                            <img src={ceoimg} alt="Engineer" className="rounded-lg shadow-lg" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-700 mb-4">
                              {item.sub_head}
                            </h3>
                            <div className="mb-4">
                              <h4 className="text-lg font-bold text-zinc-800 dark:text-zinc-700">Complete Solar Energy Projects On-Time</h4>
                              <p className="text-zinc-600 dark:text-zinc-400">
                                Stay on track for on-time completion of solar energy projects with Moglix Business strategic sourcing, fabrication, and project management solutions.
                              </p>
                            </div>
                            <div className="mb-4">
                              <h4 className="text-lg font-bold text-zinc-800 dark:text-zinc-700">Execute Solar Energy Projects Within Budget</h4>
                              <p className="text-zinc-600 dark:text-zinc-400">
                                Stay within the budget of your solar energy project to unlock project cost savings that you can report on the balance sheet to define the gross margin impact.
                              </p>
                            </div>
                            <div className="mb-4">
                              <h4 className="text-lg font-bold text-zinc-800 dark:text-zinc-700">Deploy a Centralized Governance Model for Your Solar Energy Project</h4>
                              <p className="text-zinc-600 dark:text-zinc-400">
                                Track your project across functions like procurement, fabrication, execution, project cost analytics, and supply chain finance with the Moglix Business cloud SaaS tool for project management.
                              </p>
                            </div>
                            <button className="bg-white-600 text-red-600 border-2 font-bold border-red-600 py-1 px-4 rounded-md" onClick={() => alert('Explore CEO Success Stories button clicked')}>Explore CEO Success Stories</button>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </>
              :
              <></>
          }
        </div>
      </div>
    </section>
  );
};
