import { Handle, Position } from '@xyflow/react';
import { Box, Typography } from '@mui/material';

type NodeData = {
  label: string;
  icon?: string;
  sublabel?: string;
  items?: Array<{icon?: string, label: string}>;
  color?: string;
  appName?: string;
};

// Component Library Node
export const LibraryNode = ({ data }: { data: NodeData }) => {
  return (
    <Box sx={{
      borderRadius: '8px',
      border: '1px solid #fbbf24',
      padding: '12px',
      bgcolor: '#fffbeb',
      boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
      width: '260px'
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        mb: 1.5,
        fontSize: '0.875rem',
        fontWeight: 500,
        bgcolor: 'white',
        px: 1,
        py: 0.5,
        borderRadius: '4px',
        border: '1px solid #fde68a',
        width: 'fit-content'
      }}>
        <span style={{ fontSize: '16px', color: '#b45309' }}>⚙️</span>
        <Typography variant="caption" sx={{ fontWeight: 500 }}>COMPONENT LIBRARY</Typography>
      </Box>
      
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
        {[
          { icon: "⬅️", label: "index.ts" },
          { icon: "🎨", label: "Gantt Charts" },
          { icon: "📊", label: "Pie Charts" },
          { icon: "📋", label: "Data Grid" },
          { icon: "ℹ️", label: "Tooltips" },
          { icon: "🔲", label: "Accordion" },
          { icon: "📅", label: "Date Pickers" },
          { icon: "🌿", label: "Tree View" },
          { icon: "💡", label: "Tooltip" },
        ].map((item, index) => (
          <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <Box sx={{ 
              fontSize: '18px',
              width: '28px',
              height: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 0.5,
            }}>
              {item.icon}
            </Box>
            <Typography variant="caption">{item.label}</Typography>
          </Box>
        ))}
      </Box>
      
      <Handle type="source" position={Position.Right} id="right" style={{ background: '#fbbf24', width: '10px', height: '10px' }} />
    </Box>
  );
};

// Auth Module Node
export const AuthNode = ({ data }: { data: NodeData }) => {
  return (
    <Box sx={{
      borderRadius: '8px',
      border: '1px solid #fbbf24',
      padding: '12px',
      bgcolor: '#fffbeb',
      boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
      width: '260px'
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        mb: 1.5,
        fontSize: '0.875rem',
        fontWeight: 500,
        bgcolor: 'white',
        px: 1,
        py: 0.5,
        borderRadius: '4px',
        border: '1px solid #fde68a',
        width: 'fit-content'
      }}>
        <span style={{ fontSize: '16px', color: '#b45309' }}>🔒</span>
        <Typography variant="caption" sx={{ fontWeight: 500 }}>AUTH MODULE</Typography>
      </Box>
      
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
        {[
          { icon: "🟦", label: "MSAL Initialization" },
          { icon: "🔄", label: "Token Refresh Management" },
          { icon: "👤", label: "User Role Management" },
          { icon: "🛡️", label: "Multi-factor Authentication" },
        ].map((item, index) => (
          <Box key={index} sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            textAlign: 'center',
            p: 1
          }}>
            <Box sx={{ 
              fontSize: '18px',
              width: '28px',
              height: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 0.5
            }}>
              {item.icon}
            </Box>
            <Typography variant="caption">{item.label}</Typography>
          </Box>
        ))}
      </Box>
      
      <Handle type="source" position={Position.Right} id="right" style={{ background: '#fbbf24', width: '10px', height: '10px' }} />
    </Box>
  );
};

