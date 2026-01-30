import React, { useState, useEffect } from "react";
import AssociationCard from "./AssociationCard";

const AssociationList = ({ searchParams }) => {
  const [associations, setAssociations] = useState([]);

  //@todo fetch real data from backend
  useEffect(() => {
    const mockData = [
      {
        id: 1,
        name: "Restos du Coeur",
        city: "Paris",
        tag: "FOOD",
        description: "Food distributions.",
        link: "https://www.restosducoeur.org/",
        contact: "some contact info"
      },
      {
        id: 2,
        name: "Alyena - Samu Social 69",
        city: "Lyon",
        tag: "SHELTER",
        description: "Shelter for homeless people.",
        link: "https://alynea.org/"
      },
    ];

    // filtering
    const filtered = mockData.filter((asso) => {
      return (
        (!searchParams.name || asso.name.toLowerCase().includes(searchParams.name.toLowerCase())) &&
        (!searchParams.tag || asso.tag === searchParams.tag) &&
        (!searchParams.city || asso.city.toLowerCase().includes(searchParams.city.toLowerCase()))
      );
    });

    setAssociations(filtered);
  }, [searchParams]);

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
