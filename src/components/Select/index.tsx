import { memo, useMemo, useState, useCallback, PropsWithoutRef } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';

import { Item, List, Header, Container, ActionButton, ListContainer } from './styles';

interface ISelectProps<T> {
  items: Array<T>;

  placeholder?: string;
  borderColorIndicator: string;

  onChange: (value: T) => void;
}

interface IGenericItem {
  id: string;
  value: string;
}

const Select = <T,>({
  items,
  onChange,
  borderColorIndicator,
  placeholder = 'Select...',
}: PropsWithoutRef<ISelectProps<T>>) => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState<T | undefined>();
  const icon = useMemo(() => isOpen ? <ChevronUp /> : <ChevronDown />, [isOpen]);

  const onSelectItem = useCallback((target: T) => {
    setSelectedItem(target);
    onChange(target);
    setIsOpen(false);
  }, [onChange]);

  return (
    <Container>
      <Header borderColor={borderColorIndicator}>
        <span className={!selectedItem && placeholder ? 'placeholder' : ''}>
          {selectedItem?.value || placeholder}
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
              const selected = selectedItem?.id === id || false;

              return (
                <Item
                  key={id}
                  onClick={() => onSelectItem(item)}
                  className={selected ? 'selected' : ''}
                >
                  {value}
                </Item>
              );
            })}
          </List>
        </ListContainer>
      )}
    </Container>
  );
};

export default memo(Select);