// Host Application Node
export const HostNode = ({ data }: { data: NodeData }) => {
  return (
    <Box sx={{
      borderRadius: '8px',
      border: '1px solid #fbbf24',
      padding: '12px',
      bgcolor: '#fffbeb',
      boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
      width: '300px'
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        mb: 1.5,
        fontSize: '0.875rem',
        fontWeight: 500,
        bgcolor: 'white',
        px: 1,
        py: 0.5,
        borderRadius: '4px',
        border: '1px solid #fde68a',
        width: 'fit-content'
      }}>
        <span style={{ fontSize: '16px', color: '#b45309' }}>🖥️</span>
        <Typography variant="caption" sx={{ fontWeight: 500 }}>HOST APPLICATION</Typography>
      </Box>
      
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ 
          borderRadius: '8px', 
          border: '1px solid #d8b4fe', 
          p: 1.5, 
          bgcolor: '#f5f3ff', 
          mb: 2
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            mb: 1.5,
            fontSize: '0.75rem',
            fontWeight: 500,
            bgcolor: 'white',
            px: 1,
            py: 0.5,
            borderRadius: '4px',
            border: '1px solid #e9d5ff',
            width: 'fit-content'
          }}>
            <span style={{ fontSize: '14px', color: '#7e22ce' }}>📦</span>
            <Typography variant="caption" sx={{ fontWeight: 500 }}>SHARED DEPENDENCIES</Typography>
          </Box>
          
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1.5 }}>
            {[
              { icon: "⚛️", label: "React", type: "react" },
              { icon: "🧩", label: "MUI", type: "mui" },
              { icon: "🔄", label: "Redux Toolkit", type: "redux" },
              { icon: "🔷", label: "TypeScript", type: "typescript" },
              { icon: "🔍", label: "ESLint", type: "eslint" },
            ].map((item, index) => (
              <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Box sx={{ 
                  fontSize: '20px',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 0.5
                }}>
                  {item.icon}
                </Box>
                <Typography variant="caption">{item.label}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
        
        <Box sx={{ textAlign: 'center', mb: 1 }}>
          <Box sx={{
            display: 'inline-block',
            fontSize: '0.875rem',
            fontWeight: 500,
            color: '#4b5563',
            px: 2,
            py: 0.5,
            borderRadius: '4px',
            border: '1px solid #d1d5db',
          }}>
            Routing and Lazy-loading
          </Box>
        </Box>
      </Box>
      
      <Handle type="target" position={Position.Left} id="left" style={{ background: '#fbbf24', width: '10px', height: '10px' }} />
      <Handle type="source" position={Position.Right} id="right" style={{ background: '#fbbf24', width: '10px', height: '10px' }} />
    </Box>
  );
};

// Application Modules Node (original, now replaced by individual AppNodes)
export const ModulesNode = ({ data }: { data: NodeData }) => {
  return (
    <Box sx={{
      borderRadius: '8px',
      border: '1px solid #fbbf24',
      padding: '12px',
      bgcolor: '#fffbeb',
      boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
      width: '260px'
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        mb: 1.5,
        fontSize: '0.875rem',
        fontWeight: 500,
        bgcolor: 'white',
        px: 1,
        py: 0.5,
        borderRadius: '4px',
        border: '1px solid #fde68a',
        width: 'fit-content'
      }}>
        <span style={{ fontSize: '16px', color: '#b45309' }}>🧩</span>
        <Typography variant="caption" sx={{ fontWeight: 500 }}>APPLICATION MODULES</Typography>
      </Box>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        <Box sx={{ 
          borderRadius: '8px', 
          border: '1px solid #d8b4fe', 
          p: 2, 
          bgcolor: '#f5f3ff'
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            mb: 1.5,
            fontSize: '0.75rem',
            fontWeight: 500,
            bgcolor: 'white',
            px: 1,
            py: 0.5,
            borderRadius: '4px',
            border: '1px solid #e9d5ff',
            width: 'fit-content'
          }}>
            <span style={{ fontSize: '14px', color: '#7e22ce' }}>⚙️</span>
            <Typography variant="caption" sx={{ fontWeight: 500 }}>APPLICATION 2</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2">Routing</Typography>
          </Box>
        </Box>
        
        <Box sx={{ 
          borderRadius: '8px', 
          border: '1px solid #d8b4fe', 
          p: 2, 
          bgcolor: '#f5f3ff'
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            mb: 1.5,
            fontSize: '0.75rem',
            fontWeight: 500,
            bgcolor: 'white',
            px: 1,
            py: 0.5,
            borderRadius: '4px',
            border: '1px solid #e9d5ff',
            width: 'fit-content'
          }}>
            <span style={{ fontSize: '14px', color: '#7e22ce' }}>⚙️</span>
            <Typography variant="caption" sx={{ fontWeight: 500 }}>APPLICATION 1</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2">Routing</Typography>
          </Box>
        </Box>
      </Box>
      
      <Handle type="target" position={Position.Left} id="left" style={{ background: '#fbbf24', width: '10px', height: '10px' }} />
      <Handle type="source" position={Position.Left} id="source" style={{ background: '#fbbf24', width: '10px', height: '10px', top: '70%' }} />
    </Box>
  );
};

// Individual Application Node (new)
export const AppNode = ({ data }: { data: NodeData }) => {
  return (
    <Box sx={{
      borderRadius: '8px',
      border: '1px solid #fbbf24',
      padding: '12px',
      bgcolor: '#fffbeb',
      boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
      width: '260px'
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        mb: 1.5,
        fontSize: '0.875rem',
        fontWeight: 500,
        bgcolor: 'white',
        px: 1,
        py: 0.5,
        borderRadius: '4px',
        border: '1px solid #fde68a',
        width: 'fit-content'
      }}>
        <span style={{ fontSize: '16px', color: '#b45309' }}>🧩</span>
        <Typography variant="caption" sx={{ fontWeight: 500 }}>{data.appName || 'APPLICATION'}</Typography>
      </Box>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ 
          borderRadius: '8px', 
          border: '1px solid #d8b4fe', 
          p: 2, 
          bgcolor: '#f5f3ff'
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            mb: 1.5,
            fontSize: '0.75rem',
            fontWeight: 500,
            bgcolor: 'white',
            px: 1,
            py: 0.5,
            borderRadius: '4px',
            border: '1px solid #e9d5ff',
            width: 'fit-content'
          }}>
            <span style={{ fontSize: '14px', color: '#7e22ce' }}>⚙️</span>
            <Typography variant="caption" sx={{ fontWeight: 500 }}>INTERNAL MODULES</Typography>
          </Box>
          
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1 }}>
            {[
              { icon: "📝", label: "Forms" },
              { icon: "📊", label: "Dashboard" },
              { icon: "🔍", label: "Search" },
              { icon: "⚙️", label: "Settings" },
            ].map((item, index) => (
              <Box key={index} sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                textAlign: 'center',
                p: 0.5
              }}>
                <Box sx={{ 
                  fontSize: '16px',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 0.5
                }}>
                  {item.icon}
                </Box>
                <Typography variant="caption">{item.label}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
        
        <Box sx={{ textAlign: 'center' }}>
          <Box sx={{
            display: 'inline-block',
            fontSize: '0.875rem',
            fontWeight: 500,
            color: '#4b5563',
            px: 2,
            py: 0.5,
            borderRadius: '4px',
            border: '1px solid #d1d5db',
          }}>
            Independent Deployment
          </Box>
        </Box>
      </Box>
      
      <Handle type="target" position={Position.Left} id="left" style={{ background: '#fbbf24', width: '10px', height: '10px' }} />
      <Handle type="source" position={Position.Left} id="left-source" style={{ background: '#fbbf24', width: '10px', height: '10px', top: '70%' }} />
      <Handle type="source" position={Position.Right} id="right" style={{ background: '#fbbf24', width: '10px', height: '10px' }} />
      <Handle type="target" position={Position.Right} id="right-target" style={{ background: '#fbbf24', width: '10px', height: '10px', top: '70%' }} />
    </Box>
  );
};

export function LabeledEdge({ data }: { data: {label: string} }) {
  return (
    <Box sx={{
      px: 1,
      py: 0.5,
      bgcolor: 'white',
      border: '1px solid #d1d5db',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontWeight: 500
    }}>
      {data.label}
    </Box>
  );
}