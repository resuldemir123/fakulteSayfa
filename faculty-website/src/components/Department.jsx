import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';
import { facultyInfo } from '../data/facultyData';

const Departments = () => {
  const [expandedDept, setExpandedDept] = useState(null);

  const toggleExpand = (id) => {
    setExpandedDept(expandedDept === id ? null : id);
  };

  return (
    <div className="departments-container">
      <h1 className="section-title">Akademik Bölümler</h1>
      
      <div className="departments-grid">
        {facultyInfo.departments.map((dept) => (
          <div key={dept.id} className="department-card">
            <div 
              className="dept-header"
              onClick={() => toggleExpand(dept.id)}
            >
              <h2>{dept.name}</h2>
              <button className="expand-btn">
                {expandedDept === dept.id ? <ChevronUp /> : <ChevronDown />}
              </button>
            </div>
            
            {expandedDept === dept.id && (
              <div className="dept-details">
                <p className="dept-description">{dept.description}</p>
                
                <div className="dept-programs">
                  <h3>Programlar</h3>
                  <ul>
                    {dept.programs.map((program, idx) => (
                      <li key={idx}>{program}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="dept-facilities">
                  <h3>Olanaklar</h3>
                  <div className="facilities-grid">
                    {dept.facilities.map((facility, idx) => (
                      <span key={idx} className="facility-tag">
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;