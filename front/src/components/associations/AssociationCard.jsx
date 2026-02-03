import React, { useState } from 'react';
import Button from '../common/Button';
import { useAuth } from '../../context/AuthContext';
import { BiSolidEditAlt } from "react-icons/bi";
import { FaSave, FaExternalLinkAlt } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const AssociationCard = ({ association, onEdit, onDelete }) => {
  const [expanded, setExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { isAuthenticated } = useAuth(); 

  const [form, setForm] = useState({
    name: association.name,
    description: association.description,
    city: association.city,
    contact: association.contact || '',
    link: association.link || '',
  });

  const editInputStyle = `
    w-full
    bg-[var(--bg-secondary)]
    border border-[var(--border-subtle)]
    rounded-xl
    px-3 py-2
    text-sm
    focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent
    outline-none transition-all
  `;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    setForm({
      name: association.name,
      description: association.description,
      city: association.city,
      contact: association.contact || '',
      link: association.link || '',
    });
    setIsEditing(false);
  };

  return (
    <div
      className={`rounded-2xl border transition-all duration-500 overflow-hidden
        ${expanded ? 'shadow-xl -translate-y-1' : 'shadow-sm hover:shadow-md'}
        border-[var(--card-border)] bg-[var(--card-bg)]
      `}
    >
      <div
        className="p-6 cursor-pointer"
        onClick={() => !isEditing && setExpanded(!expanded)}
      >
        <div className="flex justify-between items-start">
          <div className="space-y-2 flex-1 pr-4">
            {/* tag */}
            <span className="inline-block text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider
              bg-[var(--tag-bg)] text-[var(--tag-text)]
            ">
              {association.tag}
            </span>

            {isEditing ? (
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className={editInputStyle + " text-xl font-bold"}
              />
            ) : (
              <h3 className="text-xl font-bold text-[var(--text-heading)]">
                {association.name}
              </h3>
            )}

            {isEditing ? (
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                className={editInputStyle + " mt-1"}
              />
            ) : (
              <p className="text-sm font-medium text-[var(--text-muted)]">
                {association.city}
              </p>
            )}
          </div>

          <div
            className={`p-2 rounded-full transition-colors
              ${expanded
                ? 'bg-[var(--icon-bg-active)] text-[var(--icon-text-active)]'
                : 'bg-[var(--icon-bg)] text-[var(--icon-text)]'}
            `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transition-transform ${expanded ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* expand */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden
            ${expanded ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="pt-4 border-t border-[var(--card-border)] space-y-2">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)]">
              Description
            </h4>
            {isEditing ? (
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={2}
                className={`${editInputStyle} resize-none`}
              />
            ) : (
              <p className="italic text-sm text-[var(--text-muted)]">
                "{association.description}"
              </p>
            )}

            {/* contact */}
            {isEditing ? (
              <input
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="Contact"
                className={editInputStyle}
              />
            ) : (
              association.contact && (
                <p className="text-sm font-medium text-[var(--text-muted)]">
                  Contact: {association.contact}
                </p>
              )
            )}

            {/* link */}
            {isEditing ? (
              <input
                name="link"
                value={form.link}
                onChange={handleChange}
                placeholder="Website"
                className={editInputStyle}
              />
            ) : (
              association.link && (
                <a
                  href={association.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[var(--accent-primary)] hover:underline inline-flex items-center gap-2"
                >
                  Visit <FaExternalLinkAlt />
                </a>
              )
            )}

            {isAuthenticated && (
              <div className="flex gap-2 pt-4">
                {!isEditing ? (
                  <>
                    <Button
                      variant='secondary'
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsEditing(true);
                        setExpanded(true);
                      }}
                    >
                      <BiSolidEditAlt />
                    </Button>
                    <Button
                      variant='error'
                      onClick={(e) => {
                        e.stopPropagation();
                        onDelete(association.id);
                      }}
                    >
                      <AiFillDelete />
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant='primary'
                      onClick={(e) => {
                        e.stopPropagation();
                        onEdit({ ...association, ...form });
                        setIsEditing(false);
                      }}
                    >
                      <FaSave />
                    </Button>
                    <Button
                      variant='secondary'
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCancel();
                      }}
                    >
                      <RxCross1 />
                    </Button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssociationCard;