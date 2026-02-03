import React, { useState, useEffect } from "react";
import Button from "../common/Button"; 
import { BiSolidEditAlt } from "react-icons/bi";
import { FaSave } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { FaExternalLinkAlt } from "react-icons/fa";

const InfoCard = ({ info, isAuthenticated, onSave, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    title: info.title,
    content: info.content,
    link: info.link || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!isAuthenticated) return;
    
    onSave({ ...info, ...form });
    setIsEditing(false);
  };

  const editInputStyle =`
    w-full 
    bg-[var(--bg-secondary)] 
    border 
    border-[var(--border-subtle)] 
    px-3 py-2 rounded-lg 
    text-sm focus:ring-2 focus:ring-[var(--accent-primary)] 
    outline-none 
    transition-all
  `;

  useEffect(() => {
    if (!isAuthenticated) {
      setIsEditing(false);
    }
  }, [isAuthenticated]);


  return (
    <div className="p-6 rounded-2xl border bg-[var(--bg-primary)] border-[var(--border-subtle)] relative shadow-sm hover:shadow-md transition-shadow group min-h-[160px]">
      
      {isAuthenticated && !isEditing && (
        <div className="absolute top-4 right-4 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <Button
            variant="secondary"
            onClick={() => setIsEditing(true)}
            className="p-2 min-w-0 rounded-lg"
          >
            <BiSolidEditAlt />
          </Button>
          <Button
            variant="error"
            onClick={() => onDelete(info.id)}
            className="p-2 min-w-0 rounded-lg"
          >
            <AiFillDelete />
          </Button>
        </div>
      )}

      {isEditing ? (
        <div className="space-y-3">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-tight ml-1">Title</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className={editInputStyle}
            />
          </div>
          
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-tight ml-1">Content</label>
            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              rows={3}
              className={`${editInputStyle} resize-none`}
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-tight ml-1">Link (Optional)</label>
            <input
              name="link"
              value={form.link}
              onChange={handleChange}
              className={editInputStyle}
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button
              variant="secondary"
              onClick={() => setIsEditing(false)}
              className="px-3 py-1.5 text-xs"
            >
              <RxCross1 /> Cancel
            </Button>
            <Button
              variant="primary"
              onClick={handleSave}
              className="px-4 py-1.5 text-xs shadow-sm"
            >
              <FaSave /> Save
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <h3 className={`text-lg font-bold text-[var(--text-heading)] mb-2 ${isAuthenticated ? "pr-16" : ""}`}>
              {info.title}
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
              {info.content}
            </p>
          </div>

          {info.link && (
            <div className="pt-3 border-t border-[var(--border-subtle)]">
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[var(--accent-primary)] hover:underline inline-flex items-center gap-2"
              >
                Visit <FaExternalLinkAlt />
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InfoCard;