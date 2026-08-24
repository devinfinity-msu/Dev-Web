import React from 'react';
import { Edit2, Trash2, Eye } from 'lucide-react';
import { Button } from '../common/Button';

export const AdminDataTable = ({ columns, data, onEdit, onDelete, onView }) => {
  if (!data || data.length === 0) {
    return (
      <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
        No items recorded in mock state.
      </div>
    );
  }

  return (
    <div style={{
      width: '100%',
      overflowX: 'auto',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-color)',
      backgroundColor: 'var(--bg-card)'
    }}>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        textAlign: 'left',
        fontSize: '0.875rem'
      }}>
        <thead>
          <tr style={{
            backgroundColor: '#090d16',
            borderBottom: '1px solid var(--border-color)',
            color: 'var(--text-secondary)',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {columns.map((col, idx) => (
              <th key={idx} style={{ padding: '1rem 1.25rem', fontWeight: 700 }}>
                {col.header}
              </th>
            ))}
            <th style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIdx) => (
            <tr key={row.id || rowIdx} style={{
              borderBottom: '1px solid var(--border-color)',
              transition: 'background-color 0.15s ease'
            }}>
              {columns.map((col, colIdx) => (
                <td key={colIdx} style={{ padding: '1rem 1.25rem', color: 'var(--text-main)' }}>
                  {col.cell ? col.cell(row) : row[col.accessor]}
                </td>
              ))}
              <td style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>
                <div style={{ display: 'inline-flex', gap: '0.375rem' }}>
                  {onView && (
                    <button
                      onClick={() => onView(row)}
                      style={{ padding: '0.4rem', border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--secondary)', borderRadius: 'var(--radius-xs)', cursor: 'pointer' }}
                      title="View Details"
                    >
                      <Eye size={14} />
                    </button>
                  )}
                  {onEdit && (
                    <button
                      onClick={() => onEdit(row)}
                      style={{ padding: '0.4rem', border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--primary)', borderRadius: 'var(--radius-xs)', cursor: 'pointer' }}
                      title="Edit Item Placeholder"
                    >
                      <Edit2 size={14} />
                    </button>
                  )}
                  {onDelete && (
                    <button
                      onClick={() => onDelete(row)}
                      style={{ padding: '0.4rem', border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--danger)', borderRadius: 'var(--radius-xs)', cursor: 'pointer' }}
                      title="Delete Item Placeholder"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
