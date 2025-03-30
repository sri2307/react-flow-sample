import React from 'react';
import { BaseEdge, EdgeLabelRenderer, EdgeProps, getBezierPath } from '@xyflow/react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  edgeLabel: {
    position: 'absolute',
    pointerEvents: 'all',
    fontSize: 12,
  },
  labelContainer: {
    padding: '2px 8px',
    backgroundColor: 'white',
    borderRadius: 4,
    border: '1px solid #e0e0e0',
    fontSize: '0.75rem',
    fontWeight: 500,
  }
});

export default function DashedEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  data,
  labelStyle,
  labelBgStyle,
  labelBgPadding,
  labelBgBorderRadius,
}: EdgeProps) {
  const classes = useStyles();
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
      {data?.label && (
        <EdgeLabelRenderer>
          <div
            style={{
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            }}
            className={classes.edgeLabel}
          >
            <div className={classes.labelContainer}>
              {data.label as React.ReactNode}
            </div>
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
}