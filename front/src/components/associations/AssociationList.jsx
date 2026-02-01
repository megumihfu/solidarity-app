import React from "react";
import AssociationCard from "./AssociationCard";

const AssociationList = ({ associations }) => {
  return (
    <div className="space-y-4">
      {associations.length === 0 ? (
        <p style={{ color: 'var(--text-secondary)' }}>No associations found</p>
      ) : (
        associations.map((asso) => (
          <AssociationCard key={asso.id} association={asso} />
        ))
      )}
    </div>
  );
};

export default AssociationList;