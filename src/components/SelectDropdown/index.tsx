import { memo, useMemo, useState, useCallback, PropsWithoutRef } from 'react';
import { ChevronDown, ChevronUp, PlusSquare, XSquare } from 'react-feather';

import { List, Item, Header, Container, ListContainer, ActionButton } from './styles';

interface ISelectDropdownProps<T> {
  items: Array<T>;

  placeholder?: string;
  borderColorIndicator: string;

  onChange: (value: T, action?: 'all' | 'clear') => void;
}

interface IGenericItem {
  id: string;
  value: string;
}

const SelectDropdown = <T,>({
  items,
  onChange,
  borderColorIndicator,
  placeholder = 'Select...'
}: PropsWithoutRef<ISelectDropdownProps<T>>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Array<T>>([]);
  const icon = useMemo(() => isOpen ? <ChevronUp /> : <ChevronDown />, [isOpen]);

  const selectedValues = useMemo(() => {
    if (selectedItems.length > 0) {
      return selectedItems.map((item, index, arr) => {
        if (item.id === 'all') return '';
        if (index === arr.length - 1) return `${item.value}.`;
        return `${item.value}, `;
      });
    }

    return undefined;
  }, [selectedItems]);

  const onSelectItem = useCallback((target: T) => {
    let updated: Array<T> = [];
    const { id, value } = target as IGenericItem;
    const exists = selectedItems.includes(target);
    const allIsInList = selectedItems.find((i) => i.id === 'all');

    if (id === 'all') {
      setSelectedItems([]);

      if (selectedItems.includes(target)) {
        onChange(target, 'clear');
        return setSelectedItems([]);
      }

      onChange(target, 'all');
      return setSelectedItems(items);
    }

    if (allIsInList && exists) updated = selectedItems.filter((item) => item.id !== 'all' && item.value !== value);
    else if (exists) updated = selectedItems.filter((item) => item.value !== value);
    else updated = [...selectedItems, target];

    setSelectedItems(updated);
    onChange(target);
  }, [selectedItems, onChange]);

  return (
    <Container>
      <Header borderColor={borderColorIndicator}>
        <span className={!selectedValues && placeholder ? 'placeholder' : ''}>
          {selectedValues || placeholder}
        </span>

        <ActionButton onClick={() => setIsOpen(!isOpen)}>
          {icon}
        </ActionButton>
      </Header>

      {isOpen && (
        <ListContainer>
          <List>
            {items.map((item) => {
              const { id, value } = item as IGenericItem;
              const selected = selectedItems.includes(item);

              return (
                <Item key={id}>
                  {value}
                
                  <ActionButton className={selected ? 'selected' : ''} onClick={() => onSelectItem(item)}>
                    {selected ? <XSquare size={24} color="#bf616a" /> : <PlusSquare size={24} />}
                  </ActionButton>
              </Item>
              );
            })}
          </List>
        </ListContainer>
      )}
    </Container>
  );
};

export default memo(SelectDropdown);