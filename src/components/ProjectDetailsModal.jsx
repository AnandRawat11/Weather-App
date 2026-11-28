import React from "react";
import { projectDetails } from "../data/projectData.js";

export function ProjectDetailsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white dark:bg-slate-850 rounded-[24px] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl border border-slate-200 dark:border-slate-700">
        <div className="flex items-start justify-between pb-4 border-b border-slate-100 dark:border-slate-700">
          <div>
            <span className="text-[11px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded bg-blue-100 text-blue-700">
              Academic Project Submission
            </span>
            <h2 className="text-xl font-extrabold text-slate-800 dark:text-slate-100 mt-1">
              {projectDetails.title}
            </h2>
            <p className="text-xs text-slate-400">
              {projectDetails.batchNo} • {projectDetails.section} • {projectDetails.semester} • Date: {projectDetails.submissionDate}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-750 text-slate-500 hover:text-slate-800 flex items-center justify-center font-bold text-sm"
          >
            ✕
          </button>
        </div>

        <div className="my-4 p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/40 flex items-center justify-between text-xs">
          <div>
            <span className="text-slate-500 font-medium">Faculty Mentor / Guide:</span>
            <span className="ml-2 font-bold text-blue-600 dark:text-blue-400 text-sm">{projectDetails.facultyMentor}</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-blue-500 text-white font-bold text-[10px]">
            EVALUATION READY
          </span>
        </div>

        {/* Team Members & Roles Table */}
        <div className="mt-4">
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-3">Team Members & Role Allocation</h3>
          <div className="overflow-x-auto rounded-xl border border-slate-100 dark:border-slate-700">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-800 text-slate-400">
                <tr>
                  <th className="py-2.5 px-3">S.No.</th>
                  <th className="py-2.5 px-3">Student Name</th>
                  <th className="py-2.5 px-3">University Roll No.</th>
                  <th className="py-2.5 px-3">Role in Project</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {projectDetails.teamMembers.map(member => (
                  <tr key={member.rollNo} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40">
                    <td className="py-2.5 px-3 font-semibold text-slate-500">{member.sNo}</td>
                    <td className="py-2.5 px-3 font-bold text-slate-800 dark:text-slate-100">{member.name}</td>
                    <td className="py-2.5 px-3 text-slate-600 dark:text-slate-300 font-mono">{member.rollNo}</td>
                    <td className="py-2.5 px-3">
                      <span className="px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold text-[11px]">
                        {member.role}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Project Description */}
        <div className="mt-5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-xs">
          <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-1">Project Description</h4>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{projectDetails.description}</p>
        </div>

        {/* Objectives */}
        <div className="mt-5">
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-2">Objectives & Proposed Work</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
            {projectDetails.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-blue-500 font-bold">✓</span> {obj}
              </li>
            ))}
          </ul>
        </div>

        {/* Future Scope */}
        <div className="mt-5">
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-2">Future Scope / Enhancements</h3>
          <div className="flex flex-wrap gap-1.5 text-[11px]">
            {projectDetails.futureScope.map((scope, i) => (
              <span key={i} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-750 text-slate-600 dark:text-slate-300">
                • {scope}
              </span>
            ))}
          </div>
        </div>

        {/* Tools and Technologies */}
        <div className="mt-5">
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-2">Tools & Technologies Used</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
            {projectDetails.toolsAndTechnologies.map(tool => (
              <div key={tool.name} className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                <p className="font-bold text-slate-800 dark:text-slate-200">{tool.name}</p>
                <p className="text-[10px] text-slate-400">{tool.purpose}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-blue-500 text-white font-bold text-xs hover:bg-blue-600 shadow-sm"
          >
            Close Information
          </button>
        </div>
      </div>
    </div>
  );
}

