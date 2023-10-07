import { Direction } from '.';
export default function useSlide({ pageCount }: {
    pageCount: any;
}): {
    currentIndex: import("vue/types/v3-generated").Ref<number>;
    direction: import("vue/types/v3-generated").Ref<Direction>;
};
