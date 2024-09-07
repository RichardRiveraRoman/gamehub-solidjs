import { createSignal, JSXElement } from "solid-js";
// import { BsChevronDown } from "react-icons/bs";

const Selector = ({
  menu,
  items,
}: {
  menu: JSXElement;
  items: JSXElement;
}) => {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <div class="relative inline-block text-left">
      <div>
        <button
          type="button"
          // class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-red-500"
          class="flex items-center gap-1 w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-zinc-800 text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-50 hover:dark:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100/30 focus:ring-zinc-500/30"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          {menu}
          {/* <BsChevronDown /> */}
        </button>
      </div>

      {isOpen() && (
        <div
          class="z-10 absolute mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-zinc-800 ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div class="py-1">{items}</div>
        </div>
      )}
    </div>
  );
};

export default Selector;
