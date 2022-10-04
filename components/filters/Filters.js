//@ts-check
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { CheckIcon, Icon, Select } from 'native-base';
import { GET_MOVIES_REQUEST_TYPES } from '../../const';

/**
 * @param {{
 *  selectedItem: GetTvsRequestType | GetMoviesRequestType | SearchTypes;
 *  optionItems: Record<string, SearchTypes| GetTvsRequestType | GetMoviesRequestType>;
 *  handleOnChange: Function;
 *  hasError?: boolean;
 * }} props
 */
export const Filters = ({
  handleOnChange,
  selectedItem = GET_MOVIES_REQUEST_TYPES.POPULAR,
  optionItems = GET_MOVIES_REQUEST_TYPES,
  hasError = false,
}) => {
  return (
    <Select
      borderColor={hasError ? '#ff0000' : '#e4e4e7'}
      selectedValue={selectedItem}
      fontSize={16}
      minWidth="130"
      _selectedItem={{
        backgroundColor: '#23776d',
        _text: { color: '#FFFFFF' },
        endIcon: <CheckIcon size="5" color="#FFFFFF" />,
      }}
      onValueChange={(itemSelected) => handleOnChange(itemSelected)}
      dropdownIcon={
        <Icon as={Ionicons} size="5" color="#e4e4e7" name="chevron-down" />
      }
    >
      {Object.values(optionItems).map((item, index) => (
        <Select.Item key={`${item}-${index}`} label={item} value={item} />
      ))}
    </Select>
  );
};

/** @typedef {import('../../types/custom').GetTvsRequestType} GetTvsRequestType */
/** @typedef {import('../../types/custom').GetMoviesRequestType} GetMoviesRequestType */
/** @typedef {import('../../types/custom').MediaTypes} MediaTypes */
/** @typedef {import('../../types/custom').SearchTypes} SearchTypes */
