import { createSignal, type JSX, Show } from 'solid-js';
import chevronDown from '../assets/Icons/chevronDown.png';
import { tw } from 'typewind';

const Selector = ({
  menu,
  items,
}: {
  menu: () => string;
  items: JSX.Element;
}) => {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <div class={tw.relative.inline_block.text_left}>
      <div>
        <button
          type="button"
          class={tw.flex.items_center.gap_1.w_full.rounded_md.border.border_gray_300.shadow_sm.px_4.py_2.bg_white
            .dark(tw.bg_zinc_800)
            .text_sm.font_medium.text_gray_700.dark(tw.text_white)
            .hover(tw.bg_gray_50)
            .hover(tw.dark(tw.bg_zinc_700))
            .focus(
              tw.outline_none.ring_2.ring_offset_2.ring_offset_gray_100$['30']
                .ring_zinc_500$['30'],
            )}
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen())}
        >
          {menu()}
          <img
            src={chevronDown}
            alt="Chevron Down"
            class={
              tw.raw('platform-icon').size_['0.6rem'].object_contain
                .translate_y_['0.1rem']
            }
          />
        </button>
      </div>

      <Show when={isOpen()}>
        <div
          class={tw.z_10.absolute.mt_2.w_44.rounded_md.shadow_lg.bg_white
            .dark(tw.bg_zinc_800)
            .ring_1.ring_black.ring_opacity_5.focus(tw.outline_none)}
          // class={tw.z_10.absolute.mt_2.w_full.rounded_md.shadow_lg.bg_white.dark(tw.bg_zinc_800).ring_1.ring_black.ring_opacity_5.focus(tw.outline_none)}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <button
            type="button"
            class={tw.py_1}
            onClick={() => setIsOpen(false)}
          >
            {items}
          </button>
        </div>
      </Show>
    </div>
  );
};

export default Selector;
