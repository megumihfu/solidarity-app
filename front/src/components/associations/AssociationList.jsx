import React from "react";
import AssociationCard from "./AssociationCard";

const AssociationList = ({ associations, onEdit, onDelete }) => {
  return (
    <div className="space-y-4">
      {associations.length === 0 ? (
        <p className="text-[var(--text-secondary)]">No associations found</p>
      ) : (
        associations.map((asso) => (
          <AssociationCard
            key={asso.id}
            association={asso}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

export default AssociationList;