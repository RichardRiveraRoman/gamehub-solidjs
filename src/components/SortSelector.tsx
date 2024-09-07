import { For } from 'solid-js';
import Selector from './Selector';
import { tw } from 'typewind';

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: () => string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ];

  const currentSortOrder = () =>
    sortOrders.find((order) => order.value === sortOrder());

  return (
    <Selector
      menu={() => `Order: ${currentSortOrder()?.label || 'Relevance'}`}
      items={
        <For each={sortOrders}>
          {(order) => (
            <button
              type="button"
              value={order.value}
              class={tw.text_gray_700
                .dark(tw.text_white)
                .w_full.text_left.px_4.py_2.text_sm.hover(
                  tw.bg_gray_100.dark(tw.bg_zinc_500.text_white).text_gray_900,
                )}
              role="menuitem"
              onClick={() => onSelectSortOrder(order.value)}
            >
              {order.label}
            </button>
          )}
        </For>
      }
    />
  );
};

export default SortSelector;
