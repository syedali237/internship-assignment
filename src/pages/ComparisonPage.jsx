import React from 'react';

const ComparisonItem = ({ icon, title, description, isJurix }) => (
  <div className={`flex items-start mb-6 ${isJurix ? 'text-white' : 'text-gray-700'}`}>
    <div className="flex-shrink-0 mr-4">
      {icon === 'document' && (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )}
      {icon === 'flag' && (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
        </svg>
      )}
      {icon === 'scale' && (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )}
    </div>
    <div>
      <h3 className="font-bold mb-1">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  </div>
);

const ComparisonTable = () => (
  <div className="flex justify-center items-center mb-[150px]">
    <div className="flex max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
    
      <div className="w-1/2 bg-gradient-to-r from-[#009EFF] via-[rgba(0,158,255,0.75)] to-[rgba(0,158,255,0.25)] p-8  ">
        <h2 className="text-3xl font-bold text-white mb-6">Jurix</h2>
        <ComparisonItem
          icon="document"
          title="The output you need"
          description="Save time with our unique legal business logic that automatically produces all documents you need."
          isJurix={true}
        />
        <ComparisonItem
          icon="flag"
          title="Priority-oriented"
          description="With Jurix, your tasks and deadlines are automatically prioritized, so you can work with the most important ones first."
          isJurix={true}
        />
        <ComparisonItem
          icon="scale"
          title="The experts got you covered"
          description="Our lawyers and CAcs ensure that you are always compliant with regulations."
          isJurix={true}
        />
      </div>

      <div className="w-1/2 p-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-6">Regular</h2>
        <ComparisonItem
          icon="document"
          title="Write the hard stuff yourself"
          description="You run your texts against the law, but you'll need to handle the complex documents yourself."
          isJurix={false}
        />
        <ComparisonItem
          icon="flag"
          title="Checklist-oriented risk work"
          description="You assess your risks and match your tasks on a one-to-one basis, manually without any support."
          isJurix={false}
        />
        <ComparisonItem
          icon="scale"
          title="You are responsible for the legal correctness"
          description="You must take full responsibility for all legal documents and compliance."
          isJurix={false}
        />
      </div>

    </div>
  </div>
);

export default ComparisonTable;

// background: linear-gradient(270deg, rgba(0, 158, 255, 0.25) 0%, rgba(0, 158, 255, 0.495) 24.5%, rgba(0, 158, 255, 0.75) 50%, #009EFF 100%);
// box-shadow: 0px 0px 15px 0px #455A640D;
