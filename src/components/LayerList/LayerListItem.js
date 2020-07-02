import React, { useState, useEffect } from 'react';
import { Flex, Box, Text, Label, Checkbox } from 'theme-ui';
import Switch from '../_primitives/Switch';
import ListItem from '../_primitives/ListItem';
import mapExists from '../../util/mapExists';
import { buildStyle } from './Legend';
import toggleLayerVisibility from './util/toggleLayerVisibility';
import LayerActionsMenu from './LayerActionsMenu';

const LayerListItem = ({
  layerInfo,
  map,
  legend,
  showActions,
  itemActions,
  checkboxStyle
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [style, setStyle] = useState();
  const [legendVisibility, setLegendVisibility] = useState(
    !!legend
  );

  const { layerIds } = layerInfo;

  const handleChange = (e) => {
    const { checked } = e.currentTarget;
    layerIds.map((layerId) => {
      if (checked) {
        setIsChecked(true);
        toggleLayerVisibility(map, layerId, true);
      } else {
        setIsChecked(false);
        toggleLayerVisibility(map, layerId, false);
      }
      return true;
    });
  };

  const showHideLegend = (e) => {
    if (legend) {
      e.preventDefault();
    } else {
      return;
    }
    setLegendVisibility(!legendVisibility);
  };

  useEffect(() => {
    let layerVisibility;
    let checked;
    if (mapExists(map)) {
      if (Object.keys(map).length > 0) {
        map.once('idle', () => {
          layerVisibility = map.getLayoutProperty(layerIds[0], 'visibility');
          checked = layerVisibility !== 'none';
          setIsChecked(checked);
          if (legend) {
            setStyle(
              layerInfo.legendStyle
                ? layerInfo.legendStyle()
                : buildStyle(map.getLayer(layerIds[0]))
            );
          }
        });
      }
    }
  }, [map, layerInfo]);

  let actionMenuSlot;

  if (showActions) {
    actionMenuSlot = <LayerActionsMenu layerActions={itemActions} />;
  } else {
    actionMenuSlot = null;
  }

  const LegendListItem = () => {
    return (
      <Box sx={{ display: legendVisibility ? '' : 'none' }}>
        <ListItem
          css={{ display: legend && style ? '' : 'none' }}
          key={`${layerInfo.layerName}-legend`}
        >
          {style}
        </ListItem>
      </Box>
    );
  };

  let checkbox;
  switch (checkboxStyle) {
    case 'check':
      checkbox = <Checkbox onChange={handleChange} checked={isChecked} />;
      break;
    case 'switch':
      checkbox = <Switch checked={isChecked} onChange={handleChange} />;
      break;
    default:
      checkbox = <Checkbox checked={isChecked} onChange={handleChange} />;
      break;
  }
  return (
    <Box className="listItem">
      <ListItem key={layerInfo.layerName}>
        <Flex>
          <Label>
            {checkbox}
            <Text
              pt={1}
              sx={{
                fontWeight: 'bold',
                cursor: 'pointer',
                '&:hover': { textDecoration: 'underline' }
              }}
              onClick={showHideLegend}
            >
              {layerInfo.layerName}
            </Text>
          </Label>
          {actionMenuSlot}
        </Flex>
      </ListItem>
      {legend ? <LegendListItem /> : null}
    </Box>
  );
};

export default LayerListItem;
