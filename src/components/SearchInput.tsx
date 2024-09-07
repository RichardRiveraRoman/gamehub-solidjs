import search from '../assets/Icons/search.png'
import { tw } from 'typewind';

const SearchInput = ({
  onSearch,
}: {
  onSearch: (searchText: string) => void;
}) => {
  let ref: HTMLInputElement | null;

  return (
    <form
      class={tw.w_full.flex.items_center}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref) onSearch(ref.value);
      }}
    >
      <img src={search} alt="Search Icon"
        class={tw.relative.inset_x_7.size_5.raw('platform-icon').dark(tw.text_gray_300).text_lg}
      />
      <input
        ref={(el) => (ref = el)}
        type="search"
        class={tw.border_0.h_8.px_8.dark(tw.caret_white.bg_zinc_700).bg_slate_300.outline_zinc_500.w_full.outline.outline_1.rounded_full.placeholder(tw.text_gray_500).focus(tw.ring_0).sm(tw.text_sm)}
        placeholder="Search"
      />
    </form>
  );
};

export default SearchInput;
